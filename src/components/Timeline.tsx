interface TimelineItem {
  title: string;
  organization: string;
  duration: string;
  responsibilities: string[];
  current?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative">
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className={`w-4 h-4 rounded-full border-2 mt-2 ${
                item.current ? 'border-amber-400 bg-amber-400' : 'border-amber-400 bg-slate-900'
              }`}></div>
              {index !== items.length - 1 && (
                <div className="w-1 h-24 bg-gradient-to-b from-amber-400 to-slate-700 mt-4"></div>
              )}
            </div>

            <div className="flex-1 pb-8">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-amber-400/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-amber-400 text-sm mt-1">{item.organization}</p>
                  </div>
                  <span className="text-slate-400 text-sm whitespace-nowrap ml-4">{item.duration}</span>
                </div>

                <ul className="space-y-2 mt-4">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex gap-2">
                      <span className="text-amber-400 flex-shrink-0">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
