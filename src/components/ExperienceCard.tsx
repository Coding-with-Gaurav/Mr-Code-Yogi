interface ExperienceCardProps {
  title: string;
  organization: string;
  duration: string;
  responsibilities: string[];
}

const ExperienceCard = ({ title, organization, duration, responsibilities }: ExperienceCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          <p className="text-slate-600 mt-1">{organization}</p>
        </div>
        <span className="text-blue-600 text-sm font-medium whitespace-nowrap">{duration}</span>
      </div>
      <ul className="space-y-2">
        {responsibilities.map((resp, index) => (
          <li key={index} className="text-slate-600 text-sm flex items-start gap-2">
            <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
            <span>{resp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
