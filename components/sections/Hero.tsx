import { Container } from "../layout/Container"

export function Hero() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          
          {/* Texto */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Programas de Compliance que saem do papel  
              <span className="block text-neutral-500 mt-2">
                e funcionam no dia a dia da empresa
              </span>
            </h1>

            <p className="mt-6 text-lg text-neutral-600 max-w-xl">
              Estruturamos e operamos programas de integridade, compliance e LGPD 
              com foco em redução de riscos, eficiência e segurança jurídica.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-white font-medium hover:bg-neutral-800 transition"
              >
                Falar com um especialista
              </a>

              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-6 py-3 font-medium text-neutral-900 hover:bg-neutral-100 transition"
              >
                Entenda como funciona
              </a>
            </div>
          </div>

          {/* Espaço visual (placeholder) */}
          <div className="hidden md:block">
            <div className="h-80 w-full rounded-xl bg-neutral-100" />
          </div>

        </div>
      </Container>
    </section>
  )
}
