"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  BookOpen,
  Code2,
  ExternalLink,
  GraduationCap,
  Globe,
  Mail,
  MapPin,
  Music2,
  Send,
  Sparkles,
  Gamepad2,
} from "lucide-react";
import Reveal from "./Reveal";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { certificates, education } from "@/data/education";
import { hobbies } from "@/data/hobbies";

const hobbyIcons = { game: Gamepad2, code: Code2, book: BookOpen, music: Music2 };

export default function Portfolio() {
  const [sentByClient, setSentByClient] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent(String(data.get("subject") || "Contato pelo portfólio"));
    const body = encodeURIComponent(
      `Nome: ${data.get("name")}\nE-mail: ${data.get("email")}\n\n${data.get("message")}`,
    );
    setSentByClient("Seu aplicativo de e-mail será aberto para concluir o envio.");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <Navbar />
      <main>
        <section id="inicio" className="relative min-h-[780px] overflow-hidden pt-16 sm:min-h-[720px]">
          <div className="hero-grid absolute inset-0 opacity-50" />
          <div className="relative mx-auto grid min-h-[704px] max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
            <Reveal>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#198754]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#198754]">Portfólio pessoal</span>
              </div>
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-[#10251d] sm:text-6xl lg:text-[72px]">
                Olá, eu sou{" "}
                <span className="text-[#198754]">{profile.name}</span>
              </h1>
              <p className="mt-5 text-xl font-semibold text-slate-700">{profile.role}</p>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{profile.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="primary-button" href="#projetos">Ver projetos <ArrowDown size={17} /></a>
                <a className="secondary-button" href="#contato">Entrar em contato <Send size={17} /></a>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <a className="social-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={18} /></a>
                <a className="social-button" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Globe size={18} /></a>
                <span className="ml-2 flex items-center gap-2 text-sm text-slate-500"><MapPin size={15} /> {profile.location}</span>
              </div>
            </Reveal>
            <Reveal delay={0.12} className="mx-auto lg:mx-0 lg:ml-auto">
              <div className="relative">
                <div className="absolute -inset-5 rounded-full bg-[#198754]/10 blur-2xl" />
                <div className="relative aspect-square w-[280px] rounded-[42px] border border-white bg-gradient-to-br from-[#dceae2] via-[#edf3ef] to-[#b9d4c5] p-3 shadow-[0_30px_80px_rgba(16,37,29,0.14)] sm:w-[360px]">
                  <div className="flex h-full items-center justify-center rounded-[34px] border border-white/70 bg-[#16372b]">
                    <span className="text-7xl font-bold tracking-[-0.08em] text-[#d8f0e4] sm:text-8xl">{profile.initials}</span>
                  </div>
                </div>
                <div className="absolute -bottom-5 -left-5 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Foco atual</p>
                  <p className="mt-1 font-semibold text-[#10251d]">Desenvolvimento Web</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="projetos" className="section-wrap bg-white">
          <div className="section-inner">
            <Reveal>
              <div className="section-heading">
                <span>01 / Projetos</span>
                <h2>Trabalhos selecionados</h2>
                <p>Uma seleção provisória de projetos. Atualize as informações no arquivo de dados.</p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Reveal key={project.name} delay={index * 0.08}>
                  <article className="project-card group">
                    <div className={`project-preview project-preview-${project.accent}`}>
                      <div className="browser-bar"><i /><i /><i /></div>
                      <Code2 className="preview-icon" />
                      <span>PROJETO {String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#10251d]">{project.name}</h3>
                      <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">{project.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}
                      </div>
                      <ul className="mt-5 space-y-2 text-sm text-slate-600">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#198754]" />{feature}</li>
                        ))}
                      </ul>
                      <div className="mt-6 flex gap-3 border-t border-slate-100 pt-5">
                        <a className="card-link" href={project.github} target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub</a>
                        {project.demo && <a className="card-link" href={project.demo} target="_blank" rel="noreferrer">Demo <ExternalLink size={15} /></a>}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-wrap bg-[#f7f8f5]">
          <div className="section-inner">
            <Reveal>
              <div className="section-heading">
                <span>02 / Skills</span>
                <h2>Tecnologias e ferramentas</h2>
                <p>Tecnologias baseadas nas competências informadas. Nenhum nível de domínio foi atribuído.</p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {(["Linguagens", "Web", "Banco de dados", "Ferramentas"] as const).map((category, index) => (
                <Reveal key={category} delay={index * 0.06}>
                  <div className="rounded-3xl border border-slate-200 bg-white p-6">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-[#eaf4ef] p-2.5 text-[#198754]">
                        {category === "Linguagens" ? <Code2 size={20} /> : category === "Web" ? <Sparkles size={20} /> : category === "Banco de dados" ? <BriefcaseBusiness size={20} /> : <Award size={20} />}
                      </div>
                      <h3 className="font-bold text-[#10251d]">{category}</h3>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {skills.filter((skill) => skill.category === category).map((skill) => (
                        <span className="skill-pill" key={skill.name}>{skill.name}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="formacao" className="section-wrap bg-white">
          <div className="section-inner">
            <Reveal>
              <div className="section-heading">
                <span>03 / Formação</span>
                <h2>Trajetória acadêmica</h2>
                <p>Informações provisórias prontas para serem substituídas pelos seus dados reais.</p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <Reveal>
                <div className="space-y-4">
                  {education.map((item) => (
                    <article className="rounded-3xl border border-slate-200 p-6" key={item.course}>
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl bg-[#10251d] p-3 text-white"><GraduationCap size={22} /></div>
                        <div>
                          <span className="rounded-full bg-[#eaf4ef] px-3 py-1 text-xs font-bold text-[#198754]">{item.status}</span>
                          <h3 className="mt-4 text-lg font-bold text-[#10251d]">{item.course}</h3>
                          <p className="mt-1 text-sm text-slate-600">{item.institution}</p>
                          <p className="mt-3 font-mono text-xs text-slate-400">{item.period}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div>
                  <h3 className="mb-4 font-bold text-[#10251d]">Cursos e certificados</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {certificates.map((certificate) => (
                      <article className="certificate-card" key={certificate.name}>
                        <div className="flex h-32 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
                          <Award size={42} strokeWidth={1.5} />
                        </div>
                        <div className="p-5">
                          <h4 className="font-bold text-[#10251d]">{certificate.name}</h4>
                          <p className="mt-1 text-sm text-slate-500">{certificate.institution}</p>
                          <p className="mt-3 text-xs text-slate-400">{certificate.date}</p>
                          {certificate.file ? (
                            <a className="card-link mt-5" href={certificate.file} target="_blank" rel="noreferrer">Visualizar <ArrowUpRight size={15} /></a>
                          ) : (
                            <button className="card-link mt-5" type="button" disabled title="Adicione o arquivo do certificado em src/data/education.ts">Certificado pendente</button>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="sobre" className="section-wrap bg-[#10251d] text-white">
          <div className="section-inner">
            <Reveal>
              <div className="section-heading section-heading-dark">
                <span>04 / Além do código</span>
                <h2>Interesses pessoais</h2>
                <p className="text-slate-300">Um pouco da personalidade que existe por trás dos projetos.</p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {hobbies.map((hobby, index) => {
                const Icon = hobbyIcons[hobby.icon];
                return (
                  <Reveal key={hobby.title} delay={index * 0.06}>
                    <article className="hobby-card">
                      <Icon size={26} />
                      <h3 className="mt-8 text-lg font-bold">{hobby.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{hobby.description}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contato" className="section-wrap bg-[#f7f8f5]">
          <div className="section-inner">
            <Reveal>
              <div className="section-heading">
                <span>05 / Contato</span>
                <h2>Vamos conversar?</h2>
                <p>Disponível para oportunidades, projetos acadêmicos e novas conexões profissionais.</p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <Reveal>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-[#10251d]">Canais profissionais</h3>
                  <div className="mt-6 space-y-3">
                    <a className="contact-link" href={`mailto:${profile.email}`}><Mail size={18} /><span><small>E-mail</small>{profile.email}</span></a>
                    <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer"><Code2 size={18} /><span><small>GitHub</small>github.com</span></a>
                    <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer"><Globe size={18} /><span><small>LinkedIn</small>linkedin.com</span></a>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <form className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="form-label">Nome
                      <input className="form-input" name="name" required minLength={2} placeholder="Seu nome" />
                    </label>
                    <label className="form-label">E-mail
                      <input className="form-input" name="email" type="email" required placeholder="voce@email.com" />
                    </label>
                  </div>
                  <label className="form-label mt-5 block">Assunto
                    <input className="form-input" name="subject" required minLength={3} placeholder="O assunto da mensagem" />
                  </label>
                  <label className="form-label mt-5 block">Mensagem
                    <textarea className="form-input min-h-36 resize-y" name="message" required minLength={10} placeholder="Como posso ajudar?" />
                  </label>
                  {sentByClient && <p className="mt-4 text-sm font-medium text-[#198754]" role="status">{sentByClient}</p>}
                  <button className="primary-button mt-6" type="submit">Preparar e-mail <Send size={17} /></button>
                  <p className="mt-3 text-xs text-slate-400">O formulário abre seu aplicativo de e-mail; não envia nem armazena dados neste site.</p>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
