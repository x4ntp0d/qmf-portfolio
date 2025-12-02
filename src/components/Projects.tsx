import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chip } from "./Chip";

const Projects = () => {
  const projects = [
    {
      title: "setup-lara.sh · LTE Cat 4 para Raspberry PLC",
      description: "Script industrial para integrar el módem Ublox LARA-L6004D en PLCs basados en Raspberry Pi. Automatiza APN, servicios systemd, PPP y control UART vía comandos AT con reconexión robusta.",
      tech: ["Bash", "Python", "systemd", "PPP", "UART/AT commands"],
      github: "https://github.com/x4ntp0d/rpi-lara-l6004d-setup",
      demo: "https://apps.industrialshields.com/main/rpi/rpiplc_v6/setup-lara.sh"
    }
  ];

  return (
    <section id="projects" className="section-shell surface-strong">
      <div className="max-w-4xl w-full space-y-12 animate-slide-up">
        <h2 className="text-4xl md:text-6xl font-bold">Proyectos</h2>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="p-8 bg-card border border-border rounded hover:shadow-lg transition-all duration-300 space-y-4"
            >
              <h3 className="text-2xl font-bold font-mono">{project.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <Chip key={techIndex} label={tech} />
                ))}
              </div>
              {(project.github || project.demo) && (
                <div className="flex gap-4 pt-2">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-mono"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-accent hover:bg-accent/90 font-mono shadow-md shadow-accent/20"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
