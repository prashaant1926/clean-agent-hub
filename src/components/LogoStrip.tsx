const logos = [
  "Warner Bros",
  "Peloton",
  "Dialpad",
  "Pinterest",
  "Liberty Mutual",
  "Ancestry",
  "Walmart",
  "Genentech",
  "P&G",
  "Speak",
  "ElevenLabs",
  "Shutterstock",
];

export function LogoStrip() {
  return (
    <section className="border-b border-border py-8">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 text-center text-sm text-muted-foreground">
          Trusted by companies of all sizes — from startups to Fortune 500s
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-sm font-semibold text-muted-foreground/60 transition-colors hover:text-foreground"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
