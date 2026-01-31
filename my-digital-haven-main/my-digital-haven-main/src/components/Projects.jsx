const Projects = () => {
  const projects = [
    {
      category: "E-Commerce",
      title: "SV BAZAAR",
      description: "Shopify E-Commerce Website",
      color: "from-cyan-500/20 to-teal-500/20",
    },
    {
      category: "Fashion",
      title: "DUKHTER",
      description: "Shopify Fashion Store",
      color: "from-pink-500/20 to-rose-500/20",
    },
    {
      category: "Textile",
      title: "AL JALIL FABRICS",
      description: "Shopify Clothing & Textile Store",
      color: "from-amber-500/20 to-orange-500/20",
    },
    {
      category: "Publications",
      title: "NAEYUFAQ GROUP",
      description: "WordPress Women Magazine",
      color: "from-violet-500/20 to-purple-500/20",
    },
    {
      category: "E-Commerce",
      title: "LUVETTO",
      description: "Shopify Clothing & Textile Store",
      color: "from-emerald-500/20 to-green-500/20",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Recent Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in e-commerce development and digital marketing across various industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                  {project.category}
                </span>
                
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;