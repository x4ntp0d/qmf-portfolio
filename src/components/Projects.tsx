import { memo } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import { Chip } from "./Chip";

const Projects = () => (
  <section id="projects" className="section-shell surface-strong">
    <div className="max-w-4xl w-full space-y-12 animate-slide-up">
      <h2 className="text-4xl md:text-6xl font-bold">Proyectos</h2>
      <div className="grid gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-8 bg-card border border-border rounded hover:shadow-lg transition-all duration-300 space-y-4"
          >
            <h3 className="text-2xl font-bold font-mono">{project.title}</h3>
            <p className="text-foreground/80 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Chip key={`${project.title}-${tech}`} label={tech} />
              ))}
            </div>
            {(project.github || project.demo) && (
              <div className="flex gap-4 pt-2">
                {project.github && (
                  <Button variant="outline" size="sm" className="font-mono" asChild>
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

export default memo(Projects);
