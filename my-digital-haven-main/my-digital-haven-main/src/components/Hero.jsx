import { Button } from "./ui/button";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import profileImage from "@/assets/myprofile.jpg";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative flex-shrink-0">
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              {/* Circle background with gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary to-card border border-border/50" />
              
              {/* Profile image */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-border/30">
                <img
                  src={profileImage}
                  alt="Usman Ahmed Qureshi"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -right-4 bottom-16 bg-primary text-primary-foreground px-4 py-3 rounded-2xl shadow-lg animate-float">
                <p className="text-sm font-semibold">E-Commerce</p>
                <p className="text-xs opacity-90">Expert</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-primary font-medium uppercase tracking-wider mb-4 animate-fade-in">
              Hello Everyone
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4 animate-slide-up">
              I'm <span className="text-gradient">Usman Ahmed</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground font-display mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              E-Commerce & Digital Marketing Specialist
            </h2>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-8 text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <a href="tel:+923343303759" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} />
                +92 334 330 3759
              </a>
              <a href="mailto:usmanahmedq30@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} />
                usmanahmedq30@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                Karachi, Pakistan
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" asChild>
              <a href="#contact">Hire Me</a>
               </Button>

              <Button variant="heroOutline" size="lg" asChild>
              <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 