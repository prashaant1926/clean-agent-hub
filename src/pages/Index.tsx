import { AppSidebar } from "@/components/AppSidebar";
import { QuickActions } from "@/components/QuickActions";
import { ServiceCards } from "@/components/ServiceCards";
import { FeaturedReads } from "@/components/FeaturedReads";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="mx-auto max-w-6xl px-8 py-6">
          {/* Quick Actions */}
          <div className="mb-8">
            <QuickActions />
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-8 lg:grid-cols-[1fr,380px]">
            <ServiceCards />
            <FeaturedReads />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
