export interface Skill {
  id: string;
  name: string;
  description: string;
  category: string;
  author: string;
}

export const categories = [
  "All",
  "AI/ML",
  "Coding",
  "Data Analysis",
  "Productivity",
] as const;

export type Category = (typeof categories)[number];

export const skills: Skill[] = [
  {
    id: "1",
    name: "Model Finetuner",
    description: "Guides you through dataset preparation, hyperparameter selection, and training loops for custom model finetuning.",
    category: "AI/ML",
    author: "Thinking Machines",
  },
  {
    id: "2",
    name: "Prompt Engineer",
    description: "Iteratively refines prompts for optimal model output with A/B testing and performance metrics.",
    category: "AI/ML",
    author: "Anthropic Labs",
  },
  {
    id: "3",
    name: "Data Curator",
    description: "Cleans, validates, and structures training datasets with automatic quality scoring and deduplication.",
    category: "Data Analysis",
    author: "Thinking Machines",
  },
  {
    id: "4",
    name: "Eval Builder",
    description: "Creates custom evaluation frameworks to measure model performance against your specific use cases.",
    category: "AI/ML",
    author: "Scale AI",
  },
  {
    id: "5",
    name: "Context Optimizer",
    description: "Compresses and prioritizes context windows for maximum relevance and token efficiency.",
    category: "Productivity",
    author: "Cohere",
  },
  {
    id: "6",
    name: "RAG Architect",
    description: "Designs retrieval-augmented generation pipelines with vector store integration and chunking strategies.",
    category: "AI/ML",
    author: "Pinecone",
  },
  {
    id: "7",
    name: "Code Interpreter",
    description: "Executes Python code in a sandboxed environment with visualization and data analysis capabilities.",
    category: "Coding",
    author: "OpenAI",
  },
  {
    id: "8",
    name: "Agent Orchestrator",
    description: "Coordinates multi-agent workflows with task delegation, state management, and error recovery.",
    category: "AI/ML",
    author: "LangChain",
  },
  {
    id: "9",
    name: "Embedding Generator",
    description: "Creates semantic embeddings for text, images, and multimodal content with similarity search.",
    category: "Data Analysis",
    author: "Thinking Machines",
  },
  {
    id: "10",
    name: "Tool Caller",
    description: "Dynamically selects and invokes external APIs and functions based on natural language intent.",
    category: "Coding",
    author: "Anthropic Labs",
  },
  {
    id: "11",
    name: "Memory Manager",
    description: "Implements long-term memory with semantic retrieval for persistent conversational context.",
    category: "AI/ML",
    author: "Mem0",
  },
  {
    id: "12",
    name: "Safety Guardrails",
    description: "Monitors outputs for harmful content, bias, and policy violations with configurable thresholds.",
    category: "AI/ML",
    author: "Thinking Machines",
  },
];
