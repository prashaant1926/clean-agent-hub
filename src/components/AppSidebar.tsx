import { Home, LayoutGrid, Settings, Moon, HelpCircle } from "lucide-react";

const IsoLogo = () => (
  <svg viewBox="0 0 50 50" className="h-6 w-6 drop-shadow-md">
    <polygon points="25,5 45,17 45,35 25,47 5,35 5,17" fill="#f59e0b" />
    <polygon points="25,5 45,17 25,29 5,17" fill="#fbbf24" />
    <polygon points="25,29 45,17 45,35 25,47" fill="#d97706" />
    <polygon points="25,29 5,17 5,35 25,47" fill="#b45309" />
  </svg>
);

const mainNav = [
  { icon: Home, label: "Home", active: true },
  { icon: LayoutGrid, label: "Browse" },
];

const bottomNav = [
  { icon: Settings, label: "Settings" },
  { icon: Moon, label: "Theme" },
  { icon: HelpCircle, label: "Help" },
];

export function AppSidebar() {
  return (
    <aside className="flex h-screen w-52 flex-col border-r border-border bg-background">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5">
        <IsoLogo />
        <span className="font-semibold text-foreground">Sundial</span>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {mainNav.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Nav */}
      <nav className="border-t border-border px-3 py-4">
        <ul className="space-y-1">
          {bottomNav.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
