export interface Award {
  title: string;
  issuer: string;
  year: number;
  description?: string;
}

export const awards: Award[] = [
  {
    title: "Chess",
    issuer: "NeurIPS 2025",
    year: 2025,
    description:
      "Recognized for novel contributions to adaptive differential privacy in federated learning.",
  },
  {
    title: "Dean's Fellowship",
    issuer: "UC Riverside",
    year: 2024,
    description:
      "Merit-based fellowship awarded to top incoming graduate students.",
  },
  {
    title: "Outstanding Senior Thesis Award",
    issuer: "State University CS Department",
    year: 2022,
    description:
      "Awarded for undergraduate thesis on sentiment analysis using transformer models.",
  },
  {
    title: "1st Place — HackML 2023",
    issuer: "MLH / Google",
    year: 2023,
    description:
      "Won first place for building an accessible ML pipeline builder with drag-and-drop interface.",
  },
];
