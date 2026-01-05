import { Container } from "../layout/Container"

export function FinalCTA() {
  return (
    <section className="bg-white py-20" id="contato">
      <Container>
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
            {/* Texto */}
            <div>
              <p className="text-sm font-semibold tracking-wide text-neutral-600">
                Próximo passo
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
                Vamos mapear prioridades{" "}
                <span className="text-neutral-500">
                  e montar um caminho viável
                </span>
              </h2>
              <p className="mt-5 text-lg text-neutral-600">
                Em uma conversa objetiva, entendemos seu cenário, maturidade,
                exigências (auditoria, licitações, regulatório) e definimos o melhor
                formato: estruturação, manutenção contínua ou frentes específicas.
              </p>

              <div className="mt-6 space-y-3 text-neutral-700">
                <div className="rounded-xl border border-neutral-200 bg-white p-4">
                  <p className="font-semibold text-neutral-900">
                    O que você recebe após a conversa
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-neutral-900" />
                      <span>Diagnóstico inicial e prioridades</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-neutral-900" />
                      <span>Proposta de formato (projeto ou operação contínua)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-neutral-900" />
                      <span>Próximos passos com cronograma sugerido</span>
                    </li>
                  </ul>
                </div>

                <div className="text-sm text-neutral-500">
                  * Se preferir, você pode falar diretamente por e-mail ou WhatsApp.
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:contato@compliancebrazil.com.br"
                    className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 font-medium text-neutral-900 hover:bg-neutral-100 transition"
                  >
                    contato@compliancebrazil.com.br
                  </a>

                  {/* Troque pelo seu número real quando quiser */}
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 font-medium text-neutral-900 hover:bg-neutral-100 transition"
                  >
                    WhatsApp (inserir link)
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
              <h3 className="text-xl font-semibold text-neutral-900">
                Solicitar contato
              </h3>
              <p className="mt-2 text-neutral-600">
                Preencha e retornamos com uma proposta de agenda.
              </p>

              <form className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-neutral-700">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Seu nome"
                    className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-300"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-neutral-700">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Nome da empresa"
                    className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-300"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-neutral-700">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="voce@empresa.com"
                    className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-300"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-neutral-700">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    name="mensagem"
                    placeholder="Conte brevemente seu contexto (ex.: licitação, auditoria, canal de denúncias, LGPD...)"
                    rows={4}
                    className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-300"
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-white font-medium hover:bg-neutral-800 transition"
                >
                  Enviar solicitação
                </button>

                <p className="text-xs text-neutral-500">
                  Ao enviar, você concorda em ser contatado pela Compliance Brazil
                  para retorno sobre este pedido.
                </p>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Compliance Brazil. Todos os direitos reservados.
        </div>
      </Container>
    </section>
  )
}
