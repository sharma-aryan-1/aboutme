export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  category: "ML / Systems" | "Computer Vision" | "RAG" | "Research";
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
  image?: string;
  featured: boolean;
  date: string;
  status?: "Active" | "Shipped" | "Published";
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "finrag",
    title: "FinRAG: Agentic RAG over SEC 10-K filings",
    shortDescription:
      "3-stage retrieval funnel (BM25 + Cohere embed-v3 + Cohere Rerank v3) over ~4,000 financial-document chunks, ~550 ms end-to-end.",
    longDescription:
      "An agentic retrieval system over SEC 10-K filings. Text chunks live in Qdrant for semantic search; canonicalized GAAP line items live in DuckDB sourced from SEC's XBRL Company Facts API for SQL-queryable cross-company analysis. A FastAPI backend serves Pydantic-validated requests with payload-filterable retrieval; a Next.js + TypeScript split-pane UI renders narrative passages and HTML financial tables with click-through to the original filings on SEC.gov.",
    tags: ["RAG", "Retrieval", "Evaluation", "Financial NLP"],
    category: "RAG",
    techStack: [
      "Python",
      "TypeScript",
      "Cohere",
      "Qdrant",
      "DuckDB",
      "FastAPI",
      "Next.js",
      "Tailwind",
    ],
    githubUrl: "https://github.com/sharma-aryan-1/FinRAG",
    status: "Active",
    featured: true,
    date: "May 2026 to Present",
    highlights: [
      "3-stage retrieval funnel (BM25 + Cohere embed-v3 fused via RRF + Cohere Rerank v3 cross-encoder) over ~4,000 chunks; ~550 ms end-to-end.",
      "Modal-split data architecture: Qdrant for semantic chunks, DuckDB for canonicalized GAAP line items from SEC's XBRL Company Facts API.",
      "Full-stack interface: payload-filterable retrieval (ticker, fiscal_year, chunk_type) behind FastAPI; live citation viewer in the UI with click-through to SEC.gov.",
      "Eval-first discipline: CI-ready 8-case smoke harness with per-stage score-floor calibration (cosine, RRF, rerank scales) and persisted JSON results for regression diffing.",
    ],
  },
  {
    slug: "project-kanto",
    title: "Project Kanto: Real-life Pokédex",
    shortDescription:
      "Offline, real-time mobile species classifier across 10,000 species using a YOLOv8n model fine-tuned on iNaturalist 2021.",
    longDescription:
      "A fully offline mobile species classifier built around a YOLOv8n model fine-tuned on iNaturalist 2021 Mini and exported to INT8/float TFLite for on-device inference. Top-1 accuracy is 38% and top-5 is 68% across 10,000 species. The pipeline runs entirely on a background Dart isolate to keep the UI at 60 fps.",
    tags: ["Computer Vision", "Mobile", "On-device ML", "YOLOv8"],
    category: "Computer Vision",
    techStack: [
      "Dart",
      "Flutter",
      "Riverpod",
      "Isar",
      "tflite_flutter",
      "Python",
      "PyTorch",
      "YOLOv8",
      "TFLite",
      "ONNX",
    ],
    githubUrl: "https://github.com/sharma-aryan-1/Project-Kanto",
    status: "Active",
    featured: true,
    date: "Apr 2026 to Present",
    highlights: [
      "Cut per-frame ML latency 10× (≈2.0 s to ≈150 ms) on a mid-range device by rearchitecting the pipeline and switching to zero-copy TransferableTypedData across Dart isolate boundaries.",
      "Diagnosed a silent YOLOv8 preprocessing bug (normalized coords parsed as pixel-space) using a live debug overlay; predictions had collapsed to a single class.",
      "Replaced naive vote-based temporal smoothing with logit-space probability averaging over a rolling 12-frame buffer to exploit the classifier's high top-5 / unstable top-1 distribution.",
      "End-to-end mobile inference pipeline in Dart (YUV→RGB, sensor-rotation correction, bilinear crop-resize, invoke, softmax smoothing, top-3 HUD) running on a background isolate.",
      "Authored the Python training pipeline and trained the production model on an A100 (50 epochs, batch 384, imgsz 224).",
    ],
  },
  {
    slug: "smartsubs",
    title: "SmartSubs: Context-Aware Subtitle Engine",
    shortDescription:
      "Automated video pipeline that places subtitles on a 6-zone spatial grid to avoid occluding faces and critical action.",
    longDescription:
      "An automated video pipeline that computes optimal subtitle placement frame-by-frame using YOLOv8 detections and a strict IoU veto. Outputs frame-accurate .ass subtitle files from standard .srt input, with a 20-pixel safety margin around detected subjects.",
    tags: ["Computer Vision", "YOLOv8", "Video"],
    category: "Computer Vision",
    techStack: ["Python", "OpenCV", "YOLOv8", "PySceneDetect"],
    githubUrl: "https://github.com/sharma-aryan-1/smart_subs",
    status: "Shipped",
    featured: true,
    date: "Feb 2026 to Present",
    highlights: [
      "Dynamically calculates subtitle placement across a 6-zone spatial grid to avoid occluding faces and critical action.",
      "YOLOv8 object detection with a strict <15% IoU veto threshold builds dynamic cost heatmaps across 1080p frames.",
      "Temporal aggregation samples every 5th frame, an 80% processing-time reduction, while enforcing subtitle stability within continuous scenes.",
      "Conversion engine parses .srt and outputs .ass with frame-accurate coordinate tags and a 20-pixel safety margin around detected subjects.",
    ],
  },
  {
    slug: "hepc-detection",
    title: "Cross-dataset meta-model for hepatitis C detection",
    shortDescription:
      "Multi-dimensional pre-clustering inside a cross-dataset meta-model for non-invasive hepatitis C detection. Published in Scientific Reports (2025).",
    longDescription:
      "A cross-dataset meta-model for hepatitis C detection that uses a novel multi-dimensional pre-clustering approach to combine information across heterogeneous clinical datasets. Model explainability is verified through SHAP and LIME for both individual models and the meta-model.",
    tags: ["Deep Learning", "Healthcare", "Explainability", "Research"],
    category: "Research",
    techStack: [
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "SHAP",
      "LIME",
    ],
    paperUrl: "https://www.nature.com/articles/s41598-025-91298-0",
    status: "Published",
    featured: false,
    date: "Mar 2025",
    highlights: [
      "Novel multi-dimensional pre-clustering inside a cross-dataset meta-model for non-invasive hepatitis C detection.",
      "Model explainability verified via SHAP and LIME, at both per-model and meta-model granularity.",
      "94.82% test-set accuracy under the proposed method.",
      "Published in Scientific Reports (5-year IF 4.3, 2024).",
    ],
  },
];

export const projectCategories = [
  "All",
  "RAG",
  "Computer Vision",
  "ML / Systems",
  "Research",
] as const;
