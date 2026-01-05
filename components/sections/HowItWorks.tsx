import { Container } from "../layout/Container"

const steps = [
  {
    number: "01",
    title: "Diagnóstico e prioridades",
    desc: "Entendemos o cenário, riscos, exigências contratuais/regulatórias e maturidade atual. Saímos com prioridades claras e um plano objetivo.",
  },
  {
    number: "02",
    title: "Desenho do programa e governança",
    desc: "Estruturamos políticas, fluxos, responsabilidades, comitês e indicadores. O programa já nasce com rotina e evidências definidas.",
  },
  {
    number: "03",
    title: "Implementação assistida",
    desc: "Apoiamos a implantação com materiais, comunicação interna, treinamentos e ajustes operacionais para garantir adoção real.",
  },
  {
    number: "04",
    title: "Operação contínua e melhoria",
    desc: "Rodamos a cadência do compliance: monitoramento, evidências, reporte e evolução. Você acompanha tudo com governança e previsibilidade.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-neutral-50 py-20" id="como-funciona">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-neutral-600">
              Como funciona
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
              Clareza do início ao contínuo —{" "}
              <span className="text-neutral-500">
                sem projetos que morrem após a entrega
              </span>
            </h2>
            <p className="mt-5 text-lg text-neutral-600">
              Você pode começar por um diagnóstico e evoluir para estruturação e
              operação contínua. O foco é previsibilidade, evidências e resultado.
            </p>
          </div>

          <div className="md:flex md:justify-end">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-white font-medium hover:bg-neutral-800 transition"
            >
              Agendar diagnóstico
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.number}
              className="rounded-xl border border-neutral-200 bg-white p-6"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold text-neutral-500">
                    Etapa {s.number}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                    {s.title}
                  </h3>
                </div>

                <div className="rounded-lg bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-700">
                  {s.number}
                </div>
              </div>

              <p className="mt-3 text-neutral-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-neutral-200 bg-white p-6 md:p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-neutral-900">
                Entregáveis e visibilidade para a liderança
              </h3>
              <p className="mt-2 text-neutral-600">
                Relatórios periódicos, indicadores, trilhas, evidências e uma
                governança clara para decisão executiva — com foco em reduzir risco
                e aumentar consistência.
              </p>
            </div>

            <div className="md:flex md:justify-end">
              <a
                href="#contato"
                className="inline-flex w-full md:w-auto items-center justify-center rounded-md border border-neutral-300 px-6 py-3 font-medium text-neutral-900 hover:bg-neutral-100 transition"
              >
                Ver proposta de atuação
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
