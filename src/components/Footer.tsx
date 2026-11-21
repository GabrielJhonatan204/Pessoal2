import { Code2, Globe, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row lg:px-8">
        <p>© 2026 {profile.name}. Todos os direitos reservados.</p>
        <div className="flex items-center gap-2">
          <a className="social-button" href={`mailto:${profile.email}`} aria-label="Enviar e-mail"><Mail size={17} /></a>
          <a className="social-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={17} /></a>
          <a className="social-button" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Globe size={17} /></a>
        </div>
      </div>
    </footer>
  );
}
