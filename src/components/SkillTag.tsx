interface SkillTagProps {
  skill: string;
}

const SkillTag = ({ skill }: SkillTagProps) => {
  return (
    <span className="px-4 py-2 bg-white text-slate-700 rounded-lg text-sm font-medium shadow-sm border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
      {skill}
    </span>
  );
};

export default SkillTag;
