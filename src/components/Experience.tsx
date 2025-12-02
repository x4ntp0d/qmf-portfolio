import { Chip } from "./Chip";

const Experience = () => {
  const experiences = [
    {
      year: "2020 – Actualidad",
      title: "Software Developer",
      company: "Industrial Shields · Sant Fruitós de Bages",
      description: "Desarrollo, integración y testing de hardware, software y firmware de PLCs open source. Publicación de artículos técnicos para el blog corporativo.",
      skills: ["Node-RED", "Python", "Bash", "Arduino", "Hardware testing", "Automatización", "Protocolos industriales"]
    },
    {
      year: "2015 – 2018",
      title: "Segunda asistente",
      company: "Sistemes de Restauració de Catalunya S.L. · Manresa",
      description: "Operativa diaria del restaurante gestionando hasta 42 empleados, coordinando servicio de sala y cocina, y resolviendo incidencias de clientes. Además de control de inventario, organización de turnos y cierres de caja.",
      skills: ["Gestión de equipos", "Responsabilidad", "Coordinación", "Atención al cliente"]
    },
    {
      year: "01/2015 – 12/2015",
      title: "Aupair",
      company: "Aupair World S.L. · Helsinki, Finlandia",
      description: "Cuidado de tres niños de 1, 3 y 5 años de habla finesa y sueca, guiando sus rutinas diarias y actividades educativas bilingües.",
      skills: ["Responsabilidad", "Gestión del tiempo", "Inglés", "Finés", "Comunicación"]
    }
  ];

  return (
    <section id="experience" className="section-shell surface-soft">
      <div className="max-w-4xl w-full space-y-12 animate-slide-up">
        <h2 className="text-4xl md:text-6xl font-bold">Experiencia</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="border-l-2 border-[hsl(var(--ring))] px-6 py-7 md:px-8 md:py-8 bg-card/70 rounded-lg shadow-[0_6px_20px_-10px_rgba(15,23,42,0.25)]"
            >
              <div className="space-y-3">
                <p className="text-sm font-mono text-accent">{exp.year}</p>
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <p className="text-lg text-muted-foreground font-mono">{exp.company}</p>
                <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <Chip key={skill} label={skill} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
