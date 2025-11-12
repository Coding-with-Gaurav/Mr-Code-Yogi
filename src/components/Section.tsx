import { LucideIcon } from 'lucide-react';

interface SectionProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

const Section = ({ icon: Icon, title, children }: SectionProps) => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <Icon className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default Section;
