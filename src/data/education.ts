export type Education = {
  institution: string;
  course: string;
  period: string;
  status: "Cursando" | "Concluído";
};

export type Certificate = {
  name: string;
  institution: string;
  date: string;
  file?: string;
};

export const education: Education[] = [
  {
    institution: "Instituição de ensino",
    course: "Nome do curso ou graduação",
    period: "AAAA - Atual",
    status: "Cursando",
  },
];

export const certificates: Certificate[] = [
  {
    name: "Certificado complementar",
    institution: "Instituição emissora",
    date: "Data a confirmar",
  },
];
