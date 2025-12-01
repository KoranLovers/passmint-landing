"use client"

import { useState } from "react"
import { Fingerprint, Moon, Download, Bell, Sparkles } from "lucide-react"

const updates = [
  {
    version: "v2.1",
    title: "Biometric unlock support",
    description: "Use fingerprint or Face ID to quickly access your vault on supported devices.",
    icon: Fingerprint,
    date: "Jan 2025",
  },
  {
    version: "v2.0",
    title: "Dark mode added",
    description: "Easy on the eyes with a beautiful dark theme that follows your system preferences.",
    icon: Moon,
    date: "Dec 2024",
  },
  {
    version: "v1.9",
    title: "Import from other managers",
    description: "Easily migrate from LastPass, 1Password, Dashlane, and more with one click.",
    icon: Download,
    date: "Nov 2024",
  },
  {
    version: "v1.8",
    title: "Breach alerts",
    description: "Get notified instantly if any of your saved passwords appear in a data breach.",
    icon: Bell,
    date: "Oct 2024",
  },
  {
    version: "v1.7",
    title: "Smart password suggestions",
    description: "AI-powered suggestions to help you create memorable yet secure passwords.",
    icon: Sparkles,
    date: "Sep 2024",
  },
]

export function WhatsNew() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="whats-new" className="border-t border-border px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What's New</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We're constantly improving Pass Mint. Here's what we've been working on.
          </p>
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap justify-center gap-2">
            {updates.map((update, index) => (
              <button
                key={update.version}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeIndex === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {update.version}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {(() => {
                  const Icon = updates[activeIndex].icon
                  return <Icon className="h-6 w-6" />
                })()}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {updates[activeIndex].version}
                  </span>
                  <span className="text-sm text-muted-foreground">{updates[activeIndex].date}</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{updates[activeIndex].title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{updates[activeIndex].description}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-6" />
              <div className="space-y-4">
                {updates.map((update, index) => (
                  <div
                    key={update.version}
                    className={`relative flex items-center gap-4 pl-10 sm:pl-14 ${
                      index === activeIndex ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    <div
                      className={`absolute left-2 h-4 w-4 rounded-full border-2 sm:left-4 ${
                        index === activeIndex ? "border-primary bg-primary" : "border-border bg-background"
                      }`}
                    />
                    <span className="text-sm font-medium text-foreground">{update.version}</span>
                    <span className="text-sm text-muted-foreground">{update.title}</span>
                    <span className="ml-auto hidden text-xs text-muted-foreground sm:block">{update.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
