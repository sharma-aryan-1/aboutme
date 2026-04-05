export interface Education {
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number | "Present";
  details: string[];
}

export const education: Education[] = [
  {
    degree: "M.S. in Computer Science",
    institution: "University of California, Riverside",
    location: "Riverside, CA",
    startYear: 2025,
    endYear: "Present",
    details: [
      "Focus: Machine Learning & Artificial Intelligence",
      "GPA: 3.7/4.0",
      "Relevant Coursework: Advanced Machine Learning, Natural Language Processing, Advanced Computer Vision",
    ],
  },
  {
    degree: "B.Tech. in Computer Science and Engineering",
    institution: "Vellore Institute of Technology",
    location: "Vellore, Tamil Nadu, India",
    startYear: 2021,
    endYear: 2025,
    details: [
      "GPA: 3.9/4.0",
      "Relevant Coursework: Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management Systems, Computer Architecture, Compiler Design, Software Engineering, Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Robotics, and Embedded Systems.",
    ],
  },
];
