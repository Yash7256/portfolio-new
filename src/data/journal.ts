export interface JournalPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  draft?: boolean;
}

const journal: JournalPost[] = [
  {
    id: "thinking-in-systems",
    title:
      "Thinking in Systems: Why Design Systems Save More Than Time",
    date: "2026-10-20",
    readTime: "6 min read",
    category: "Design",
    excerpt:
      "Design systems are not about consistency for its own sake — they are about giving a team a shared language to move faster without drifting apart.",
  },
  {
    id: "react-performance-patterns",
    title: "React Performance Patterns We Actually Use",
    date: "2026-09-14",
    readTime: "8 min read",
    category: "Engineering",
    excerpt:
      "A practical guide to the render optimisation patterns we apply in production — not theory, but the specific techniques that moved our Lighthouse scores.",
  },
  {
    id: "ai-in-product-design",
    title: "AI in Product Design: Augmentation, Not Automation",
    date: "2026-08-30",
    readTime: "5 min read",
    category: "AI",
    excerpt:
      "The most valuable use of AI in design workflows isn't generating screens — it's accelerating the parts of research and documentation that eat designer time.",
    draft: true,
  },
];

export default journal;
