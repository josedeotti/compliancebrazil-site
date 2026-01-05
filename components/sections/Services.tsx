import { Container } from "../layout/Container"

const services = [
  {
    title: "Programa de Integridade (Estruturação)",
    desc: "Diagnóstico, desenho do programa, políticas, fluxos, comitês, matriz de riscos e plano anual — com evidências e governança.",
    bullets: ["Diagnóstico e plano de ação", "Normativos e fluxos", "Riscos e controles"],
    href: "#contato",
  },
  {
    title: "Compliance as a Service (Manutenção)",
    desc: "Operação contínua com cadência mensal: monitoramento, indicadores, evidências, treinamentos, reporte e melhoria contínua.",
    bullets: ["Rotina + SLA", "Indicadores e evidências", "Reporte executivo"],
    href: "#contato",
  },
  {
    title: "LGPD como serviço",
    desc: "Apoio completo para adequação e sustentação: inventário, bases legais, governança, incidentes, contratos e treinamento.",
    bullets: ["Mapeamento e governança", "Contratos e terceiros", "Resposta a incidentes"],
    href: "#contato",
  },
  {
    title: "Canal de denúncias e cultura ética",
    desc: "Implementação e operação do canal com governança, triagem e fluxos de apuração, além de comunicação e treinamentos.",
    bullets: ["Implementação do canal", "Fluxo de apuração", "Campanhas e treinamento"],
    href: "#contato",
  },
]

export function Services() {
  return (
    <section className="bg-white py-20" id="servicos">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-neutral-600">
              Serviços
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
              Escolha o formato ideal{" "}
              <span className="text-neutral-500">para o seu momento</span>
            </h2>
            <p className="mt-5 text-lg text-neutral-600">
              Estruturamos do zero, assumimos a manutenção contínua ou atuamos por
              frentes específicas (LGPD, canal de denúncias e cultura).
            </p>
          </div>

          <div className="md:flex md:justify-end">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 font-medium text-neutral-900 hover:bg-neutral-100 transition"
            >
              Falar com um especialista
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-neutral-200 bg-white p-6"
            >
              <h3 className="text-xl font-semibold text-neutral-900">{s.title}</h3>
              <p className="mt-2 text-neutral-600">{s.desc}</p>

              <ul className="mt-4 space-y-2 text-neutral-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-neutral-900" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a
                  href={s.href}
                  className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-white font-medium hover:bg-neutral-800 transition"
                >
                  Quero um diagnóstico
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-sm text-neutral-500">
          * Você pode começar por um diagnóstico e evoluir para operação contínua,
          conforme maturidade e necessidade.
        </div>
      </Container>
    </section>
  )
}
