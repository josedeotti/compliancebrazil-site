export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-neutral-900" />
              <span className="text-sm font-semibold tracking-wide text-neutral-900">
                Compliance Brazil
              </span>
            </div>

            <p className="mt-4 text-sm text-neutral-600">
              Estruturação e manutenção de programas de integridade, terceirização
              de compliance e suporte em LGPD — com foco em governança, evidências e
              resultado.
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <a
                className="block text-neutral-700 hover:text-neutral-900"
                href="mailto:contato@compliancebrazil.com.br"
              >
                contato@compliancebrazil.com.br
              </a>
              <a
                className="block text-neutral-700 hover:text-neutral-900"
                href="#"
              >
                WhatsApp (inserir link)
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold text-neutral-900">Navegação</p>
            <div className="mt-4 space-y-2 text-sm">
              <a className="block text-neutral-700 hover:text-neutral-900" href="#servicos">
                Serviços
              </a>
              <a className="block text-neutral-700 hover:text-neutral-900" href="#tecnologia">
                Tecnologia
              </a>
              <a className="block text-neutral-700 hover:text-neutral-900" href="#prova-social">
                Experiência
              </a>
              <a className="block text-neutral-700 hover:text-neutral-900" href="#como-funciona">
                Como funciona
              </a>
              <a className="block text-neutral-700 hover:text-neutral-900" href="#contato">
                Contato
              </a>
            </div>
          </div>

          {/* Políticas / institucional */}
          <div>
            <p className="text-sm font-semibold text-neutral-900">Institucional</p>
            <div className="mt-4 space-y-2 text-sm">
              <a className="block text-neutral-700 hover:text-neutral-900" href="/sobre">
                Sobre
              </a>
              <a className="block text-neutral-700 hover:text-neutral-900" href="/politica-de-privacidade">
                Política de Privacidade
              </a>
              <a className="block text-neutral-700 hover:text-neutral-900" href="/termos">
                Termos de Uso
              </a>
            </div>

            <p className="mt-6 text-xs text-neutral-500">
              * Páginas institucionais podem ser adicionadas aos poucos.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-neutral-200 pt-8 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Compliance Brazil. Todos os direitos reservados.</p>
          <p>São Paulo · Brasil</p>
        </div>
      </div>
    </footer>
  )
}
