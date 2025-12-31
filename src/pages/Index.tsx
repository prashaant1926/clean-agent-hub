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
      
      <main className="mx-auto max-w-6xl px-6 py-16">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Skills for your agents
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover and share specialized capabilities that make Claude more powerful.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-xl">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 flex justify-center">
          <CategoryFilter selected={category} onSelect={setCategory} />
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
