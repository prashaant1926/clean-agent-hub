import { ChevronRight } from "lucide-react";

const IsoCube = ({ color }: { color: string }) => (
  <svg viewBox="0 0 50 50" className="h-full w-full">
    <polygon points="25,5 45,17 45,35 25,47 5,35 5,17" fill={color} />
    <polygon points="25,5 45,17 25,29 5,17" fill={color} className="opacity-80" />
    <polygon points="25,29 45,17 45,35 25,47" fill={color} className="opacity-60" />
    <polygon points="25,29 5,17 5,35 25,47" fill={color} className="opacity-40" />
  </svg>
);

const IsoHexagon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 50 50" className="h-full w-full">
    <polygon points="25,2 46,14 46,38 25,50 4,38 4,14" fill={color} />
    <circle cx="25" cy="26" r="12" fill={color} className="opacity-70" />
  </svg>
);

const IsoPyramid = ({ color }: { color: string }) => (
  <svg viewBox="0 0 50 50" className="h-full w-full">
    <polygon points="25,5 45,40 5,40" fill={color} />
    <polygon points="25,5 45,40 25,35" fill={color} className="opacity-60" />
    <polygon points="25,5 5,40 25,35" fill={color} className="opacity-80" />
  </svg>
);

const IsoDiamond = ({ color }: { color: string }) => (
  <svg viewBox="0 0 50 50" className="h-full w-full">
    <polygon points="25,2 48,25 25,48 2,25" fill={color} />
    <polygon points="25,2 48,25 25,25" fill={color} className="opacity-70" />
    <polygon points="25,25 48,25 25,48" fill={color} className="opacity-50" />
  </svg>
);

const skills = [
  {
    Shape: IsoCube,
    color: "#10b981",
    title: "Rubric evals",
    description: "Fueling structured and standardized assessments of model performance",
  },
  {
    Shape: IsoHexagon,
    color: "#f59e0b",
    title: "Reinforcement learning with verifiable rewards (RLVR)",
    description: "Unlocking the next level of AI utility with automated, verifiable feedback",
  },
  {
    Shape: IsoPyramid,
    color: "#f43f5e",
    title: "Agentic trajectories",
    description: "Refining the right data to train and evaluate agents effectively",
  },
  {
    Shape: IsoDiamond,
    color: "#f97316",
    title: "Off-the-shelf (OTS) data",
    description: "Prebuilt datasets to accelerate fine-tuning and model development.",
  },
];

export function SkillsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="mb-4 font-serif text-4xl font-normal text-foreground lg:text-5xl">
            Featured Skills
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Discover specialized capabilities to enhance your AI-powered workflows.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group cursor-pointer rounded-2xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="h-12 w-12">
                  <skill.Shape color={skill.color} />
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{skill.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
