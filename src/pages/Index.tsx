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
            <h1 className="mb-3 text-3xl font-medium tracking-tight text-foreground">
              Tasks
            </h1>
            <p className="max-w-md text-muted-foreground">
              Run specialized tasks to power your agent workflows.
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
