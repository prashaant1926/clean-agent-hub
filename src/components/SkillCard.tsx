import { Badge } from "@/components/ui/badge";
import type { Skill } from "@/data/skills";

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="group cursor-pointer rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-foreground/20 hover:shadow-lg">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-foreground">
          {skill.name}
        </h3>
        <Badge variant="secondary" className="shrink-0 rounded-md text-xs font-medium">
          {skill.category}
        </Badge>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {skill.description}
      </p>
      <p className="text-xs text-muted-foreground">
        by <span className="font-medium text-foreground">{skill.author}</span>
      </p>
    </div>
  );
}
