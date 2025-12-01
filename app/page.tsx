import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { WhatsNew } from "@/components/whats-new"
import { Security } from "@/components/security"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Features />
          <WhatsNew />
          <Security />
          <FAQ />
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </ThemeProvider>
  )
}
