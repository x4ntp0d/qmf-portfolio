import { memo } from "react";
import { skillCategories } from "@/data/portfolio";

const Skills = () => (
  <section id="skills" className="section-shell surface-strong">
    <div className="max-w-4xl w-full space-y-12 animate-slide-up">
      <h2 className="text-4xl md:text-6xl font-bold">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-6 bg-card border border-border rounded hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded bg-foreground/5 text-foreground shadow-inner">{category.icon}</div>
              <h3 className="text-xl font-mono font-semibold">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={`${category.title}-${skill}`} className="text-muted-foreground">
                  • {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default memo(Skills);
