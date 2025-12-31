import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <span className="text-lg font-semibold tracking-tight text-foreground">
            ⬡ Agent Skills
          </span>
          <nav className="hidden items-center gap-1 lg:flex">
            <a
              href="#"
              className="px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              Why Agent Skills
            </a>
            <a
              href="#"
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              Resources <ChevronDown className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              What we offer <ChevronDown className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              Leaderboards
            </a>
            <a
              href="#"
              className="px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              Pricing
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground lg:inline-block"
          >
            Log in
          </a>
          <span className="hidden text-border lg:inline-block">|</span>
          <a
            href="#"
            className="hidden px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground lg:inline-block"
          >
            Start for free
          </a>
          <Button size="sm" className="rounded-lg font-medium">
            Contact us
          </Button>
        </div>
      </div>
    </header>
  );
}
