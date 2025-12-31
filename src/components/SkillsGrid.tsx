import { ChevronRight } from "lucide-react";

const IsoCube = ({ color }: { color: string }) => (
  <svg viewBox="0 0 40 40" className="h-full w-full">
    <rect x="8" y="8" width="24" height="24" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" rx="2" />
  </svg>
);

const IsoCircle = ({ color }: { color: string }) => (
  <svg viewBox="0 0 40 40" className="h-full w-full">
    <circle cx="20" cy="20" r="14" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
  </svg>
);

const IsoTriangle = ({ color }: { color: string }) => (
  <svg viewBox="0 0 40 40" className="h-full w-full">
    <polygon points="20,6 36,34 4,34" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
  </svg>
);

const IsoDiamond = ({ color }: { color: string }) => (
  <svg viewBox="0 0 40 40" className="h-full w-full">
    <polygon points="20,6 34,20 20,34 6,20" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
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
    Shape: IsoCircle,
    color: "#f59e0b",
    title: "Web Search",
    description: "Search the web and retrieve up-to-date information in real-time.",
  },
  {
    Shape: IsoTriangle,
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
    Shape: IsoCircle,
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
