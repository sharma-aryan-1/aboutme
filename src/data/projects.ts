export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  category: "ML/DL" | "AI Models" | "Research" | "RAG Systems";
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
  image: string;
  featured: boolean;
  date: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "hepc-detection",
    title: "A cross dataset meta-model for hepatitis C detection using multi-dimensional pre-clustering",
    shortDescription:
      "Cross data-set meta-model that detects hepatitis C non-invasively",
    longDescription:
      "Built a cross dataset meta-model for hepatitis C detection using multi-dimensional pre-clustering. The model uses a novel multi-dimensional pre-clustering approach in a cross data-set meta-model to detect hepatitis C in the patients non-invasively. We also verify the model's explainability through SHAP and LIME values.",
    tags: ["Multi-dimensional pre-clustering", "Deep Learning", "Explainability"],
    category: "Research",
    techStack: [
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "SHAP",
      "LIME",
    ],
    //githubUrl: "https://github.com/alexchen/gnn-rec",
    paperUrl: "https://doi.org/10.1038/s41598-025-91298-0",
    image: "/images/publications/hepc-detection.png",
    featured: true,
    date: "2025-03",
    highlights: [
      "Novel multi-dimensional pre-clustering approach in a cross data-set meta-model to detect hepatitis C in the patients non-invasively.",
      "Verified the model's explainability through SHAP and LIME values for both the individual models and the cross data-set meta-model.",
      "Achieved 94.82% accuracy on the test set using novel method.",
      "Accepted in Scientific Reports.",
    ],
  },
  {
    slug: "smart_subs",
    title: "Smart Subtitile Placement Engine",
    shortDescription:
      "A dynamic caption placement engine for videos with YOLOv8",
    longDescription:
        "Developed a dynamic caption placement engine for videos with YOLOv8. The engine uses YOLOv8 + saliency map to detect the objects in the video and then places the caption on empty spaces to avoid blocking the action.",
      tags: ["Deep Learning", "Computer Vision"],
    category: "ML/DL",
    techStack: ["Python", "YOLOv8"],
    githubUrl: "https://github.com/sharma-aryan-1/smart_subs",
    //liveUrl: "https://style-transfer-demo.vercel.app",
    image: "/images/projects/style-transfer.jpg",
    featured: true,
    date: "2026-02",
    highlights: [
      "Dynamically calculates optimal subtitle placement across a 6-zone spatial grid to prevent the occlusion of faces and critical action.",
      "strict <15% Intersection over Union (IoU) veto threshold to create dynamic \"cost heatmaps\" across 1080p video frames.",
      "Temporal aggregation algorithm acheived 80% reduction in processing time.",
      "Conversion engine parses standard SRT files to ASS format for seamless integration into video players.",
    ],
  },
  {
    slug: "InfoFetch-AI",
    title: "InfoFetch AI",
    shortDescription:
      "Production-Ready RAG System with FAISS Vector Database",
    longDescription:
      "Built a production-ready RAG System with FAISS Vector Database. The system uses FAISS to store the embeddings of the documents and then uses the embeddings along with clustering to search the documents.",
    tags: ["RAG", "FAISS", "Document Retrieval", "Clustering"],
    category: "RAG Systems",
    techStack: ["Python", "FAISS", "Hugging Face"],
    githubUrl: "https://github.com/sharma-aryan-1/InfoFetch-AI",
    image: "/images/projects/InfoFetch-AI.jpg",
    featured: true,
    date: "2024-09",
    highlights: [
      "Identified optimal k=10 clusters using elbow method and silhouette analysis",
      "Reduced search space by 8x through k means pre-clustering before FAISS indexing",
      "Reduced storage requirements by 35% through efficient numpy array indexing in FAISS.",
      "Achieved <500ms retrieval latency for FAISS vector search across 10K+ document embeddings.",
    ],
  },
  {
    slug: "prod-img-feat-extract",
    title: "Product Feature Extraction from E-Commerce Images",
    shortDescription:
        "OCR and VQA based Image Feature Extraction Tool for E-Commerce Products",
      longDescription:
      "Extract product features such as weight, height, and other details from product page images (e.g., Amazon) using three different pipelines: PaddleOCR with regex, MiniCPM VQA with regex, and Donut VQA with regex",
    tags: ["LLM", "Hugging Face", "AI model fine-tuning"],
    category: "AI Models",
    techStack: [
      "Python",
      "PaddleOCR",
      "MiniCPM",
      "Donut",
      "Hugging Face",
      "PyTorch",
    ],
    githubUrl: "https://github.com/sharma-aryan-1/prod-img-feat-extract",
    //liveUrl: "https://ai-reviewer.dev",
    image: "/images/projects/prod-img-feat-extract.jpg",
    featured: true,
    date: "2023-12",
    highlights: [
      "Cross-analyzed the efficacy of an MLLM pipeline to extract entity information from product page images.",
      "Trained this model on multidimensional text and image input, improving performance against a purely image input by 12%.",
      "Compared implementations against OCR, Transformer, and Regex-based implementations and observed a 10% improvement in generation time per image.",
    ],
  },
];

export const projectCategories = [
  "All",
  "ML/DL",
  "AI Models",
  "Research",
  "RAG Systems",
] as const;
