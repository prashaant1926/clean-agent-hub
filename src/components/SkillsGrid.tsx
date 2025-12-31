import { ChevronRight } from "lucide-react";

const IsoCubeCluster = ({ color }: { color: string }) => (
  <svg viewBox="0 0 60 60" className="h-full w-full">
    {/* Center cube */}
    <polygon points="30,20 42,27 42,41 30,48 18,41 18,27" fill={color} stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="30,20 42,27 30,34 18,27" fill="white" stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="30,34 42,27 42,41 30,48" fill={color} stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="30,34 18,27 18,41 30,48" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1" />
    
    {/* Top cube */}
    <polygon points="30,8 42,15 42,29 30,36 18,29 18,15" fill={color} stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="30,8 42,15 30,22 18,15" fill="white" stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="30,22 42,15 42,29 30,36" fill={color} stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="30,22 18,15 18,29 30,36" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1" />
  </svg>
);

const IsoSingleCube = ({ color }: { color: string }) => (
  <svg viewBox="0 0 60 60" className="h-full w-full">
    <polygon points="30,12 48,22 48,42 30,52 12,42 12,22" fill={color} stroke="#1a1a1a" strokeWidth="1.5" />
    <polygon points="30,12 48,22 30,32 12,22" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
    <polygon points="30,32 48,22 48,42 30,52" fill={color} stroke="#1a1a1a" strokeWidth="1.5" />
    <polygon points="30,32 12,22 12,42 30,52" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1.5" />
  </svg>
);

const IsoDoubleCube = ({ color }: { color: string }) => (
  <svg viewBox="0 0 60 60" className="h-full w-full">
    {/* Left cube */}
    <polygon points="22,18 34,25 34,39 22,46 10,39 10,25" fill={color} stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="22,18 34,25 22,32 10,25" fill="white" stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="22,32 34,25 34,39 22,46" fill={color} stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="22,32 10,25 10,39 22,46" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1" />
    
    {/* Right cube */}
    <polygon points="38,18 50,25 50,39 38,46 26,39 26,25" fill={color} stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="38,18 50,25 38,32 26,25" fill="white" stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="38,32 50,25 50,39 38,46" fill={color} stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="38,32 26,25 26,39 38,46" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1" />
  </svg>
);

const IsoTripleCube = ({ color }: { color: string }) => (
  <svg viewBox="0 0 60 60" className="h-full w-full">
    {/* Bottom left */}
    <polygon points="20,28 32,35 32,49 20,56 8,49 8,35" fill={color} stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="20,28 32,35 20,42 8,35" fill="white" stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="20,42 32,35 32,49 20,56" fill={color} stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="20,42 8,35 8,49 20,56" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1" />
    
    {/* Bottom right */}
    <polygon points="40,28 52,35 52,49 40,56 28,49 28,35" fill={color} stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="40,28 52,35 40,42 28,35" fill="white" stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="40,42 52,35 52,49 40,56" fill={color} stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="40,42 28,35 28,49 40,56" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1" />
    
    {/* Top center */}
    <polygon points="30,8 42,15 42,29 30,36 18,29 18,15" fill={color} stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="30,8 42,15 30,22 18,15" fill="white" stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="30,22 42,15 42,29 30,36" fill={color} stroke="#1a1a1a" strokeWidth="1" />
    <polygon points="30,22 18,15 18,29 30,36" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1" />
  </svg>
);

const skills = [
  {
    Shape: IsoSingleCube,
    color: "#ef4444",
    title: "pdf",
    description: "Create, extract, merge PDFs and handle forms.",
  },
  {
    Shape: IsoCubeCluster,
    color: "#f59e0b",
    title: "pptx",
    description: "Generate and edit PowerPoint presentations.",
  },
  {
    Shape: IsoDoubleCube,
    color: "#22c55e",
    title: "xlsx",
    description: "Excel spreadsheets with formulas and data.",
  },
  {
    Shape: IsoTripleCube,
    color: "#3b82f6",
    title: "frontend-design",
    description: "Polished web UI and component design.",
  },
  {
    Shape: IsoSingleCube,
    color: "#8b5cf6",
    title: "algorithmic-art",
    description: "Generative p5.js art and visualizations.",
  },
  {
    Shape: IsoCubeCluster,
    color: "#ec4899",
    title: "canvas-design",
    description: "Visual art output as .png or .pdf.",
  },
  {
    Shape: IsoDoubleCube,
    color: "#14b8a6",
    title: "theme-factory",
    description: "Generate 10 color and font themes.",
  },
  {
    Shape: IsoTripleCube,
    color: "#6366f1",
    title: "web-artifacts-builder",
    description: "Complex React artifacts and components.",
  },
  {
    Shape: IsoSingleCube,
    color: "#f97316",
    title: "mcp-builder",
    description: "MCP server development and tooling.",
  },
  {
    Shape: IsoCubeCluster,
    color: "#06b6d4",
    title: "slack-gif-creator",
    description: "Create animated GIFs for Slack.",
  },
  {
    Shape: IsoDoubleCube,
    color: "#a855f7",
    title: "brand-guidelines",
    description: "Maintain brand consistency across assets.",
  },
  {
    Shape: IsoTripleCube,
    color: "#84cc16",
    title: "internal-comms",
    description: "Internal messaging templates and docs.",
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
          <h3 className="mb-1.5 font-medium text-foreground">{skill.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
        </div>
      ))}
    </div>
  );
}
