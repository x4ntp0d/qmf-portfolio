import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Chip } from "./Chip";

type BlogPost = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  url: string;
  readingTime?: string;
};

// Ajusta este valor para controlar cuántas entradas del array se muestran en el carrusel.
const blogConfig = {
  maxPosts: 10,
};

const allPosts: BlogPost[] = [
  {
    title: "Cómo comunicar un PLCs Raspberry con CANBUS",
    date: "Jun 2022",
    excerpt: "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://www.industrialshields.com/es_ES/blog/raspberry-pi-para-la-industria-26/como-comunicar-un-plc-raspberry-v4-o-v6-con-canbus-465",
    readingTime: "6 min",
  },
  {
    title: "Detección de objetos con TensorFlow y Raspberry PLC",
    date: "Feb 2022",
    excerpt: "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://www.industrialshields.com/es_ES/blog/raspberry-pi-para-la-industria-26/tutorial-deteccion-de-objetos-con-tensorflow-y-raspberry-pi-plc-aprendizaje-automatico-451",
    readingTime: "6 min",
  },
  {
    title: "Logic Analyzer y RS485 en Raspberry PLC",
    date: "Feb 2025",
    excerpt: "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://www.industrialshields.com/es_ES/blog/raspberry-pi-para-la-industria-26/como-abrir-logic-analyzer-y-ejecutar-rs485-con-el-plc-industrial-raspberry-436",
    readingTime: "6 min",
  },
  {
    title: "Node-RED, Raspberry PLC y final de carrera",
    date: "Oct 2021",
    excerpt: "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://www.industrialshields.com/es_ES/blog/raspberry-pi-para-la-industria-26/ii-node-red-raspberry-tutorial-how-to-create-an-automatic-counter-app-384#third-line",
    readingTime: "6 min",
  },
  {
    title: "Motor paso a paso y Raspberry PLC",
    date: "Oct 2021",
    excerpt: "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://www.industrialshields.com/es_ES/blog/raspberry-pi-para-la-industria-26/como-hacer-funcionar-un-motor-paso-a-paso-con-raspberry-plc-372",
    readingTime: "6 min",
  },
  {
    title: "InfluxDB, Node-RED y MQTT",
    date: "Set 2021",
    excerpt: "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://www.industrialshields.com/es_ES/blog/raspberry-pi-para-la-industria-26/ii-tutorial-sobre-influxdb-node-red-y-mqtt-envio-de-datos-a-influxdb-360",
    readingTime: "6 min",
  },
  {
    title: "Mosquitto: MQTT y Raspberry PLC",
    date: "Set 2021",
    excerpt: "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://apps.industrialshields.com/main/rpi/rpiplc_v6/setup-lara.sh",
    readingTime: "6 min",
  },
  {
    title: "Librería Modbus RTU Master para Arduino",
    date: "Mar 2020",
    excerpt: "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://www.industrialshields.com/es_ES/blog/blog-industrial-open-source-1/libreria-modbus-rtu-master-para-automatizacion-industrial-200",
    readingTime: "6 min",
  },
  {
    title: "Envío de SMS con módulo GPRS en Arduino",
    date: "May 2021",
    excerpt: "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://www.industrialshields.com/es_ES/blog/blog-industrial-open-source-1/como-enviar-sms-con-plc-arduino-296",
    readingTime: "6 min",
  },
  {
    title: "Leer un sensor Dallas por Modbus con Arduino",
    date: "Jul 2021",
    excerpt: "Script industrial para monitorizar el módem LARA-L6004D, reiniciar PPP y asegurar conectividad en plantas remotas sin intervención manual.",
    tags: ["Raspberry Pi", "LTE Cat 4", "PPP", "Bash"],
    url: "https://www.industrialshields.com/es_ES/blog/blog-industrial-open-source-1/tutorial-modbus-como-obtener-la-temperatura-con-un-sensor-dallas-328",
    readingTime: "6 min",
  },
];

const PostsCarousel = () => {
  const posts = allPosts.slice(0, blogConfig.maxPosts ?? allPosts.length);

  return (
    <section id="blog" className="section-shell posts-shell surface-soft">
      <div className="max-w-5xl w-full space-y-10 animate-slide-up">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-6xl font-bold">Posts</h2>
          </div>
        </div>

        <Carousel
          opts={{ align: "start", loop: true, dragFree: true }}
          className="relative"
        >
          <CarouselContent className="-ml-3">
            {posts.map((post, index) => (
              <CarouselItem
                key={index}
                className="pl-3 md:basis-1/2 lg:basis-1/3"
              >
                <article className="h-full p-6 bg-card border border-border rounded shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground font-mono">
                    <span>{post.date}</span>
                    {post.readingTime && <span>{post.readingTime}</span>}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold leading-snug">{post.title}</h3>
                    <p className="text-foreground/80 leading-relaxed text-sm">{post.excerpt}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Chip key={tagIndex} label={tag} />
                    ))}
                  </div>
                  <div className="pt-2">
                    <Button
                      variant="ghost"
                      className="px-0 text-accent hover:text-accent/80 font-mono"
                      asChild
                    >
                      <a href={post.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        Leer artículo
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>

      <footer className="w-full border-t border-border pt-6 text-center text-sm text-muted-foreground">
        <p className="font-mono">© 2025 Queralt Martínez Fernández. Diseñado y programado con ❤️</p>
      </footer>
    </section>
  );
};

export default PostsCarousel;
