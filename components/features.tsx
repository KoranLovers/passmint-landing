import { Shield, MousePointer, Smartphone, RefreshCw } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description: "Your data is encrypted before it leaves your device. Only you can access your passwords.",
  },
  {
    icon: MousePointer,
    title: "One-Click Autofill",
    description: "Instantly fill in your credentials with a single click. No more typing passwords.",
  },
  {
    icon: Smartphone,
    title: "Cross-Device Sync",
    description: "Access your passwords anywhere. Seamlessly sync across all your devices.",
  },
  {
    icon: RefreshCw,
    title: "Password Generator",
    description: "Create strong, unique passwords with our built-in generator. Stay secure effortlessly.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-t border-border bg-card px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Everything you need</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Simple yet powerful features designed to keep your passwords secure without getting in your way.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-background p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all hover:border-primary/50 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
