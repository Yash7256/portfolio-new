export interface JournalPost {
  id: string;
  author: string;
  authorRole?: string;
  authorUrl?: string;
  title: string;
  date: string;
  datePublished?: string;
  dateModified?: string;
  readTime: string;
  category: string;
  excerpt: string;
  answer?: string;
  sections?: JournalSection[];
  serviceSlug?: string;
  image?: string;
  imageAlt?: string;
  externalUrl?: string;
  source?: string;
  draft?: boolean;
}

export interface JournalArticle {
  id: string;
  author: string;
  authorUrl?: string;
  authorRole?: string;
  date: string;
  datePublished?: string;
  dateModified?: string;
  title: string;
  description: string;
  answer?: string;
  category: string;
  href: string;
  externalUrl?: string;
  serviceSlug?: string;
  sections?: JournalSection[];
  image?: string;
  imageAlt?: string;
}

export interface JournalSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
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
    id: "website-or-web-app-for-your-business",
    author: "Aman Raj",
    authorRole: "Engineering / Product",
    authorUrl: "https://www.linkedin.com/in/yash7256/",
    date: "2026-11-07",
    datePublished: "2026-11-07",
    dateModified: "2026-11-07",
    title: "Website or Web App: Which Does Your Business Need?",
    description:
      "A practical way to decide whether your business needs an informational website, a web app, or a smaller first version before building more.",
    answer:
      "Choose a website when people mainly need to understand your business and contact you. Choose a web app when they need to log in, manage information, or complete a task. If you are unsure, start with the smallest version that tests the real need.",
    category: "Development",
    href: "/journal/website-or-web-app-for-your-business",
    serviceSlug: "web-development",
    sections: [
      {
        heading: "Start with the user’s job",
        paragraphs: [
          "The useful question is not whether a web app sounds more advanced. It is what a visitor needs to do. If they need to read about your work, compare an offer, see examples, or send an enquiry, a website may be enough.",
          "A web app becomes useful when the visitor needs a private, repeatable workflow: signing in, saving information, collaborating, checking a status, or managing records.",
        ],
        bullets: [
          "A website explains, persuades, and creates a path to contact.",
          "A web app lets people perform tasks and return to saved information.",
          "A landing page can be the right first step when demand is still untested.",
        ],
      },
      {
        heading: "What changes in the build",
        paragraphs: [
          "A website usually needs a content structure, responsive interface, forms, analytics, and a reliable deployment. A web app adds product decisions around accounts, permissions, data storage, errors, and ongoing maintenance.",
          "That extra complexity is worthwhile when it supports a real user workflow. It is unnecessary when the only goal is to publish information that could be a page on a website.",
        ],
      },
      {
        heading: "A sensible first version",
        paragraphs: [
          "When the decision is unclear, define the smallest action that would prove the idea. That might be an enquiry form, a clickable prototype, or a simple page that explains the service before building accounts and dashboards.",
          "At Anvik Labs, we discuss the users, budget, and deadline first, then share scope and a written price range before building. A simpler site is often the better starting point.",
        ],
      },
    ],
    image: "/doyouneedwebsite.webp",
    imageAlt: "Editorial artwork for choosing between a website and a web app",
  },
  {
    id: "what-website-maintenance-includes",
    author: "Aman Raj",
    authorRole: "Engineering / Product",
    authorUrl: "https://www.linkedin.com/in/yash7256/",
    date: "2026-11-07",
    datePublished: "2026-11-07",
    dateModified: "2026-11-07",
    title: "What Does Website Maintenance Include?",
    description:
      "Website maintenance is the ongoing work that keeps a live site useful, secure, current, and working as its content and dependencies change.",
    answer:
      "Website maintenance can include dependency updates, bug fixes, content changes, hosting checks, performance work, backups, and small improvements. The exact scope should be agreed in writing because a marketing site, web app, and online store need different levels of care.",
    category: "Engineering",
    href: "/journal/what-website-maintenance-includes",
    serviceSlug: "website-maintenance",
    sections: [
      {
        heading: "Maintenance is more than changing text",
        paragraphs: [
          "A live website depends on code, hosting, domains, integrations, content, and third-party services. Any of those can change after launch. Maintenance is the regular work of checking and updating the parts that keep the experience reliable.",
          "For a small business site, that may mean content updates and fixes. For a web app, it may also include dependency upgrades, monitoring, data issues, and support for users who are completing tasks.",
        ],
      },
      {
        heading: "A practical maintenance scope",
        paragraphs: [
          "A useful maintenance agreement names what will be reviewed, how requests are prioritised, and what is outside the regular scope. That gives the owner a clear expectation instead of an open-ended promise of support.",
        ],
        bullets: [
          "Content updates and small layout changes",
          "Bug investigation and fixes",
          "Dependency and framework updates",
          "Hosting, domain, and deployment checks",
          "Performance and accessibility reviews",
          "New features quoted separately when they change the product scope",
        ],
      },
      {
        heading: "How to choose the right level",
        paragraphs: [
          "Start with how often the site changes and what happens if it stops working. A brochure site with occasional updates needs a different plan from a product with logins, payments, or customer data.",
          "The first step should be a review of how the site is built, where it is hosted, and what needs attention. From there, the support rhythm and price can be defined honestly.",
        ],
      },
    ],
    image: "/designsystem.webp",
    imageAlt: "Editorial artwork for website maintenance",
  },
  {
    id: "what-product-design-includes",
    author: "Harshita Upadhyay",
    authorRole: "Design / Product & UI",
    authorUrl: "https://www.linkedin.com/in/velvetdrafts/",
    date: "2026-11-07",
    datePublished: "2026-11-07",
    dateModified: "2026-11-07",
    title: "What Does Product Design Include?",
    description:
      "Product design connects user needs, flows, interface decisions, and a buildable system so a digital product is easier to understand and use.",
    answer:
      "Product design usually includes understanding users and goals, mapping flows, creating wireframes, designing interfaces, testing important decisions, and preparing an organised handoff. The exact work depends on the product stage and the questions that still need answers.",
    category: "Product Design",
    href: "/journal/what-product-design-includes",
    serviceSlug: "product-design",
    sections: [
      {
        heading: "The work starts before polished screens",
        paragraphs: [
          "A polished interface cannot fix an unclear product decision. Product design starts by understanding who the product is for, what they are trying to do, and what the business needs to learn before committing to a build.",
          "That may involve reviewing similar products, clarifying the page structure, mapping user flows, or making a clickable prototype before visual details are final.",
        ],
      },
      {
        heading: "The usual parts of the process",
        paragraphs: [
          "A project can move from a rough flow to wireframes, screen designs, and a small design system. Each stage should answer a different question and make the next decision easier.",
        ],
        bullets: [
          "User and product context",
          "Information architecture and user flows",
          "Wireframes and clickable prototypes",
          "Interface design in Figma",
          "Reusable colour, type, and component rules",
          "Feedback, refinement, and developer handoff",
        ],
      },
      {
        heading: "Why design and development should meet early",
        paragraphs: [
          "A design can look finished and still be difficult to build, maintain, or use with real data. Working closely with development exposes those constraints early and keeps the design system connected to the product that will ship.",
          "At Anvik Labs, the designer and developer work on the same project. That makes it possible to discuss tradeoffs before they become expensive changes.",
        ],
      },
    ],
    image: "/designsystem.webp",
    imageAlt: "Editorial artwork for product design",
  },
  {
    id: "what-is-a-design-system-&-why-startups-need-one",
    author: "Harshita Upadhyay",
    date: "Skédio",
    title: "What Is a Design System & Why Startups Need One",
    description:
      "A design system is a shared set of tokens, components and rules that keeps a product consistent. Learn why startups need one and how to build it lean.",
    category: "Design",
    href: journalArticleLinks.skedioDesignSystem,
    externalUrl: journalArticleLinks.skedioDesignSystem,
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
    externalUrl: journalArticleLinks.harshitaLinkedIn,
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
    externalUrl: journalArticleLinks.doYouNeedWebsite,
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
  author: article.author,
  authorRole: article.authorRole,
  authorUrl: article.authorUrl,
  title: article.title,
  date: article.date,
  datePublished: article.datePublished,
  dateModified: article.dateModified,
  readTime: article.author,
  category: article.category,
  excerpt: article.description,
  answer: article.answer,
  sections: article.sections,
  serviceSlug: article.serviceSlug,
  image: article.image,
  imageAlt: article.imageAlt,
  externalUrl: article.externalUrl,
  source: article.externalUrl ? undefined : article.author,
}));

export default journal;
