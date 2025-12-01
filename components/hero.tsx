import { Button } from "@/components/ui/button"
import { Lock, Key, Shield } from "lucide-react"

const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/anffadcnnbfhhljdpfjnaamohieceboc"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Your passwords. <span className="text-primary">Secured.</span>{" "}
            <span className="text-primary">Simplified.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
            A lightweight, privacy-first password manager for Chrome. Keep your credentials safe with end-to-end
            encryption.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-8">
                Add to Chrome — It's Free
              </Button>
            </a>
            <Button size="lg" variant="outline" className="px-8 bg-transparent" asChild>
              <a href="#features">Learn More</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-2xl sm:mt-24">
          <div className="relative rounded-2xl border border-border bg-card p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
            <div className="absolute -left-4 -top-4 rounded-xl bg-primary/10 p-3">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute -right-4 -top-4 rounded-xl bg-primary/10 p-3">
              <Key className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-xl bg-primary/10 p-3">
              <Lock className="h-6 w-6 text-primary" />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
                <div className="h-10 w-10 rounded-lg bg-primary/20" />
                <div className="flex-1">
                  <div className="h-3 w-24 rounded bg-muted-foreground/20" />
                  <div className="mt-2 h-2 w-32 rounded bg-muted-foreground/10" />
                </div>
                <div className="h-8 w-16 rounded-md bg-primary/20" />
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
                <div className="h-10 w-10 rounded-lg bg-primary/20" />
                <div className="flex-1">
                  <div className="h-3 w-20 rounded bg-muted-foreground/20" />
                  <div className="mt-2 h-2 w-28 rounded bg-muted-foreground/10" />
                </div>
                <div className="h-8 w-16 rounded-md bg-primary/20" />
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
                <div className="h-10 w-10 rounded-lg bg-primary/20" />
                <div className="flex-1">
                  <div className="h-3 w-28 rounded bg-muted-foreground/20" />
                  <div className="mt-2 h-2 w-24 rounded bg-muted-foreground/10" />
                </div>
                <div className="h-8 w-16 rounded-md bg-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
