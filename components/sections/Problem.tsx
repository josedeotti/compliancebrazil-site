import { Container } from "../layout/Container"

export function Problem() {
  return (
    <section className="bg-neutral-50 py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Texto */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-neutral-600">
              O cenário hoje
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
              Compliance virou requisito de sobrevivência —{" "}
              <span className="text-neutral-500">
                mas muita empresa ainda trata como “documento”
              </span>
            </h2>

            <p className="mt-5 text-lg text-neutral-600">
              O resultado costuma ser previsível: políticas sem adesão, treinamentos
              formais, evidências dispersas e uma operação que só “corre” quando
              aparece auditoria, licitação, denúncia ou incidente.
            </p>

            <p className="mt-4 text-lg text-neutral-600">
              No fim, o risco fica com a diretoria: exposição reputacional, perda de
              contratos, questionamentos de órgãos de controle e retrabalho interno.
            </p>
          </div>

          {/* Cards de dores */}
          <div className="grid gap-4">
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-semibold text-neutral-900">
                “Temos políticas, mas ninguém segue”
              </h3>
              <p className="mt-2 text-neutral-600">
                Falta rotina, responsabilização e acompanhamento — sem isso, compliance
                não vira cultura.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-semibold text-neutral-900">
                “Só lembramos do compliance na crise”
              </h3>
              <p className="mt-2 text-neutral-600">
                Auditoria, denúncia, incidente ou licitação viram gatilhos de corrida.
                O custo é sempre maior.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-semibold text-neutral-900">
                “As evidências estão espalhadas”
              </h3>
              <p className="mt-2 text-neutral-600">
                Sem método e sem ferramentas, fica difícil provar conformidade e
                manter consistência ao longo do tempo.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
