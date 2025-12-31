import { Home, LayoutGrid, PenTool, Box, Triangle, Settings, Moon, Bell, HelpCircle } from "lucide-react";

const IsoLogo = () => (
  <svg viewBox="0 0 50 50" className="h-6 w-6">
    <polygon points="25,5 45,17 45,35 25,47 5,35 5,17" fill="#f59e0b" />
    <polygon points="25,5 45,17 25,29 5,17" fill="#fbbf24" />
    <polygon points="25,29 45,17 45,35 25,47" fill="#d97706" />
    <polygon points="25,29 5,17 5,35 25,47" fill="#b45309" />
  </svg>
);

const mainNav = [
  { icon: Home, label: "Home", active: true },
  { icon: LayoutGrid, label: "Catalog" },
  { icon: PenTool, label: "Annotate" },
  { icon: Box, label: "Model" },
  { icon: Triangle, label: "Schema" },
];

const bottomNav = [
  { icon: Settings, label: "Settings" },
  { icon: Moon, label: "Theme" },
  { icon: Bell, label: "Notifications" },
  { icon: HelpCircle, label: "Help" },
];

export function AppSidebar() {
  return (
    <aside className="flex h-screen w-48 flex-col border-r border-border bg-background">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-4">
        <IsoLogo />
        <span className="font-semibold text-foreground">Sundial</span>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 px-2 py-4">
        <ul className="space-y-1">
          {mainNav.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  item.active
                    ? "text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Nav */}
      <nav className="border-t border-border px-2 py-4">
        <ul className="space-y-1">
          {bottomNav.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* User */}
      <div className="border-t border-border px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
          PR
        </div>
      </div>
    </aside>
  );
}
