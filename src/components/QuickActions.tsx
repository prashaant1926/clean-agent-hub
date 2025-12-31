import { Layers, Database, Users, BarChart3, GitBranch, Key } from "lucide-react";

const actions = [
  { icon: Layers, label: "Create project" },
  { icon: Database, label: "Add dataset" },
  { icon: Users, label: "Invite members" },
  { icon: BarChart3, label: "View usage" },
  { icon: GitBranch, label: "Create ontology" },
  { icon: Key, label: "Create API key" },
];

export function QuickActions() {
  return (
    <div className="grid grid-cols-3 gap-3 lg:grid-cols-6">
      {actions.map((action) => (
        <button
          key={action.label}
          className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 text-center transition-colors hover:bg-muted"
        >
          <action.icon className="h-5 w-5 text-muted-foreground" />
          <span className="text-xs font-medium text-foreground">{action.label}</span>
        </button>
      ))}
    </div>
  );
}
