interface SkillBadgesProps {
  category: string;
  skills: string[];
}

const SkillBadges = ({ category, skills }: SkillBadgesProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">{category}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className="relative group"
            style={{
              animationDelay: `${index * 0.05}s`,
            }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <button className="relative px-4 py-2 bg-slate-800 text-amber-300 rounded-lg text-sm font-medium hover:text-white transition-colors duration-300 border border-slate-700 group-hover:border-amber-400/50">
              {skill}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBadges;
