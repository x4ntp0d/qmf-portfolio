import { memo } from "react";
import { experiences } from "@/data/portfolio";
import { Chip } from "./Chip";

const Experience = () => (
  <section id="experience" className="section-shell surface-soft">
    <div className="max-w-4xl w-full space-y-12 animate-slide-up">
      <h2 className="text-4xl md:text-6xl font-bold">Experiencia</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={`${exp.title}-${exp.year}`}
            className="border-l-2 border-[hsl(var(--ring))] px-6 py-7 md:px-8 md:py-8 bg-card/70 rounded-lg shadow-[0_6px_20px_-10px_rgba(15,23,42,0.25)]"
          >
            <div className="space-y-3">
              <p className="text-sm font-mono text-accent">{exp.year}</p>
              <h3 className="text-2xl font-bold">{exp.title}</h3>
              <p className="text-lg text-muted-foreground font-mono">{exp.company}</p>
              <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill) => (
                  <Chip key={`${exp.title}-${skill}`} label={skill} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default memo(Experience);
