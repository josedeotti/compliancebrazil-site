import { Container } from "../layout/Container"

const items = [
  {
    title: "Estruturação do Programa",
    desc: "Desenhamos a base do seu compliance com diagnóstico, políticas, fluxos, comitês e indicadores — alinhado ao seu risco e ao seu setor.",
  },
  {
    title: "Manutenção contínua (não só projeto)",
    desc: "Assumimos rotinas críticas: plano anual, controles, evidências, reporte e melhoria contínua. Compliance funcionando mês a mês.",
  },
  {
    title: "Terceirização com governança",
    desc: "Você ganha capacidade operacional sem inflar equipe interna — com SLA, cadência de reuniões, trilhas e acompanhamento executivo.",
  },
  {
    title: "Tecnologia para dar escala",
    desc: "Usamos ferramentas para reduzir retrabalho e organizar evidências (canal de denúncias, LGPD e intranet), sem complicar a operação.",
  },
]

export function ValueProps() {
  return (
    <section className="bg-white py-20" id="como-funciona">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-neutral-600">
            Como a Compliance Brazil atua
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
            Um modelo completo:{" "}
            <span className="text-neutral-500">
              estratégia, execução e operação contínua
            </span>
          </h2>
          <p className="mt-5 text-lg text-neutral-600">
            Ajudamos sua empresa a sair do “compliance de gaveta” e construir um
            programa prático, auditável e sustentável — com governança e
            acompanhamento periódico.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-neutral-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-neutral-900">
                Quer um norte rápido antes de decidir?
              </h3>
              <p className="mt-2 text-neutral-600">
                Em uma conversa curta, mapeamos seu cenário, prioridades e o melhor
                caminho para estruturar e manter o programa.
              </p>
            </div>

            <div className="md:flex md:justify-end">
              <a
                href="#contato"
                className="inline-flex w-full md:w-auto items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-white font-medium hover:bg-neutral-800 transition"
              >
                Agendar conversa
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
