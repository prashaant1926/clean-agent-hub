import { ChevronRight, CheckSquare, Sparkles, Route, Database } from "lucide-react";

const features = [
  {
    icon: CheckSquare,
    color: "bg-emerald-100 text-emerald-600",
    title: "Rubric evals",
    description: "Fueling structured and standardized assessments of model performance",
  },
  {
    icon: Sparkles,
    color: "bg-amber-100 text-amber-600",
    title: "Reinforcement learning with verifiable rewards (RLVR)",
    description: "Unlocking the next level of AI utility with automated, verifiable feedback",
  },
  {
    icon: Route,
    color: "bg-rose-100 text-rose-600",
    title: "Agentic trajectories",
    description: "Refining the right data to train and evaluate agents effectively",
  },
  {
    icon: Database,
    color: "bg-orange-100 text-orange-600",
    title: "Off-the-shelf (OTS) data",
    description: "Prebuilt datasets to accelerate fine-tuning and model development.",
  },
];

export function ResearchSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left side - Title and description */}
          <div className="max-w-md">
            <h2 className="mb-6 font-serif text-4xl font-normal leading-tight text-foreground lg:text-5xl">
              Latest work from Agent Skills Research
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Our world-class applied research team pioneers frontier AI data generation and evaluation methods. Through scientific precision and co-innovation, we help customers achieve real-time AGI breakthroughs.
            </p>
          </div>

          {/* Right side - Feature cards */}
          <div className="flex flex-col gap-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group flex cursor-pointer items-center gap-5 rounded-lg p-4 transition-colors hover:bg-muted/50"
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${feature.color}`}>
                  <feature.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-medium text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
