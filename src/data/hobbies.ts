export type Hobby = {
  title: string;
  description: string;
  icon: "game" | "code" | "book" | "music";
};

export const hobbies: Hobby[] = [
  {
    title: "Jogos e entretenimento",
    description: "Jogos, experiências digitais e momentos de descontração.",
    icon: "game",
  },
  {
    title: "Tecnologia e inovação",
    description: "Explorar novas ferramentas e entender como a tecnologia evolui.",
    icon: "code",
  },
  {
    title: "Leitura e estudos",
    description: "Aprender continuamente e acompanhar temas de interesse.",
    icon: "book",
  },
  {
    title: "Música",
    description: "Descobrir estilos, artistas e trilhas sonoras para o dia a dia.",
    icon: "music",
  },
];
