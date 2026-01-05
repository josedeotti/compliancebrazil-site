import { Container } from "../layout/Container"

const stats = [
  { label: "Atuação", value: "Compliance, integridade e LGPD" },
  { label: "Modelo", value: "Estruturação + operação contínua" },
  { label: "Foco", value: "Evidências, rotina e governança" },
  { label: "Entrega", value: "Programas práticos e auditáveis" },
]

const testimonials = [
  {
    quote:
      "O trabalho trouxe organização e previsibilidade. O compliance deixou de ser reativo e passou a fazer parte da rotina da empresa, com governança clara e evidências bem estruturadas.",
    name: "Empresa do ramo de construção civil",
    role: "Programa de Integridade e Governança",
  },
  {
    quote:
      "A estrutura implantada facilitou auditorias, fiscalizações e o acompanhamento dos riscos. Hoje temos processos claros e documentação organizada para sustentar a operação.",
    name: "Organização social de saúde",
    role: "Compliance, riscos e controles internos",
  },
  {
    quote:
      "Com a atuação contínua, conseguimos manter a conformidade regulatória de forma estruturada, sem depender apenas de projetos pontuais ou ações emergenciais.",
    name: "Instituição de pagamento",
    role: "Compliance regulatório e LGPD",
  },
]

export function SocialProof() {
  return (
    <section className="bg-white py-20" id="prova-social">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
          
          {/* Texto institucional */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-neutral-600">
              Confiança construída na prática
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
              Experiência em setores sensíveis,{" "}
              <span className="text-neutral-500">
                com foco em governança e evidências
              </span>
            </h2>

            <p className="mt-5 text-lg text-neutral-600">
              Atuamos junto a organizações que lidam com alta exposição regulatória,
              contratual e reputacional. Nosso trabalho é estruturar e sustentar
              programas de compliance que funcionam no dia a dia e que podem ser
              demonstrados quando necessário.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-5"
                >
                  <p className="text-sm text-neutral-500">{s.label}</p>
                  <p className="mt-1 font-semibold text-neutral-900">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-6 py-3 font-medium text-neutral-900 hover:bg-neutral-100 transition"
              >
                Conversar com um especialista
              </a>
            </div>
          </div>

          {/* Depoimentos */}
          <div className="grid gap-4">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-neutral-200 bg-white p-6"
              >
                <p className="text-neutral-700 leading-relaxed">
                  “{t.quote}”
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-neutral-900">{t.name}</p>
                  <p className="text-sm text-neutral-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
