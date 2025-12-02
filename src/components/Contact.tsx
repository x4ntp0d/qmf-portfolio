import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-shell surface-strong">
      <div className="max-w-4xl w-full space-y-12 animate-slide-up">
        <h2 className="text-4xl md:text-6xl font-bold">Contacto</h2>
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <div>
                  <p className="font-mono font-semibold">Email</p>
                  <p className="text-sm opacity-80">queraltmf@gmail.com</p>
                </div>
              </div>
            <a 
              href="https://github.com/x4ntp0d"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-border rounded hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <Github className="w-6 h-6" />
                <div>
                  <p className="font-mono font-semibold">GitHub</p>
                  <p className="text-sm opacity-80">@x4ntp0d</p>
                </div>
              </div>
            </a>
            <a 
              href="https://www.linkedin.com/in/queralt-martinez-fernandez"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-border rounded hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <Linkedin className="w-6 h-6" />
                <div>
                  <p className="font-mono font-semibold">LinkedIn</p>
                  <p className="text-sm opacity-80">linkedin.com/in/</p>
                </div>
              </div>
            </a>
            <a 
              href="tel:+34654756839"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-border rounded hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6" />
                <div>
                  <p className="font-mono font-semibold">Teléfono</p>
                  <p className="text-sm opacity-80">+34 654 756 839</p>
                </div>
              </div>
            </a>
            <a 
              href="https://maps.google.com/?q=Balsareny%2C%20Espa%C3%B1a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-border rounded hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6" />
                <div>
                  <p className="font-mono font-semibold">Ubicación</p>
                  <p className="text-sm opacity-80">Balsareny, España</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
