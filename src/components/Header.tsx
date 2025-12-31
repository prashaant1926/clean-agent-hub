import { Button } from "@/components/ui/button";

const IsoLogo = () => (
  <svg viewBox="0 0 50 50" className="h-7 w-7 drop-shadow-md">
    <polygon points="25,5 45,17 45,35 25,47 5,35 5,17" fill="#f59e0b" />
    <polygon points="25,5 45,17 25,29 5,17" fill="#fbbf24" />
    <polygon points="25,29 45,17 45,35 25,47" fill="#d97706" />
    <polygon points="25,29 5,17 5,35 25,47" fill="#b45309" />
  </svg>
);

export function Header() {
  return (
    <header className="bg-background">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <IsoLogo />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Sundial
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            Log in
          </a>
          <Button size="sm" className="rounded-lg font-medium shadow-sm">
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}
