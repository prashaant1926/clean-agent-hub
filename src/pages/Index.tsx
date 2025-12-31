import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { SkillCard } from "@/components/SkillCard";
import { skills, type Category } from "@/data/skills";

const Index = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesSearch =
        skill.name.toLowerCase().includes(search.toLowerCase()) ||
        skill.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || skill.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="mx-auto max-w-6xl px-6 py-20">
        {/* Hero Section */}
        <div className="mb-20">
          <h1 className="mb-6 text-6xl font-black tracking-tight text-foreground sm:text-7xl lg:text-8xl leading-[0.95]">
            The skill library<br />
            for AI agents
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            Discover and integrate specialized capabilities to operate, 
            build, or enhance your AI-powered workflows.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="w-full max-w-xl">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <CategoryFilter selected={category} onSelect={setCategory} />
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">No skills found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
