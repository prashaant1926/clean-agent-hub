import { ChevronRight } from "lucide-react";

const IsoCube = ({ color }: { color: string }) => (
  <svg viewBox="0 0 40 40" className="h-full w-full">
    <polygon points="20,6 34,14 34,28 20,36 6,28 6,14" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
    <polygon points="20,6 34,14 20,22 6,14" fill={color} fillOpacity="0.3" />
    <line x1="20" y1="22" x2="20" y2="36" stroke={color} strokeWidth="1" opacity="0.5" />
  </svg>
);

const IsoHex = ({ color }: { color: string }) => (
  <svg viewBox="0 0 40 40" className="h-full w-full">
    <polygon points="20,4 36,12 36,28 20,36 4,28 4,12" fill="none" stroke={color} strokeWidth="1.5" />
    <circle cx="20" cy="20" r="6" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1" />
  </svg>
);

const IsoPrism = ({ color }: { color: string }) => (
  <svg viewBox="0 0 40 40" className="h-full w-full">
    <polygon points="20,6 36,34 4,34" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
    <line x1="20" y1="6" x2="20" y2="34" stroke={color} strokeWidth="1" opacity="0.4" />
  </svg>
);

const IsoDiamond = ({ color }: { color: string }) => (
  <svg viewBox="0 0 40 40" className="h-full w-full">
    <polygon points="20,4 36,20 20,36 4,20" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
    <polygon points="20,10 30,20 20,30 10,20" fill={color} fillOpacity="0.2" />
  </svg>
);

const skills = [
  {
    Shape: IsoCube,
    color: "#10b981",
    title: "Code Interpreter",
    description: "Execute Python in a sandbox with data analysis and visualization.",
  },
  {
    Shape: IsoHex,
    color: "#f59e0b",
    title: "Web Search",
    description: "Search the web and retrieve up-to-date information in real-time.",
  },
  {
    Shape: IsoPrism,
    color: "#ec4899",
    title: "File Analysis",
    description: "Read, parse, and extract insights from documents and spreadsheets.",
  },
  {
    Shape: IsoDiamond,
    color: "#3b82f6",
    title: "Image Generation",
    description: "Create and edit images from natural language descriptions.",
  },
  {
    Shape: IsoCube,
    color: "#8b5cf6",
    title: "Memory",
    description: "Persist context across sessions for personalized interactions.",
  },
  {
    Shape: IsoHex,
    color: "#f97316",
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
            <div className="h-10 w-10">
              <skill.Shape color={skill.color} />
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
