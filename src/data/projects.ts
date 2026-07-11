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
      "A deployed agentic RAG system over SEC 10-K filings: a LangGraph agent over a 3-stage retrieval funnel, evaluated to 1.00 exact-match accuracy and shipped live behind cost guardrails.",
    longDescription:
      "An agentic retrieval system over SEC 10-K filings (Apple, Tesla, JPMorgan). Narrative chunks live in Qdrant for semantic search; canonicalized GAAP line items live in DuckDB, sourced from SEC's XBRL Company Facts API, so cross-company financial questions become a single SQL query instead of multi-step LLM arithmetic. A LangGraph agent plans and routes each question, runs Claude native tool use over SQL, calculator, and citation tools, and streams its reasoning trace to a Next.js split-pane UI with click-through citations to the original filings on SEC.gov. A tier-stratified evaluation harness (deterministic checks plus an LLM-judge) scores it across four difficulty tiers, and the same agent also runs on a local Llama 3.2 3B edge variant. The whole demo deploys as one self-contained image with the vector store, financial facts, and lexical index baked in, behind a per-IP rate limit and a global daily-spend cap.",
    tags: ["RAG", "LLM Agents", "Retrieval", "Evaluation", "Financial NLP"],
    category: "RAG",
    techStack: [
      "Python",
      "TypeScript",
      "LangGraph",
      "Anthropic Claude",
      "Cohere",
      "Qdrant",
      "DuckDB",
      "FastAPI",
      "Next.js",
      "Docker",
      "Ollama",
    ],
    githubUrl: "https://github.com/sharma-aryan-1/FinRAG",
    liveUrl: "https://finrag-front.vercel.app/",
    status: "Shipped",
    featured: true,
    date: "May 2026 to Present",
    highlights: [
      "LangGraph agent (plan, route, tool-loop, synthesize) with Claude native tool use over SQL, calculator, and citation tools, built without LangChain.",
      "Evaluated with a tier-stratified harness (30 questions, 4 difficulty tiers, deterministic checks plus an LLM-judge): 1.00 exact-match accuracy, 1.00 citation validity, ~0.92 faithfulness.",
      "Closed an eval-to-improve loop: the judge caught ungrounded flourish in correct answers, and a targeted prompt rule lifted multihop faithfulness from 0.88 to 0.97 with accuracy unchanged.",
      "Edge finding: on a local Llama 3.2 3B, the agentic tool-loop lifts factual accuracy from 0.00 to 0.80, so the architecture is what makes a small model viable, not a tax on it.",
      "3-stage retrieval funnel (BM25 + Cohere embed-v3 fused via RRF + Cohere Rerank v3 cross-encoder) over ~4,000 chunks at ~550 ms, with modal-split data across Qdrant and DuckDB.",
      "Shipped live as a self-contained 772 MB Docker image (embedded Qdrant + DuckDB + BM25, no external cluster) behind cost guardrails; host-portable across Hugging Face Spaces, Render, and Cloud Run.",
    ],
  },
  {
    slug: "streamsearch",
    title: "StreamSearch: Real-Time Semantic Search over a Streaming Corpus",
    shortDescription:
      "A real-time semantic search platform streaming documents through Kafka and Spark Structured Streaming into Cassandra and Qdrant, served as hybrid BM25 + dense retrieval behind a live demo.",
    longDescription:
      "StreamSearch continuously indexes a document stream for semantic search. Records are produced to a Kafka (Redpanda) topic and consumed by a Spark Structured Streaming job that embeds each micro-batch once (all-MiniLM-L6-v2, 384-dim), writing metadata to Cassandra and vectors to Qdrant so the searchable index grows as documents arrive. Search fuses lexical BM25 and dense vector retrieval with Reciprocal Rank Fusion (k=60) over a shared Python core reused by both the streaming consumer and the query path. It ships as two tiers: a self-contained live demo (baked vector index, never empty, deployed on Hugging Face Spaces) and a proof tier that runs the real Kafka to Spark to Cassandra and Qdrant pipeline via Docker Compose, captured on video. Delivery is at-least-once with checkpointed offsets and idempotent, id-keyed writes so replays are safe, and the exact Spark-Kafka connector is pre-warmed into the Ivy cache for reproducible container builds.",
    tags: [
      "Streaming",
      "Data Engineering",
      "Retrieval",
      "Kafka / Spark",
      "Vector Search",
    ],
    category: "ML / Systems",
    techStack: [
      "Python",
      "Apache Spark",
      "Apache Kafka",
      "Redpanda",
      "Cassandra",
      "Qdrant",
      "sentence-transformers",
      "FastAPI",
      "Streamlit",
      "Docker",
    ],
    githubUrl: "https://github.com/sharma-aryan-1/streamsearch",
    liveUrl: "https://huggingface.co/spaces/sharmaaryan/streamsearch",
    status: "Shipped",
    featured: true,
    date: "Jul 2026",
    highlights: [
      "Streaming ingestion via Spark Structured Streaming over a Kafka (Redpanda) topic, embedding each micro-batch once in a foreachBatch handler (not a per-row UDF) and upserting 384-dim MiniLM vectors to Qdrant with metadata to Cassandra.",
      "Hybrid retrieval fusing BM25 and dense vector search with Reciprocal Rank Fusion (k=60), surfacing documents that either stage alone would miss.",
      "At-least-once delivery with checkpointed Kafka offsets and idempotent, id-keyed Cassandra/Qdrant writes, so replays and restarts never duplicate or corrupt the index.",
      "Two-tier design: a self-contained live demo (baked index, always-on on Hugging Face Spaces) plus a proof tier running the full Kafka to Spark to Cassandra to Qdrant stack via Docker Compose.",
      "Reproducible containerized build: matched the exact Spark-Kafka connector version into a pre-warmed Ivy cache with pinned dependencies, and a shared embedding/search core reused by both the streaming consumer and the query path.",
      "Reproducible 3,000-document arXiv corpus, a 17-test suite, and a recorded end-to-end pipeline walkthrough.",
    ],
  },
  {
    slug: "clinicalflow",
    title: "ClinicalFlow: FHIR EHR Pipeline & Cardiovascular Cohort Analysis",
    shortDescription:
      "A reproducible HL7 FHIR R4 to DuckDB pipeline over 3,450 synthetic patients with a 28-check data-governance layer and a cardiovascular cohort analysis, shipped as a live Streamlit dashboard.",
    longDescription:
      "ClinicalFlow ingests synthetic electronic health records in HL7 FHIR R4 format, normalizes six resource types (Patient, Encounter, Condition, Observation, MedicationRequest, Procedure) into a SQL-queryable DuckDB store, layers a data-governance / quality-assurance suite on top, and then analyzes a cardiovascular cohort for population-health insight. The ingester handles the awkward parts of FHIR head-on: urn:uuid / fullUrl reference resolution, polymorphic value[x], splitting multi-component observations (e.g. blood pressure) into separate rows, coding-system tracking across LOINC/SNOMED/RxNorm, and mixed date normalization. A configurable 1% error-budget contract drives 28 automated checks (referential integrity, code-system validation, value-range, completeness, temporal sanity, and duplicates), written to both a machine-readable qa_results table and a compliance-style Markdown report. The cohort layer first discovers the condition codes actually present in the data, then defines the cardiovascular cohort and reports prevalence, a comorbidity co-occurrence matrix, medication-class patterns, and a BP-at-or-above-140/90 population-health flag. Everything is reproducible from raw bundles to reports with one command (fixed Synthea seed, pinned dependencies), covered by pytest, and surfaced through a seven-section Streamlit dashboard deployed live on Streamlit Community Cloud, backed by a slim committed database so the demo runs without the 160 MB full store. Synthetic data only, no PHI.",
    tags: [
      "Healthcare",
      "FHIR / HL7",
      "Data Engineering",
      "Data Quality",
      "Population Health",
    ],
    category: "ML / Systems",
    techStack: [
      "Python",
      "DuckDB",
      "pandas",
      "Streamlit",
      "Plotly",
      "Synthea",
      "pytest",
      "SQL",
    ],
    githubUrl: "https://github.com/sharma-aryan-1/clinicalflow",
    liveUrl: "https://clinicalflow-fhir-showcase.streamlit.app/",
    status: "Shipped",
    featured: true,
    date: "Jul 2026",
    highlights: [
      "Ingested 3,450 synthetic patients (~3.8M rows, 2.7M observations) from HL7 FHIR R4 bundles into six normalized DuckDB tables, resolving urn:uuid references, polymorphic value[x], and multi-component observations.",
      "Built a data-governance layer of 28 automated checks under a configurable 1% error-budget contract (referential integrity, LOINC/SNOMED/RxNorm validation, value-range, missingness, temporal, duplicates) with machine- and human-readable reports.",
      "The QA contract caught two real ingestion defects: ~33% of medication requests carried no inline RxNorm code (medicationReference) and ~24% of observations were survey panels with dropped valueCodeableConcept components. Both were fixed, taking the suite to 28/28 passing.",
      "Defined a cardiovascular cohort (1,215 of 3,450 patients, 35.2%) and analyzed prevalence, a comorbidity co-occurrence matrix, and treatment patterns (90.6% on antihypertensives, 60.2% on statins).",
      "Shipped a seven-section interactive Streamlit dashboard deployed live on Streamlit Community Cloud, backed by a slim committed DuckDB so the demo runs without the 160 MB full store.",
      "Fully reproducible: fixed Synthea seed, pinned dependencies, a one-command pipeline (ingest to QA to cohort to reports), and a pytest suite over a hand-checked FHIR fixture; synthetic data only, no PHI.",
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
