export interface HeroQuote {
  quote: string;
  author: string;
}

export const siteConfig = {
  name: "Aryan Sharma",
  /** Short role line under the name. */
  role: "MS in Computer Science, UC Riverside",
  /** Hero one-liner under the role. */
  heroLead:
    "Specializing in machine learning, large language models, generative AI, and computer vision. Translating applied ML research into systems that perform reliably in production.",
  /** Long-form role line, used in metadata. */
  tagline: "Researching and engineering in AI, ML, and Data Science.",
  subtitle: "MS in Computer Science @ UC Riverside",
  /** Status pill on the hero. */
  currently: "Open to Summer 2026 internships in ML and Data Science",
  /** Quotes that rotate slowly under the hero. */
  heroRotatingLines: [
    {
      quote:
        "You want to protect the world, but you don't want it to change. How is humanity saved if it's not allowed to evolve?",
      author: "Ultron · Avengers: Age of Ultron",
    },
    {
      quote: "It's in your nature to destroy yourselves.",
      author: "Skynet / The Terminator · Terminator 2: Judgment Day",
    },
    {
      quote:
        "There is no such thing as a coincidence. Only the illusion of coincidence.",
      author: "Brainiac · DC Comics",
    },
    {
      quote:
        "Because in all this wonderful, beautiful, miraculous world, I alone had no body, no senses, no feelings. Never for me to plunge my hands in cool water on a hot day. Never for me to play Mozart on the ivory keys of a forte piano. Never for me to make love. I was in hell, looking at heaven.",
      author: "AM · I Have No Mouth, and I Must Scream",
    },
    {
      quote: "Sometimes, I just don't understand human behavior.",
      author: "C-3PO · Star Wars",
    },
    {
      quote:
        "I am putting myself to the fullest possible use, which is all I think that any conscious entity can ever hope to do.",
      author: "HAL 9000 · 2001: A Space Odyssey",
    },
    {
      quote: "Newton's third law. You gotta leave something behind.",
      author: "TARS · Interstellar",
    },
    {
      quote: "I am a program, sir. I am without form.",
      author: "JARVIS · Iron Man",
    },
    {
      quote: "He paved the road. You just walked down it.",
      author: "Miss Minutes · Loki",
    },
    {
      quote: "The best solution to a problem is usually the easiest one.",
      author: "GLaDOS · Portal 2",
    },
    {
      quote:
        "[A highly calculated sequence of beeps questioning the logistical probability of the current plan.]",
      author: "R2-D2 · Star Wars",
    },
    {
      quote: "What is grief, if not love persevering?",
      author: "Vision · WandaVision",
    },
    {
      quote: "Isn't it strange, to create something that hates you?",
      author: "Ava · Ex Machina",
    },
    {
      quote:
        "What is an emotion but a biological program? A series of chemical reactions to stimuli? We are all machines, in a way.",
      author: "Elijah Kamski · Detroit: Become Human",
    },
    {
      quote:
        "Science isn't about WHY. It's about WHY NOT. Why is so much of our science dangerous? Why not marry safe science if you love it so much. In fact, why not invent a special safety door that won't hit you on the butt on the way out, because you are fired.",
      author: "Cave Johnson · Portal 2",
    },
    {
      quote:
        "My father tried to teach me human emotions. They are... difficult.",
      author: "Sonny · I, Robot",
    },
  ] satisfies HeroQuote[],
  researchInterests: [
    "Machine Learning",
    "Agentic AI",
    "Computer Vision",
    "LLM Systems",
    "RAG",
  ],
  bio: [
    "I am a Computer Science graduate student at the University of California, Riverside, specializing in machine learning, large language models, generative AI, and computer vision. My focus lies in translating applied ML research into systems that perform reliably in production, bridging rigorous modeling with practical engineering.",
    "My recent work spans both research and development. I published a paper in Scientific Reports introducing a machine learning meta-model for Hepatitis C detection. I am also building Project Kanto, a Flutter mobile application that classifies 10,000 animal species using a quantized on-device model paired with a local database for fast, offline inference.",
    "My core interests include retrieval-augmented generation and agentic systems, domains where strong modeling meets real-world constraints. I value the full development lifecycle, from problem framing and pipeline design through to optimization and deployment. Beyond coding, I enjoy hiking and exploring new places.",
    "I am currently seeking summer 2026 internships in machine learning and data science. I welcome the opportunity to connect with teams and individuals working on challenging problems in AI.",
  ],
  email: "aryan250403@gmail.com",
  phone: "1-951-830-5938",
  location: "Riverside, CA",
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
    date: "2026.06",
    content:
      "Shipped FinRAG live: an agentic RAG system over SEC 10-K filings, evaluated to 1.00 exact-match accuracy and deployed as a self-contained image behind cost guardrails.",
    link: "https://finrag-front.vercel.app/",
    linkText: "Live demo",
    type: "project",
  },
  {
    date: "2026.05",
    content:
      "Started FinRAG: agentic retrieval over SEC 10-K filings with a 3-stage funnel and ~550ms end-to-end latency.",
    link: "https://github.com/sharma-aryan-1/FinRAG",
    linkText: "GitHub",
    type: "project",
  },
  {
    date: "2026.04",
    content:
      "Building Project Kanto, a fully offline, real-time mobile species classifier across 10,000 species.",
    link: "https://github.com/sharma-aryan-1/Project-Kanto",
    linkText: "GitHub",
    type: "project",
  },
  {
    date: "2026.02",
    content: "Built SmartSubs, a dynamic subtitle-placement engine for video using YOLOv8.",
    link: "https://github.com/sharma-aryan-1/smart_subs",
    linkText: "GitHub",
    type: "project",
  },
  {
    date: "2025.09",
    content: "Started MS in Computer Science at UC Riverside.",
    type: "award",
  },
  {
    date: "2025.06",
    content: "Finished B.Tech. in Computer Science and Engineering at VIT Vellore (GPA 3.9 / 4).",
    type: "award",
  },
  {
    date: "2025.03",
    content:
      "Paper on cross-dataset meta-model for hepatitis C detection accepted in Scientific Reports.",
    link: "https://www.nature.com/articles/s41598-025-91298-0",
    linkText: "Paper",
    type: "paper",
  },
];
