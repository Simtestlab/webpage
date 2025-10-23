const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Simtestlab</h3>
            <p className="text-sm text-muted-foreground">
              Powering the next energy revolution through advanced battery technology.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Energy Management</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Battery Intelligence</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Storage Systems</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Testing & Safety</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sustainability</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">News</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">White Papers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Simtestlab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
