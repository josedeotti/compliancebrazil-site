import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export const metadata = {
  title: "Compliance Brazil",
  description:
    "Estruturação e manutenção de programas de integridade e terceirização de compliance.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased text-neutral-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
