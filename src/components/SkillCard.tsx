import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Skill } from "@/data/skills";

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="group cursor-pointer border-border/50 bg-card transition-all duration-200 hover:border-border hover:shadow-md">
      <CardContent className="p-6">
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
            {skill.name}
          </h3>
          <Badge variant="secondary" className="ml-2 shrink-0 text-xs font-medium">
            {skill.category}
          </Badge>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {skill.description}
        </p>
        <p className="text-xs text-muted-foreground/70">
          by <span className="font-medium text-muted-foreground">{skill.author}</span>
        </p>
      </CardContent>
    </Card>
  );
}
