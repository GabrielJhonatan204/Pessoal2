"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Início", "inicio"],
  ["Projetos", "projetos"],
  ["Skills", "skills"],
  ["Formação", "formacao"],
  ["Sobre", "sobre"],
  ["Contato", "contato"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0.1, 0.3, 0.6] },
    );
    links.forEach(([, id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-[#f7f8f5]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8" aria-label="Navegação principal">
        <a href="#inicio" className="font-mono text-sm font-bold tracking-[0.18em] text-[#10251d]">
          &lt;DEV /&gt;
        </a>
        <button
          type="button"
          className="rounded-lg p-2 text-[#10251d] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div className={`${open ? "flex" : "hidden"} absolute left-4 right-4 top-20 flex-col rounded-2xl border border-slate-200 bg-white p-3 shadow-xl md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                active === id ? "text-[#198754]" : "text-slate-600 hover:text-[#10251d]"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
