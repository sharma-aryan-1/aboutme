export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  month?: string;
  paperUrl?: string;
  codeUrl?: string;
  abstract: string;
  topics: string[];
  award?: string;
  meta?: string;
}

export const publications: Publication[] = [
  {
    title:
      "A cross-dataset meta-model for hepatitis C detection using multi-dimensional pre-clustering",
    authors: [
      "Aryan Sharma",
      "Tanmay Khade",
      "Shashank Mouli Satapathy",
    ],
    venue: "Scientific Reports",
    year: 2025,
    month: "Mar",
    paperUrl: "https://www.nature.com/articles/s41598-025-91298-0",
    meta: "5-year IF 4.3 (2024)",
    abstract:
      "We propose a cross-dataset meta-model for hepatitis C detection using multi-dimensional pre-clustering. The method achieves 94.82% test-set accuracy and is verified for explainability via SHAP and LIME at both per-model and meta-model granularity.",
    topics: ["Deep Learning", "Healthcare", "Explainability"],
  },
];
