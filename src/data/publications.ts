export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  paperUrl?: string;
  codeUrl?: string;
  abstract: string;
  topics: string[];
  award?: string;
}

export const topicColors: Record<string, string> = {
  "Federated Learning": "bg-blue-500/15 text-blue-400",
  "Privacy": "bg-teal-500/15 text-teal-400",
  "GNN": "bg-amber-500/15 text-amber-400",
  "RecSys": "bg-orange-500/15 text-orange-400",
  "Deep Learning": "bg-purple-500/15 text-purple-400",
  "Computer Vision": "bg-pink-500/15 text-pink-400",
  "Mobile": "bg-green-500/15 text-green-400",
  "NLP": "bg-rose-500/15 text-rose-400",
  "LLM": "bg-cyan-500/15 text-cyan-400",
  "Efficient ML": "bg-violet-500/15 text-violet-400",
};

export const publications: Publication[] = [
  {
    title:
      "A cross dataset meta-model for hepatitis C detection using multi-dimensional pre-clustering",
    authors: [
      "Aryan Sharma",
      "Tanmay Khade",
      "Prof. Shashank Mouli Satapathy",
    ],
    venue: "Scientific Reports",
    year: 2025,
    paperUrl: "https://www.nature.com/articles/s41598-025-91298-0",
    abstract:
      "We propose a cross dataset meta-model for hepatitis C detection using multi-dimensional pre-clustering. Our method achieves 94.82% accuracy on the test set.",
    topics: ["Deep Learning", "Explainability", "Healthcare"],
  },
];
