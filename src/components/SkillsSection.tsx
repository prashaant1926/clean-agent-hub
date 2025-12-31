import { CheckSquare, Sparkles, Route, Database, ChevronRight } from "lucide-react";

const skills = [
  {
    icon: CheckSquare,
    bgColor: "bg-emerald-500",
    title: "Rubric evals",
    description: "Fueling structured and standardized assessments of model performance",
  },
  {
    icon: Sparkles,
    bgColor: "bg-amber-500",
    title: "Reinforcement learning with verifiable rewards (RLVR)",
    description: "Unlocking the next level of AI utility with automated, verifiable feedback",
  },
  {
    icon: Route,
    bgColor: "bg-rose-500",
    title: "Agentic trajectories",
    description: "Refining the right data to train and evaluate agents effectively",
  },
  {
    icon: Database,
    bgColor: "bg-orange-500",
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
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${skill.bgColor}`}>
                  <skill.icon className="h-6 w-6 text-white" />
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
