export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python (Advanced)", "C++ (Intermediate)", "Java (Intermediate)"],
  },
  {
    name: "ML / AI",
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Hugging Face",
      "YOLOv8",
      "RAG Systems",
      "FAISS",
      "LangChain",
      "OpenAI",
      "Anthropic",
      "Google",
      "Microsoft",
      "IBM",
      "Amazon",
    ],
  },
  {
    name: "Web & Backend",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "SQL",
      "Elasticsearch",
    ],
  },
  {
    name: "Tools & Infrastructure",
    skills: ["Git", "Linux", "Google Dorks", "Shodan", "ZoomEye", "Censys"],
  },
];
