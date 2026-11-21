export type Project = {
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  demo?: string;
  accent: "emerald" | "blue" | "violet";
};

export const projects: Project[] = [
  {
    name: "Projeto acadêmico",
    description:
      "Projeto provisório para substituir pelos dados reais. Descreva aqui o problema resolvido e seu papel no desenvolvimento.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: ["Interface responsiva", "Organização modular", "Experiência acessível"],
    github: "https://github.com/",
    demo: "",
    accent: "emerald",
  },
  {
    name: "Aplicação pessoal",
    description:
      "Projeto provisório para demonstrar uma aplicação construída de ponta a ponta. Substitua pela descrição real.",
    technologies: ["React", "JavaScript", "MySQL"],
    features: ["Dados persistentes", "Autenticação", "Painel administrativo"],
    github: "https://github.com/",
    demo: "",
    accent: "blue",
  },
  {
    name: "Sistema em C",
    description:
      "Projeto provisório para destacar uma solução acadêmica, estrutura de dados ou aplicação de console.",
    technologies: ["C", "Estruturas de dados"],
    features: ["Lógica estruturada", "Entrada validada", "Testes manuais"],
    github: "https://github.com/",
    demo: "",
    accent: "violet",
  },
];
