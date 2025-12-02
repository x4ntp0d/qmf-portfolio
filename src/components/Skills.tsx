import { Code2, Database, Layers, Sparkles } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Lenguajes de programación",
      skills: [
        "C/C++",
        "Python",
        "Bash",
        "Node.js",
        "Java",
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Protocolos y buses",
      skills: [
        "UART, SPI, I2C",
        "RS485, Modbus RTU/TCP",
        "PPP y AT commands",
        "MQTT, HTTP/HTTPS",
        "CAN",
      ]
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Comunicaciones",
      skills: [
        "LTE Cat 4, LTE-M, NB-IoT, GPRS",
        "LoRa",
        "Redes para PLCs industriales",
        "Diagnóstico de tráfico con Wireshark"
      ]
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Herramientas y hardware",
      skills: [
        "Node-RED, Docker, Git",
        "LaTeX y Markdown",
        "Raspberry Pi, ESP32, Arduino",
        "Osciloscopio y analizador lógico",
        "Multímetro digital",
        "Documentación y testing de laboratorio"
      ]
    }
  ];

  return (
    <section id="skills" className="section-shell surface-strong">
      <div className="max-w-4xl w-full space-y-12 animate-slide-up">
        <h2 className="text-4xl md:text-6xl font-bold">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded bg-foreground/5 text-foreground shadow-inner">{category.icon}</div>
                <h3 className="text-xl font-mono font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-muted-foreground">
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
};

export default Skills;
