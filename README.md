# Portfólio pessoal

Portfólio profissional desenvolvido com Next.js, React, TypeScript, Tailwind CSS, Lucide React e Motion.

## Executar localmente

Pré-requisitos: Node.js 20 ou superior e npm.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Personalização

Edite os dados provisórios antes da publicação:

- `src/data/profile.ts`: nome, apresentação, localização, e-mail e redes;
- `src/data/projects.ts`: projetos, tecnologias, funcionalidades e links;
- `src/data/skills.ts`: categorias e habilidades;
- `src/data/education.ts`: formação e cursos;
- `src/data/hobbies.ts`: interesses pessoais.

Os projetos e dados acadêmicos deste template são placeholders e devem ser substituídos por informações reais.

## Certificados

Adicione os arquivos em `public/certificates/` e informe o caminho no campo `file` de cada certificado:

```ts
{ name: "Curso", institution: "Instituição", date: "2026", file: "/certificates/curso.pdf" }
```

## Contato

O formulário valida os campos e abre o aplicativo de e-mail do visitante com os dados preenchidos. Ele não envia mensagens nem exige um backend. Para envio automático, adicione posteriormente uma API ou um serviço como Formspree ou Web3Forms.

## Qualidade

```bash
npm run lint
npm run build
npm run start
```
