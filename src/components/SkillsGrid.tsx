import { ChevronRight } from "lucide-react";

const IsoCube = ({ color, shadow }: { color: string; shadow: string }) => (
  <svg viewBox="0 0 50 50" className="h-full w-full drop-shadow-lg">
    <polygon points="25,8 42,18 42,34 25,44 8,34 8,18" fill={shadow} />
    <polygon points="25,8 42,18 25,28 8,18" fill={color} />
    <polygon points="25,28 42,18 42,34 25,44" fill={shadow} />
    <polygon points="25,28 8,18 8,34 25,44" fill={shadow} className="opacity-70" />
  </svg>
);

const IsoHex = ({ color, shadow }: { color: string; shadow: string }) => (
  <svg viewBox="0 0 50 50" className="h-full w-full drop-shadow-lg">
    <polygon points="25,4 44,15 44,37 25,48 6,37 6,15" fill={shadow} />
    <circle cx="25" cy="26" r="10" fill={color} />
  </svg>
);

const IsoPrism = ({ color, shadow }: { color: string; shadow: string }) => (
  <svg viewBox="0 0 50 50" className="h-full w-full drop-shadow-lg">
    <polygon points="25,6 44,42 6,42" fill={shadow} />
    <polygon points="25,6 44,42 25,36" fill={color} className="opacity-80" />
    <polygon points="25,6 6,42 25,36" fill={color} />
  </svg>
);

const IsoDiamond = ({ color, shadow }: { color: string; shadow: string }) => (
  <svg viewBox="0 0 50 50" className="h-full w-full drop-shadow-lg">
    <polygon points="25,4 46,25 25,46 4,25" fill={shadow} />
    <polygon points="25,4 46,25 25,25" fill={color} />
    <polygon points="25,25 46,25 25,46" fill={shadow} className="opacity-60" />
  </svg>
);

const skills = [
  {
    Shape: IsoCube,
    color: "#34d399",
    shadow: "#059669",
    title: "Code Interpreter",
    description: "Execute Python in a sandbox with data analysis and visualization.",
  },
  {
    Shape: IsoHex,
    color: "#fbbf24",
    shadow: "#d97706",
    title: "Web Search",
    description: "Search the web and retrieve up-to-date information in real-time.",
  },
  {
    Shape: IsoPrism,
    color: "#f472b6",
    shadow: "#db2777",
    title: "File Analysis",
    description: "Read, parse, and extract insights from documents and spreadsheets.",
  },
  {
    Shape: IsoDiamond,
    color: "#60a5fa",
    shadow: "#2563eb",
    title: "Image Generation",
    description: "Create and edit images from natural language descriptions.",
  },
  {
    Shape: IsoCube,
    color: "#a78bfa",
    shadow: "#7c3aed",
    title: "Memory",
    description: "Persist context across sessions for personalized interactions.",
  },
  {
    Shape: IsoHex,
    color: "#fb923c",
    shadow: "#ea580c",
    title: "Tool Calling",
    description: "Invoke external APIs and functions based on intent.",
  },
];

export function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {skills.map((skill) => (
        <div
          key={skill.title}
          className="group cursor-pointer rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-lg"
        >
          <div className="mb-4 flex items-start justify-between">
            <div className="h-11 w-11">
              <skill.Shape color={skill.color} shadow={skill.shadow} />
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <h3 className="mb-1.5 font-semibold text-foreground">{skill.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
        </div>
      ))}
    </div>
  );
}
