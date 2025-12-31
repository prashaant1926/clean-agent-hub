import { AppSidebar } from "@/components/AppSidebar";
import { SkillsGrid } from "@/components/SkillsGrid";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="px-10 py-10">
          {/* Hero */}
          <div className="mb-10">
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground">
              Skills for AI agents
            </h1>
            <p className="max-w-md text-muted-foreground">
              Discover and integrate specialized capabilities to power your agent workflows.
            </p>
          </div>

          {/* Skills */}
          <SkillsGrid />
        </div>
      </main>
    </div>
  );
};

export default Index;
