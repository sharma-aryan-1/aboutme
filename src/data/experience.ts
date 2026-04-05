export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  type: "work" | "research";
}

export const experiences: Experience[] = [
  {
    role: "Cybersecurity and Data analysis Intern",
    company: "Redinent Innovations",
    location: "Bengaluru, Karnataka, India",
    startDate: "Sep 2023",
    endDate: "Dec 2023",
    description: [
      "Aggregated banner fingerprints from exposed interfaces of IOT devices using dorks, Censys, Shodan, and ZoomEye, expanded the database by over 1200+ entries, achieving 25% growth.",
      "Pinpointed 17 vertical parameters to uniquely identify login pages for specific subgroups of devices.",
      "Compiled stable attributes such as tuples through recursive analysis of login pages and reduced false matches by 25%, improving identification accuracy to 91%.",
      "Delivered a clean, usable dataset mapped to device identifiers and helped streamline downstream tasks like external attack surface monitoring, increasing the number of devices monitored by 35%.",
    ],
    type: "work",
  },
  {
    role: "3D Modeling, Animations, and Game Development Intern",
    company: "Vifr Technologies",
    location: "Vellore, Tamil Nadu, India",
    startDate: "Feb 2023",
    endDate: "May 2023",
    description: [
      "Architected and refined 25+ environmental, character, and animated assets every week, improving the assets library by 275%.",
      "Spearheaded 5-person team to deliver 10 core features, completing the project 3 weeks before schedule.",
      "Pioneered shader-based solutions in Unity to replace simulation-based methods for environmental objects; enhanced runtime efficiency by 60% and reduced draw calls by 150 per frame.",
      "Engineered pipelines integrating accessibility features within the game, resulting in a 65% surge in user engagement among children with neurodevelopmental disorders during initial user testing."
    ],
    type: "work",
  },
];
