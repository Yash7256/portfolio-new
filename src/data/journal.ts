export interface JournalPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  externalUrl?: string;
  source?: string;
  draft?: boolean;
}

export interface JournalArticle {
  id: string;
  author: string;
  date: string;
  title: string;
  description: string;
  category: string;
  href: string;
  image?: string;
  imageAlt?: string;
}

export const journalArticleLinks = {
  skedioDesignSystem:
    "https://www.skediodesign.in/blog/what-is-a-design-system-why-startups-need-one",
  harshitaLinkedIn:
    "https://www.linkedin.com/pulse/why-developers-need-uiux-product-designers-love-letter-upadhyay-y6nuf/",
  doYouNeedWebsite:
    "https://www.skediodesign.in/blog/custom-web-app-or-website-which-do-you-need",
} as const;

export const journalArticles: JournalArticle[] = [
  {
    id: "what-is-a-design-system-&-why-startups-need-one",
    author: "Harshita Upadhyay",
    date: "Skédio",
    title: "What Is a Design System & Why Startups Need One",
    description:
      "A design system is a shared set of tokens, components and rules that keeps a product consistent. Learn why startups need one and how to build it lean.",
    category: "Design",
    href: journalArticleLinks.skedioDesignSystem,
    image: "/designsystem.webp",
    imageAlt: "What Is a Design System & Why Startups Need One",
  },
  {
    id: "why-developers-need-ui/ux-&-product-designers:-a-love-letter",
    author: "Harshita Upadhyay",
    date: "LinkedIn",
    title: "Why Developers Need UI/UX & Product Designers: A Love Letter",
    description:
      "A thoughtful look at how developers and product designers can collaborate to build clearer, more human digital products.",
    category: "Product Design",
    href: journalArticleLinks.harshitaLinkedIn,
    image: "/lovelettertodevs.jpeg",
    imageAlt:
      "Cover artwork for Why Developers Need UI/UX & Product Designers: A Love Letter",
  },
  {
    id: "do-you-need-a-custom-web-app-or-just-a-website?",
    author: "Aman Raj",
    date: "Skédio",
    title: "Do You Need a Custom Web App or Just a Website?",
    description:
      "if people only need to read about you, you need a website. If people need to log in, manage data, or complete tasks, you need a web app. ",
    category: "Development",
    href: journalArticleLinks.doYouNeedWebsite,
    image: "/doyouneedwebsite.webp",
    imageAlt:
      "Cover artwork for Do You Need a Custom Web App or Just a Website?",
  },
];

export const homepageJournalArticles = [
  journalArticles.find((article) => article.author === "Harshita Upadhyay"),
  journalArticles.find((article) => article.author === "Aman Raj"),
].filter((article): article is JournalArticle => Boolean(article));

const journal: JournalPost[] = journalArticles.map((article) => ({
  id: article.id,
  title: article.title,
  date: article.date,
  readTime: article.author,
  category: article.category,
  excerpt: article.description,
  image: article.image,
  imageAlt: article.imageAlt,
  externalUrl: article.href,
}));

export default journal;
