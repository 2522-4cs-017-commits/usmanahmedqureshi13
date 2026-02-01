const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#home" className="text-2xl font-bold font-display">
            <span className="text-foreground">UA</span>
            <span className="text-primary">Q</span>
          </a>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Usman Ahmed Qureshi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
