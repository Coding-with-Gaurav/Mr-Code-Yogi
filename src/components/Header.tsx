const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold text-slate-900">Mr Code Yogi</div>
          <div className="flex gap-8 text-sm">
            <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Projects
            </a>
            <a href="#experience" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Experience
            </a>
            <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Skills
            </a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
