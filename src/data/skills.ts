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
    name: "Expertise",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Data Science",
      "Natural Language Processing",
      "Computer Vision",
      "GenAI",
      "Retrieval-Augmented Generation",
      "Ultralytics YOLOv8",
    ],
  },
  {
    name: "Tools & Libraries",
    skills: [
      "PyTorch",
      "Transformers",
      "ONNX",
      "TFLite",
      "FastAPI",
      "Cohere",
      "Qdrant",
      "LangChain",
      "tflite_flutter",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Streamlit",
      "Plotly",
      "BeautifulSoup",
    ],
  },
  {
    name: "Databases",
    skills: ["SQL", "DuckDB", "Isar (NoSQL)", "Riverpod"],
  },
  {
    name: "Front-end",
    skills: ["TypeScript", "React", "Next.js", "Tailwind", "Vite", "Dart", "HTML", "CSS"],
  },
];
