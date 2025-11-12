import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  link?: string;
  github?: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/20"
        >
          <div className="h-40 bg-gradient-to-br from-amber-400/10 to-blue-400/10 flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 opacity-50"></div>
            <div className="relative text-center px-4">
              <p className="text-amber-400 font-semibold text-sm mb-2">{project.title}</p>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>

            <p className="text-slate-400 text-xs leading-relaxed">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-amber-400/10 text-amber-300 rounded text-xs font-medium border border-amber-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-4 border-t border-slate-700">
              {project.link && (
                <a
                  href={project.link}
                  className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors text-sm"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
