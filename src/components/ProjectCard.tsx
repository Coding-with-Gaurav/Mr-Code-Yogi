import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const ProjectCard = ({ title, description, technologies, link }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col">
      <div className="flex-1">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-slate-900 leading-tight">{title}</h3>
          <a href={link} className="text-blue-600 hover:text-blue-700 flex-shrink-0">
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
