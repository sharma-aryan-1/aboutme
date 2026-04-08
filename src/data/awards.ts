export interface Award {
  title: string;
  issuer: string;
  year: number;
  description?: string;
}

export const awards: Award[] = [
  {
    title: "District-Level Gold Medalist, International Mathematics Olympiad",
    issuer: "Science Olympiad Foundation",
    year: 2015,
    description:
      "Gold medal at the district level in SOF’s International Mathematics Olympiad.",
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
    issuer: "VIT Vellore, CSE",
    year: 2022,
    description:
      "Undergraduate thesis on sentiment analysis using transformer models.",
  },
  {
    title: "1st Place — HackML 2023",
    issuer: "MLH / Google",
    year: 2023,
    description:
      "First place for an accessible ML pipeline builder with a drag-and-drop interface.",
  },
];
