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
