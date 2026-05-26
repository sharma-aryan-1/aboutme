export interface Education {
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number | "Present";
  gpa?: string;
  details: string[];
}

export const education: Education[] = [
  {
    degree: "M.S. in Computer Science",
    institution: "University of California, Riverside",
    location: "Riverside, CA",
    startYear: 2025,
    endYear: "Present",
    gpa: "3.7 / 4.0",
    details: [
      "Focus: Machine Learning & Artificial Intelligence.",
      "Coursework: Advanced ML, Natural Language Processing, Advanced Computer Vision.",
    ],
  },
  {
    degree: "B.Tech. in Computer Science and Engineering",
    institution: "Vellore Institute of Technology",
    location: "Vellore, India",
    startYear: 2021,
    endYear: 2025,
    gpa: "3.9 / 4.0",
    details: [
      "Coursework: Data Structures & Algorithms, Operating Systems, DBMS, Computer Architecture, Compiler Design, AI, Machine Learning, Deep Learning, Computer Vision, NLP.",
    ],
  },
];
