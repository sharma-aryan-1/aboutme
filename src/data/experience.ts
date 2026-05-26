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
    role: "Cybersecurity & Data Analysis Intern",
    company: "Redinent Innovations",
    location: "Bengaluru, India",
    startDate: "Sep 2023",
    endDate: "Dec 2023",
    description: [
      "Aggregated banner fingerprints from exposed IoT-device interfaces using dorks, Censys, Shodan, and ZoomEye, growing the database by 1,200+ entries (+25%).",
      "Identified 17 vertical parameters that uniquely characterize login pages for specific subgroups of devices.",
      "Compiled stable identifying attributes through recursive login-page analysis; reduced false matches by 25% and lifted identification accuracy to 91%.",
      "Delivered a clean, identifier-mapped dataset that streamlined downstream external-attack-surface monitoring, growing the number of devices monitored by 35%.",
    ],
    type: "work",
  },
  {
    role: "3D Modelling, Animation & Game Dev Intern",
    company: "Vifr Technologies",
    location: "Vellore, India",
    startDate: "Feb 2023",
    endDate: "May 2023",
    description: [
      "Architected and refined 25+ environmental, character, and animated assets per week, growing the asset library by 275%.",
      "Led a 5-person team to deliver 10 core features and shipped the project 3 weeks ahead of schedule.",
      "Replaced simulation-based environmental effects with shader-based solutions in Unity: +60% runtime efficiency, 150 fewer draw calls per frame.",
      "Built accessibility-aware game pipelines; user testing with children with neurodevelopmental disorders showed a 65% engagement lift.",
    ],
    type: "work",
  },
];
