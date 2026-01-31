const Skills = () => {
  const services = [
    {
      number: "01",
      title: "E-Commerce Management",
      description: "Complete Shopify store setup, optimization, and management for maximum conversions.",
    },
    {
      number: "02",
      title: "Digital Marketing",
      description: "Strategic campaigns across Meta, Google, and other platforms to drive growth.",
    },
    {
      number: "03",
      title: "Brand Identity",
      description: "Creative visuals, engaging content, and consistent storytelling that leave a lasting impression.",
    },
    {
      number: "04",
      title: "Social Media Design",
      description: "Eye-catching graphics and content that boost engagement and brand awareness.",
    },
  ];

  const tools = [
    { name: "Shopify", category: "E-Commerce" },
    { name: "WordPress", category: "CMS" },
    { name: "Meta Ads", category: "Marketing" },
    { name: "Google Ads", category: "Marketing" },
    { name: "Canva", category: "Design" },
    { name: "Adobe Illustrator", category: "Design" },
    { name: "Figma", category: "Design" },
    { name: "Google Analytics", category: "Analytics" },
    { name: "SEO Tools", category: "Marketing" },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-4">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-display">
            Skills & Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="text-4xl font-display font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                {service.number}
              </span>
              <h3 className="text-xl font-display font-semibold mt-4 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div>
          <h3 className="text-xl font-display font-semibold text-center mb-8">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group px-5 py-3 rounded-full bg-card border border-border/50 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
              >
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </span>
                <span className="text-xs text-muted-foreground ml-2">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;