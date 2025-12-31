import { FileText } from "lucide-react";

const reads = [
  {
    tag: "Docs",
    title: "Explore our documentation.",
  },
  {
    tag: "Guides",
    title: "Covering everything you need to know in order to build AI products faster.",
  },
  {
    tag: "Sundial Academy",
    title: "Expedite team training with a one-step learning environment.",
  },
  {
    tag: "AI Assistant",
    title: "Press Ctrl+I (or Cmd+I) to chat with our AI assistant.",
  },
];

export function FeaturedReads() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Featured reads</h2>
        <a href="#" className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          <FileText className="h-4 w-4" />
          View release notes
        </a>
      </div>
      <div className="space-y-3">
        {reads.map((read) => (
          <div
            key={read.tag}
            className="cursor-pointer rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted/50"
          >
            <span className="mb-1 inline-block rounded bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
              {read.tag}
            </span>
            <p className="text-sm text-foreground">{read.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
