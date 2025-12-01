import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. Pass Mint uses end-to-end encryption, meaning your passwords are encrypted on your device before being stored. We use AES-256 encryption, the same standard used by banks and governments. We never have access to your master password or your decrypted data.",
  },
  {
    question: "Can I import passwords from other managers?",
    answer:
      "Yes! Pass Mint supports importing from all major password managers including LastPass, 1Password, Dashlane, Bitwarden, and Chrome's built-in password manager. Simply export your passwords as a CSV file and import them directly into Pass Mint.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "Pass Mint is currently available as a Chrome extension, which means it works on Chrome, Brave, Edge, and other Chromium-based browsers. We're actively working on Firefox and Safari extensions, coming soon!",
  },
  {
    question: "What happens if I forget my master password?",
    answer:
      "For security reasons, we cannot recover your master password. However, we offer a recovery key during setup that you can store safely. If you have your recovery key, you can reset your master password without losing your data.",
  },
  {
    question: "Can I share passwords with family members?",
    answer:
      "Yes, with our Pro plan you can securely share passwords with up to 5 family members. Shared passwords remain encrypted and you can revoke access at any time. Each family member gets their own vault.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Have questions? We've got answers. If you can't find what you're looking for, reach out to our support team.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
