export type Skill = {
  name: string;
  category: "Linguagens" | "Web" | "Banco de dados" | "Ferramentas";
};

export const skills: Skill[] = [
  { name: "C", category: "Linguagens" },
  { name: "JavaScript", category: "Linguagens" },
  { name: "TypeScript", category: "Linguagens" },
  { name: "PHP", category: "Linguagens" },
  { name: "HTML", category: "Web" },
  { name: "CSS", category: "Web" },
  { name: "Bootstrap", category: "Web" },
  { name: "React", category: "Web" },
  { name: "Next.js", category: "Web" },
  { name: "MySQL", category: "Banco de dados" },
  { name: "SQL", category: "Banco de dados" },
  { name: "Git", category: "Ferramentas" },
  { name: "GitHub", category: "Ferramentas" },
  { name: "Visual Studio Code", category: "Ferramentas" },
  { name: "MySQL Workbench", category: "Ferramentas" },
];
