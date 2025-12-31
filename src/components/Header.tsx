import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <span className="text-lg font-semibold tracking-tight text-foreground">
          Agent Skills
        </span>
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
