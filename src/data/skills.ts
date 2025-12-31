export interface Skill {
  id: string;
  name: string;
  description: string;
  category: string;
  author: string;
}

export const categories = [
  "All",
  "Productivity",
  "Coding",
  "Research",
  "Creative",
  "Data Analysis",
] as const;

export type Category = (typeof categories)[number];

export const skills: Skill[] = [
  {
    id: "1",
    name: "Code Reviewer",
    description: "Analyzes code for bugs, security issues, and suggests improvements with detailed explanations.",
    category: "Coding",
    author: "Alex Chen",
  },
  {
    id: "2",
    name: "Research Synthesizer",
    description: "Combines multiple sources into coherent summaries with proper citations and key insights.",
    category: "Research",
    author: "Maya Patel",
  },
  {
    id: "3",
    name: "Meeting Notes",
    description: "Transforms raw meeting transcripts into structured action items and decisions.",
    category: "Productivity",
    author: "Jordan Lee",
  },
  {
    id: "4",
    name: "Data Narrator",
    description: "Converts complex datasets into clear, narrative-driven insights and visualizations.",
    category: "Data Analysis",
    author: "Sam Rivera",
  },
  {
    id: "5",
    name: "Story Weaver",
    description: "Generates creative narratives from prompts with consistent tone and character development.",
    category: "Creative",
    author: "Taylor Morgan",
  },
  {
    id: "6",
    name: "API Architect",
    description: "Designs RESTful API schemas and generates documentation from natural language specs.",
    category: "Coding",
    author: "Chris Wu",
  },
  {
    id: "7",
    name: "Email Composer",
    description: "Crafts professional emails with appropriate tone, structure, and call-to-actions.",
    category: "Productivity",
    author: "Riley Kim",
  },
  {
    id: "8",
    name: "Fact Checker",
    description: "Verifies claims against reliable sources and provides confidence scores with references.",
    category: "Research",
    author: "Jamie Brooks",
  },
];
