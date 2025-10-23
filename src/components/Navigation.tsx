const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Simtestlab logo"
            className="h-8 w-8 object-contain"
            aria-hidden={false}
          />
          <span className="text-2xl font-bold">Simtestlab</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#solutions" className="text-sm hover:text-foreground/80 transition-colors">
            Solutions
          </a>
          <a href="#advantages" className="text-sm hover:text-foreground/80 transition-colors">
            Why Us
          </a>
          <a href="#contact" className="text-sm hover:text-foreground/80 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;