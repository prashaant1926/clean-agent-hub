import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Agent Skills
          </span>
          <nav className="hidden items-center gap-6 sm:flex">
            <a
              href="#"
              className="text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              Browse
            </a>
            <a
              href="#"
              className="text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              Pricing
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden text-sm font-medium text-foreground transition-colors hover:text-muted-foreground sm:inline-block"
          >
            Log in
          </a>
          <Button size="sm" className="rounded-lg font-medium">
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}
