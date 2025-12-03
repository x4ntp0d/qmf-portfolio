import { type ReactNode } from "react";
import { Code2, Database, Layers, Sparkles } from "lucide-react";

export type SkillCategory = {
  icon: ReactNode;
  title: string;
  skills: string[];
};

export type Experience = {
  year: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export type BlogPost = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  url: string;
  readingTime?: string;
};

export const skillCategories: SkillCategory[] = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Lenguajes de programación",
    skills: ["C/C++", "Python", "Bash", "Node.js", "Java"],
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Protocolos y buses",
    skills: ["UART, SPI, I2C", "RS485, Modbus RTU/TCP", "PPP y AT commands", "MQTT, HTTP/HTTPS", "CAN"],
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Comunicaciones",
    skills: ["LTE Cat 4, LTE-M, NB-IoT, GPRS", "LoRa", "Redes para PLCs industriales", "Diagnóstico de tráfico con Wireshark"],
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
      "Documentación y testing de laboratorio",
    ],
  },
];

export const experiences: Experience[] = [
  {
    year: "2020 – Actualidad",
    title: "Software Developer",
    company: "Industrial Shields · Sant Fruitós de Bages",
    description:
      "Desarrollo, integración y testing de hardware, software y firmware de PLCs open source. Publicación de artículos técnicos para el blog corporativo.",
    skills: ["Node-RED", "Python", "Bash", "Arduino", "Hardware testing", "Automatización", "Protocolos industriales"],
  },
  {
    year: "2015 – 2018",
    title: "Segunda asistente",
    company: "Sistemes de Restauració de Catalunya S.L. · Manresa",
    description:
      "Operativa diaria del restaurante gestionando hasta 42 empleados, coordinando servicio de sala y cocina, y resolviendo incidencias de clientes. Además de control de inventario, organización de turnos y cierres de caja.",
    skills: ["Gestión de equipos", "Responsabilidad", "Coordinación", "Atención al cliente"],
  },
  {
    year: "01/2015 – 12/2015",
    title: "Aupair",
    company: "Aupair World S.L. · Helsinki, Finlandia",
    description:
      "Cuidado de tres niños de 1, 3 y 5 años de habla finesa y sueca, guiando sus rutinas diarias y actividades educativas bilingües.",
    skills: ["Responsabilidad", "Gestión del tiempo", "Inglés", "Finés", "Comunicación"],
  },
];

export const projects: Project[] = [
  {
    title: "setup-lara.sh · LTE Cat 4 para Raspberry PLC",
    description:
      "Script industrial para integrar el módem Ublox LARA-L6004D en PLCs basados en Raspberry Pi. Automatiza APN, servicios systemd, PPP y control UART vía comandos AT con reconexión robusta.",
    tech: ["Bash", "Python", "systemd", "PPP", "UART/AT commands"],
    github: "https://github.com/x4ntp0d/rpi-lara-l6004d-setup",
    demo: "https://apps.industrialshields.com/main/rpi/rpiplc_v6/setup-lara.sh",
  },
];

export const BLOG_MAX_POSTS = 10;

export const blogPosts: BlogPost[] = [
  {
    title: "Cómo comunicar un PLCs Raspberry con CANBUS",
    date: "Jun 2022",
    excerpt:
      "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://www.industrialshields.com/es_ES/blog/raspberry-pi-para-la-industria-26/como-comunicar-un-plc-raspberry-v4-o-v6-con-canbus-465",
    readingTime: "6 min",
  },
  {
    title: "Detección de objetos con TensorFlow y Raspberry PLC",
    date: "Feb 2022",
    excerpt:
      "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://www.industrialshields.com/es_ES/blog/raspberry-pi-para-la-industria-26/tutorial-deteccion-de-objetos-con-tensorflow-y-raspberry-pi-plc-aprendizaje-automatico-451",
    readingTime: "6 min",
  },
  {
    title: "Logic Analyzer y RS485 en Raspberry PLC",
    date: "Feb 2025",
    excerpt:
      "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://www.industrialshields.com/es_ES/blog/raspberry-pi-para-la-industria-26/como-abrir-logic-analyzer-y-ejecutar-rs485-con-el-plc-industrial-raspberry-436",
    readingTime: "6 min",
  },
  {
    title: "Node-RED, Raspberry PLC y final de carrera",
    date: "Oct 2021",
    excerpt:
      "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://www.industrialshields.com/es_ES/blog/raspberry-pi-para-la-industria-26/ii-node-red-raspberry-tutorial-how-to-create-an-automatic-counter-app-384#third-line",
    readingTime: "6 min",
  },
  {
    title: "Motor paso a paso y Raspberry PLC",
    date: "Oct 2021",
    excerpt:
      "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://www.industrialshields.com/es_ES/blog/raspberry-pi-para-la-industria-26/como-hacer-funcionar-un-motor-paso-a-paso-con-raspberry-plc-372",
    readingTime: "6 min",
  },
  {
    title: "InfluxDB, Node-RED y MQTT",
    date: "Set 2021",
    excerpt:
      "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://www.industrialshields.com/es_ES/blog/raspberry-pi-para-la-industria-26/ii-tutorial-sobre-influxdb-node-red-y-mqtt-envio-de-datos-a-influxdb-360",
    readingTime: "6 min",
  },
  {
    title: "Mosquitto: MQTT y Raspberry PLC",
    date: "Set 2021",
    excerpt:
      "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://apps.industrialshields.com/main/rpi/rpiplc_v6/setup-lara.sh",
    readingTime: "6 min",
  },
  {
    title: "Librería Modbus RTU Master para Arduino",
    date: "Mar 2020",
    excerpt:
      "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://www.industrialshields.com/es_ES/blog/blog-industrial-open-source-1/libreria-modbus-rtu-master-para-automatizacion-industrial-200",
    readingTime: "6 min",
  },
  {
    title: "Envío de SMS con módulo GPRS en Arduino",
    date: "May 2021",
    excerpt:
      "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://www.industrialshields.com/es_ES/blog/blog-industrial-open-source-1/como-enviar-sms-con-plc-arduino-296",
    readingTime: "6 min",
  },
  {
    title: "Leer un sensor Dallas por Modbus con Arduino",
    date: "Jul 2021",
    excerpt:
      "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://www.industrialshields.com/es_ES/blog/blog-industrial-open-source-1/tutorial-modbus-como-obtener-la-temperatura-con-un-sensor-dallas-328",
    readingTime: "6 min",
  },
];

export const featuredBlogPosts = blogPosts.slice(0, BLOG_MAX_POSTS);
