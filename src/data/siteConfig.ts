export interface HeroQuote {
  quote: string;
  author: string;
}

export const siteConfig = {
  name: "Aryan Sharma",
  tagline: "Researching and engineering in AI, ML, and DS",
  /** Quotes that rotate slowly under the tagline (hero). */
  heroRotatingLines: [
    {
      quote:
        "The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves.",
      author: "Ada Lovelace",
    },
    {
      quote:
        "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
      author: "Alan Turing",
    },
    {
      quote:
        "The most damaging phrase in the language is: we have always done it this way.",
      author: "Grace Hopper",
    },
    {
      quote: "What I cannot create, I do not understand.",
      author: "Richard Feynman",
    },
    {
      quote: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
    },
    {
      quote: "It is the job of artists to give the audience what they need.",
      author: "Alan Moore",
    },
    {
      quote:
        "The science of looking inside the AI models, I am convinced that this ultimately holds the key to making the model safe and controllable, because it's the only ground truth we have.",
      author: "Dario Amodei",
    },
  ] satisfies HeroQuote[],
  /** One serif lead sentence above the bio paragraphs. */
  aboutLead:
    "The best ML work, to me, lives where rigorous methods meet code you trust in production.",
  subtitle: "MSCS @ UC Riverside",
  currently: "Looking for summer internship opportunities in AI, ML, and DS",
  researchInterests: [
    "Machine Learning",
    "Agentic AI",
    "Computer Vision",
    "LLM Systems",
  ],
  bio: [
    "I'm a Computer Science graduate student at UC Riverside, where I focus on machine learning and artificial intelligence. My research so far has been on how we can build more efficient and interpretable deep learning systems for non-invasive healthcare applications.",
    "Before UCR, I did my B. Tech. in Computer Science and Engineering at VIT Vellore. I bring a practical engineering mindset to my research. I believe the best ML work lives at the intersection of rigorous theory and clean, production-ready code.",
    "When I'm not training models or writing papers, you'll find me building projects, reading research papers, playing chess, or exploring the hiking trails around Riverside.",
  ],
  email: "aryan250403@gmail.com",
  github: "https://github.com/sharma-aryan-1",
  linkedin: "https://www.linkedin.com/in/sharmaaryan25/",
  scholar: "https://scholar.google.com/citations?user=gZ4CkwoAAAAJ&hl=en",
  resumeUrl: "/resume.pdf",
};

export interface NewsEntry {
  date: string;
  content: string;
  link?: string;
  linkText?: string;
  type: "paper" | "award" | "project" | "talk" | "general";
}

export const news: NewsEntry[] = [

  {
    date: "2026.02",
    content: "Built a dynamic caption placement engine for videos with YOLOv8",
    link: "https://github.com/sharma-aryan-1/smart_subs",
    linkText: "GitHub",
    type: "project",
  },
  {
    date: "2025.11",
    content: "Built a prototype vaccine schedule listing web app for a funded college project",
    link: "https://github.com/sharma-aryan-1/proto-getvax-v1",
    linkText: "GitHub",
    type: "project",
  },
  {
    date: "2025.09",
    content: "Started M.S. in Computer Science at UC Riverside.",
    type: "award",
  },
  {
    date: "2025.06",
    content: "Finished B. Tech. in Computer Science and Engineering at VIT Vellore.",
    type: "award",
  },  
  {
    date: "2025.03",
    content: "Paper on cross dataset meta-model for hepatitis c detection accepted in Scientific Reports.",
    link: "https://www.nature.com/articles/s41598-025-91298-0",
    linkText: "Paper",
    type: "paper",
  },
];
