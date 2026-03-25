import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import projects from "@/data/projects.json";
import heroImg from "@/assets/hero-garden.jpg";
import serviceImg from "@/assets/service-landscaping.jpg";
import outdoorImg from "@/assets/outdoor-garden.jpg";

const projectImages = [heroImg, serviceImg, outdoorImg];

const Projects = () => {
  return (
    <section id="projects" className="section-padding" style={{ background: "var(--gradient-sand)" }}>
      <div className="container-wide mx-auto">
        <div className="text-center mb-16">
          <p className="section-subtitle">Our Work</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={projectImages[i % projectImages.length]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-primary">{project.category}</span>
                <h3 className="text-xl font-semibold text-foreground font-display mt-1 mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {project.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
