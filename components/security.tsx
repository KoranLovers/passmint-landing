import { Shield, Lock, Eye, Server, Key, FileCheck } from "lucide-react"

const securityFeatures = [
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description:
      "We use the same encryption standard trusted by governments and financial institutions worldwide. Your data is encrypted locally before it ever leaves your device.",
  },
  {
    icon: Key,
    title: "Zero-Knowledge Architecture",
    description:
      "We never see your master password or decrypted data. All encryption and decryption happens on your device — even we can't access your passwords.",
  },
  {
    icon: Shield,
    title: "PBKDF2 Key Derivation",
    description:
      "Your master password is strengthened with 600,000 iterations of PBKDF2-SHA256, making brute-force attacks computationally infeasible.",
  },
  {
    icon: Eye,
    title: "No Tracking, No Analytics",
    description:
      "We don't track your behavior, collect usage analytics, or sell your data. Your privacy is absolute — not a feature, but a principle.",
  },
  {
    icon: Server,
    title: "Local-First Storage",
    description:
      "Your encrypted vault is stored locally on your device. Optional sync uses end-to-end encryption — servers only see encrypted blobs.",
  },
  {
    icon: FileCheck,
    title: "Open Security Model",
    description:
      "Our encryption implementation follows industry best practices and is regularly audited. We believe security should be transparent, not obscure.",
  },
]

export function Security() {
  return (
    <section id="security" className="border-t border-border bg-card px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Pass Mint is Secure</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We built Pass Mint with security as the foundation, not an afterthought. Here's how we protect your most
            sensitive data.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-background p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-200 hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
          <Shield className="mx-auto h-10 w-10 text-primary" />
          <h3 className="mt-4 text-xl font-semibold text-foreground">Your Data, Your Control</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            With Pass Mint, you hold the only key to your data. Our zero-knowledge design means that even if our servers
            were compromised, your passwords would remain encrypted and unreadable. We can't reset your master password
            because we don't have it — and that's exactly how it should be.
          </p>
        </div>
      </div>
    </section>
  )
}
