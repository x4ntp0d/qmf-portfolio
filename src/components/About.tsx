import { memo } from "react";

const About = () => (
  <section id="about" className="section-shell surface-soft">
    <div className="max-w-4xl w-full space-y-12 animate-slide-up">
      <h2 className="text-4xl md:text-6xl font-bold">Sobre Mí</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-foreground/90">
            Me especializo en desarrollo de firmware y sistemas embebidos. Trabajo con PLCs open source basados en Raspberry Pi, Arduino y ESP32, participando en todo el ciclo: desde requisitos técnicos hasta integración final hardware–software.
          </p>
          <p className="text-lg leading-relaxed text-foreground/90">
            Desarrollo firmware de bajo nivel, integro módulos de comunicación y creo herramientas de automatización en Python y Node-RED. Diseño bancos de prueba automáticos y valido buses UART, SPI, I2C, CAN y RS485 usando instrumentación (osciloscopio, DMM, analizador lógico).
          </p>
          <p className="text-lg leading-relaxed text-foreground/90">
            Aporto un enfoque claro y ordenado: cierro cada proyecto con documentación técnica precisa en Markdown o LaTeX para facilitar mantenimiento y transferencia de conocimiento.
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-mono font-semibold mb-3">Intereses</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Automatización industrial</li>
              <li>• Integración de sensores</li>
              <li>• Comunicaciones celulares y radio</li>
              <li>• Testing y optimización de sistemas embebidos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default memo(About);
