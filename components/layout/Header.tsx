"use client"

import { scrollToId } from "@/lib/scrollToId"

const nav = [
  { label: "Serviços", id: "servicos" },
  { label: "Tecnologia", id: "tecnologia" },
  { label: "Experiência", id: "prova-social" },
  { label: "Como funciona", id: "como-funciona" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
          aria-label="Voltar ao topo"
        >
          <div className="h-8 w-8 rounded-md bg-neutral-900" />
          <span className="text-sm font-semibold tracking-wide text-neutral-900">
            Compliance Brazil
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToId(item.id)}
              className="text-sm text-neutral-700 hover:text-neutral-900"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToId("contato")}
            className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition"
          >
            Agendar diagnóstico
          </button>
        </div>
      </div>

      {/* Mobile quick links (simple, no JS menu) */}
      <div className="border-t border-neutral-200 bg-white md:hidden">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-6 py-3">
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToId(item.id)}
              className="whitespace-nowrap text-sm text-neutral-700"
            >
              {item.label}
            </button>
          ))}

          <button
            type="button"
            onClick={() => scrollToId("contato")}
            className="whitespace-nowrap text-sm font-medium text-neutral-900"
          >
            Contato
          </button>
        </div>
      </div>
    </header>
  )
}
