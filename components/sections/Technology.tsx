import { Container } from "../layout/Container"

const tools = [
  {
    name: "Eticonfidencial",
    subtitle: "Canal de denúncias",
    desc: "Canal seguro e estruturado para registro, triagem e acompanhamento de denúncias, com governança, rastreabilidade e confidencialidade.",
    points: [
      "Fluxo de apuração e evidências",
      "Confidencialidade e não retaliação",
      "Indicadores e histórico organizado",
    ],
  },
  {
    name: "LGPDash",
    subtitle: "Gestão de privacidade e LGPD",
    desc: "Organiza inventários, bases legais, riscos, planos de ação e evidências de LGPD em um único ambiente, facilitando a sustentação.",
    points: [
      "Mapeamento e governança",
      "Gestão de riscos e planos",
      "Resposta a incidentes",
    ],
  },
  {
    name: "Intrx",
    subtitle: "Intranet e comunicação interna",
    desc: "Centraliza políticas, comunicados e treinamentos, apoiando a disseminação da cultura de compliance e a comprovação de ciência.",
    points: [
      "Publicação de normativos",
      "Comunicação institucional",
      "Registro de ciência e acesso",
    ],
  },
]

export function Technology() {
  return (
    <section className="bg-neutral-50 py-20" id="tecnologia">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-neutral-600">
            Tecnologia como meio, não como fim
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
            Ferramentas que dão escala,{" "}
            <span className="text-neutral-500">
              organização e evidências ao compliance
            </span>
          </h2>
          <p className="mt-5 text-lg text-neutral-600">
            Utilizamos tecnologia própria para reduzir retrabalho, organizar
            informações e sustentar a operação ao longo do tempo — sempre integrada
            ao serviço de consultoria e à governança do cliente.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="rounded-xl border border-neutral-200 bg-white p-6"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-neutral-900">
                  {tool.name}
                </h3>
                <p className="text-sm text-neutral-500">{tool.subtitle}</p>
              </div>

              <p className="text-neutral-600">{tool.desc}</p>

              <ul className="mt-4 space-y-2 text-neutral-700">
                {tool.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-neutral-900" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-neutral-200 bg-white p-6 md:p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-neutral-900">
                Serviço + tecnologia funcionando juntos
              </h3>
              <p className="mt-2 text-neutral-600">
                As ferramentas não substituem o serviço — elas viabilizam um
                compliance mais organizado, rastreável e auditável, com menor custo
                operacional.
              </p>
            </div>

            <div className="md:flex md:justify-end">
              <a
                href="#contato"
                className="inline-flex w-full md:w-auto items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-white font-medium hover:bg-neutral-800 transition"
              >
                Ver como funciona na prática
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
