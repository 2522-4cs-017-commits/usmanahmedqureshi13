import { GraduationCap, Award, Languages, Briefcase } from "lucide-react";

const About = () => {
  const experience = [
    {
      role: "Digital Marketing & E-commerce Specialist",
      company: "Crescentic Digital",
    },
    {
      role: "Chief Digital Officer (CDO)",
      company: "AL Jalil Fabrics",
    },
    {
      role: "Organization Manager",
      company: "JMI Media House",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */} 
        <div className="text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-4">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-display">My Story</h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Bio */}
          <div className="space-y-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I help brands build stronger digital identities and drive e-commerce growth through Shopify management, digital marketing, and content creation — delivering higher conversions, stronger engagement, and sustainable online success.
            </p>

            {/* Education & Certification */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-card border border-border/50 card-gradient">
                <GraduationCap className="text-primary mb-4" size={28} />
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">
                  Bachelors of Computer Science (BSCS)
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  2025 - Present | GU Tech
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/50 card-gradient">
                <Award className="text-primary mb-4" size={28} />
                <h3 className="font-semibold mb-2">Certification</h3>
                <p className="text-sm text-muted-foreground">
                  Fundamentals of Digital Marketing
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  Google Digital Garage
                </p>
              </div>
            </div>

            {/* Languages */}
            <div className="p-6 rounded-2xl bg-card border border-border/50 card-gradient">
              <Languages className="text-primary mb-4" size={28} />
              <h3 className="font-semibold mb-2">Languages</h3>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>English - Fluent</span>
                <span>Urdu - Fluent</span>
              </div>
            </div>
          </div>

          {/* Right: Experience */}
          <div>
            <div className="p-6 rounded-2xl bg-card border border-border/50 card-gradient h-full">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-primary" size={28} />
                <h3 className="font-semibold text-lg">Work Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full before:animate-pulse"
                  >
                    <h4 className="font-medium text-foreground">{exp.role}</h4>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;