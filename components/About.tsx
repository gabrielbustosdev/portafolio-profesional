import {
  Code2,
  Database,
  Globe,
  Server,
  Terminal,
  Cpu,
  GitBranch,
  Layers,
} from "lucide-react";
import Image from "next/image";

export default function About() {
  const journeySteps = [
    {
      year: "2020 - 2023",
      title: "Soporte Crítico",
      organization: "Ministerio de Salud",
      description:
        "Mi carrera comenzó en la trinchera. Gestioné la infraestructura crítica de 3 centros médicos, asegurando disponibilidad 24/7. Aquí aprendí que el software no es solo código; es la base sobre la que operan servicios vitales. Desarrollé pipelines ETL para procesar datos sensibles, entendiendo la importancia de la integridad y seguridad.",
      skills: ["Infraestructura Crítica", "ETL", "Soporte 24/7"],
      icon: <Server className="w-6 h-6" />,
    },
    {
      year: "2023 - 2024",
      title: "Evolución a Datos",
      organization: "Ualabee",
      description:
        "Di el salto a producto. Automaticé validaciones de calidad para datos de transporte público masivo. Creé sistemas de monitoreo proactivo que detectaban anomalías antes de que afectaran a los usuarios. Trabajé codo a codo con equipos de ingeniería en un producto utilizado por cientos de personas diariamente.",
      skills: ["Automatización", "Monitoreo", "Calidad de Datos"],
      icon: <Database className="w-6 h-6" />,
    },
    {
      year: "2024 - Presente",
      title: "Desarrollo FullStack",
      organization: "Autónomo & FaMAF",
      description:
        "Hoy combino la teoría con la práctica. Mientras profundizo en Ciencias de la Computación en FaMAF (UNC), construyo aplicaciones web modernas con React, Node.js y Python. Estoy explorando activamente cómo aplicar IA y Machine Learning para resolver problemas reales de negocio, no solo como demos técnicas.",
      skills: ["React", "Node.js", "Python", "IA/ML"],
      icon: <Code2 className="w-6 h-6" />,
    },
  ];

  const techStack = [
    {
      name: "TypeScript",
      icon: (
        <Image
          src="/tech/typescript.svg"
          alt="TypeScript"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      ),
      category: "Frontend",
    },
    {
      name: "React",
      icon: (
        <Image
          src="/tech/react.svg"
          alt="React"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      ),
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: (
        <Image
          src="/tech/NextJs.svg"
          alt="Next.js"
          width={20}
          height={20}
          className="w-5 h-5 dark:invert"
        />
      ),
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: (
        <Image
          src="/tech/nodejs.svg"
          alt="Node.js"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      ),
      category: "Backend",
    },
    {
      name: "Python",
      icon: <Terminal className="w-5 h-5" />, // No SVG found, keeping Lucide
      category: "Backend",
    },
    {
      name: "FastAPI",
      icon: (
        <Image
          src="/tech/fastapi.svg"
          alt="FastAPI"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      ),
      category: "Backend",
    },
    {
      name: "PostgreSQL",
      icon: (
        <Image
          src="/tech/postgresql.svg"
          alt="PostgreSQL"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      ),
      category: "Database",
    },
    {
      name: "Docker",
      icon: (
        <Image
          src="/tech/docker.svg"
          alt="Docker"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      ),
      category: "DevOps",
    },
    {
      name: "Git",
      icon: (
        <Image
          src="/tech/gitHub.svg"
          alt="Git"
          width={20}
          height={20}
          className="w-5 h-5 dark:invert"
        />
      ),
      category: "Tools",
    },
    {
      name: "IA/ML",
      icon: (
        <Image
          src="/tech/OpenAI.svg"
          alt="OpenAI"
          width={20}
          height={20}
          className="w-5 h-5 dark:invert"
        />
      ),
      category: "AI",
    },
    {
      name: "TailwindCSS",
      icon: (
        <Image
          src="/tech/tailwindcss.svg"
          alt="TailwindCSS"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      ),
      category: "Frontend",
    },
    {
      name: "REST APIs",
      icon: <Globe className="w-5 h-5" />, // Generic, keeping Lucide
      category: "Backend",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-background w-full min-h-screen relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Más que código, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              construyo soluciones resilientes.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mi trayectoria no es lineal, y esa es mi mayor ventaja. Desde
            mantener servidores críticos en hospitales hasta desarrollar
            interfaces modernas, entiendo el ciclo completo del software: desde
            el bit en el disco hasta el píxel en la pantalla.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mb-32 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-blue-500/30 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full transform -translate-x-1/2 mt-1.5 z-10 shadow-[0_0_10px_rgba(192,255,107,0.5)]">
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse-glow" />
                </div>

                {/* Content Spacer for Desktop */}
                <div className="hidden md:block flex-1" />

                {/* Content Card */}
                <div className="flex-1 ml-12 md:ml-0">
                  <div className="group p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-sm font-mono text-primary/80 block mb-1">
                          {step.year}
                        </span>
                        <h3 className="text-xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {step.organization}
                    </h4>

                    <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
                      {step.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {step.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-card/50 border border-card/20 rounded-md text-xs text-white group-hover:text-primary transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12 flex items-center justify-center gap-3">
            <Cpu className="text-primary" />
            Tecnologías mas usadas
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group p-4 bg-card/30 border border-border/50 rounded-xl hover:bg-card hover:border-primary/30 transition-all duration-300 flex flex-col items-center gap-3"
              >
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300 grayscale group-hover:grayscale-0">
                  {tech.icon}
                </div>
                <span className="font-medium text-sm text-gray-300 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
