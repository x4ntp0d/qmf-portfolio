import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Hero = () => (
  <section className="section-shell hero-shell surface-strong hero-backdrop animate-fade-in">
    <div className="max-w-4xl w-full mx-auto">
      <div className="space-y-6 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-sm">
          Queralt Martínez Fernández
        </h1>
        <h2 className="text-1xl md:text-2xl text-[hsl(200_30%_92%)] font-mono">
          Desarrolladora de sistemas embebidos
        </h2>
        <p className="text-lg md:text-xl text-[hsl(200_22%_88%)] max-w-2xl font-body leading-relaxed">
          Desarrolladora de sistemas embebidos con 5 años de experiencia desarrollando y validando PLCs open source basados en Raspberry Pi, Arduino y ESP32. Especializada en automatización industrial, integración de hardware y testing con instrumentación tales como analizador lógico, multímetro digital u osciloscopio.
        </p>
        <div className="flex flex-wrap gap-4 pt-4 justify-center">
          <Button
            variant="default"
            size="lg"
            className="font-mono bg-[hsl(200_30%_96%)] text-[hsl(228_36%_18%)] hover:bg-[hsl(200_26%_92%)] border border-[hsl(220_24%_80%)] shadow-md shadow-accent/25 hover:-translate-y-[2px] hover:shadow-lg transition-all"
            asChild
          >
            <a href="#projects">Ver Proyectos</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="font-mono text-[hsl(200_30%_96%)] border-[hsl(200_30%_96%)] bg-transparent hover:bg-[hsl(200_30%_96%)] hover:text-[hsl(228_36%_18%)] hover:-translate-y-[2px] hover:shadow-lg transition-all"
            asChild
          >
            <a href="#blog">Posts</a>
          </Button>
        </div>
        <div className="flex gap-4 pt-4 justify-center">
          <a
            href="https://github.com/x4ntp0d"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border hover:bg-accent hover:text-accent-foreground transition-colors rounded bg-accent-foreground/10"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://es.linkedin.com/in/queralt-martinez-fernandez"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border hover:bg-accent hover:text-accent-foreground transition-colors rounded bg-accent-foreground/10"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default memo(Hero);
