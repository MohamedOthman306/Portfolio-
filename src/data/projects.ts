export interface CaseStudyData {
  overview?: string;
  businessProblem?: string;
  dataset?: {
    source?: string;
    size?: string;
    description: string;
    keyFields?: string[];
  };
  dataCleaning?: string[];
  eda?: {
    description: string;
    keyFindings?: string[];
  };
  analysis?: {
    methodology: string;
    steps?: string[];
    sqlQuerySnippet?: string;
  };
  featureEngineering?: string[];
  keyInsights?: string[];
  visualizations?: {
    description: string;
    charts?: { title: string; type: string; purpose: string }[];
  };
  recommendations?: string[];
  tools?: { name: string; role: string }[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  dataset: string;
  analysis: string;
  process: string[];
  tools: string[];
  featured?: boolean;
  color: string;
  github?: string;
  liveUrl?: string;
  caseStudy?: CaseStudyData;
}

export const PROJECTS: Project[] = [
  {
    id: "customer-churn",
    title: "Customer Churn Prediction",
    category: "Predictive Analytics",
    problem:
      "Explore customer behavior and service patterns associated with churn.",
    dataset:
      "Customer usage, billing, support, and demographic data.",
    analysis:
      "Explore retention patterns with cohort segmentation, behavior comparisons, and correlation analysis.",
    process: [
      "Prepared customer usage, billing, support, and demographic data",
      "Performed EDA to identify distributions, outliers, and missing value patterns",
      "Compared retention patterns across customer groups",
      "Explored associations between customer behavior and churn",
      "Outlined a Power BI dashboard concept for reviewing retention patterns",
    ],
    tools: ["Python", "SQL", "Power BI", "Pandas", "Scikit-learn"],
    featured: true,
    color: "#3FC1C9",
  },
  {
    id: "sales-performance",
    title: "Sales Performance Dashboard",
    category: "Business Intelligence",
    problem:
      "Explore sales performance by time, product, and region to support clearer reporting.",
    dataset:
      "Order-level sales records with product, region, and CRM context.",
    analysis:
      "Structure sales measures and dashboard views for time, product, and regional comparisons.",
    process: [
      "Prepared sales and CRM data for analysis",
      "Designed star schema data model with fact and dimension tables",
      "Created DAX measures for growth, rolling averages, and forecast comparisons",
      "Designed views for regional and product-level exploration",
      "Planned report refresh and self-service access",
    ],
    tools: ["Power BI", "SQL Server", "DAX", "Excel", "Python"],
    color: "#364F6B",
  },
  {
    id: "supply-chain",
    title: "Supply Chain Optimization",
    category: "Operations Analytics",
    problem:
      "Explore inventory availability and demand patterns across products and suppliers.",
    dataset:
      "Inventory, purchase order, supplier lead-time, shipment, and demand data.",
    analysis:
      "Review demand patterns and inventory variability using time-series and ABC-XYZ analysis.",
    process: [
      "Prepared purchase order, inventory, and shipment data",
      "Performed time-series decomposition (trend, seasonality, residual)",
      "Built an ABC-XYZ classification matrix for inventory items",
      "Calculated dynamic safety stock levels using lead time variability",
      "Outlined a Tableau dashboard for inventory monitoring",
    ],
    tools: ["Python", "SQL", "Tableau", "Excel", "Statsmodels"],
    color: "#48688c",
  },
  {
    id: "marketing-attribution",
    title: "Marketing Attribution Analysis",
    category: "Marketing Analytics",
    problem:
      "Explore how marketing channels contribute to customer journeys and conversions.",
    dataset:
      "Marketing touchpoint, advertising spend, and conversion event data.",
    analysis:
      "Compare first-touch, last-touch, and data-driven attribution approaches across customer journeys.",
    process: [
      "Prepared touchpoint data across marketing channels",
      "Mapped customer journeys from first touch to conversion",
      "Built and compared first-touch, last-touch, and data-driven attribution models",
      "Performed ROI analysis by channel using each attribution model",
      "Outlined channel performance views for budget analysis",
    ],
    tools: ["Python", "Google Analytics", "SQL", "Pandas", "Matplotlib"],
    color: "#2fa1a8",
  },
];

export const SERVICES = [
  {
    id: "data-cleaning",
    title: "Data Cleaning & Preparation",
    description:
      "Transform raw, messy datasets into analysis-ready structures. Handle missing values, outliers, duplicates, and inconsistencies.",
    icon: "filter",
    tools: ["Python", "Pandas", "SQL", "Excel"],
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    description:
      "Systematic exploration and statistical analysis to uncover hidden patterns, relationships, and anomalies in your data.",
    icon: "search",
    tools: ["Python", "SQL", "R", "Excel"],
  },
  {
    id: "sql-analysis",
    title: "SQL Analysis",
    description:
      "Design complex queries, optimize database performance, and extract meaningful insights from relational databases.",
    icon: "database",
    tools: ["PostgreSQL", "MySQL", "SQL Server", "BigQuery"],
  },
  {
    id: "dashboards",
    title: "Dashboard Development",
    description:
      "Build interactive, self-service dashboards that empower stakeholders to explore data and make informed decisions.",
    icon: "layout",
    tools: ["Power BI", "Tableau", "DAX", "Looker"],
  },
  {
    id: "powerbi-tableau",
    title: "Power BI / Tableau",
    description:
      "End-to-end BI solutions from data modeling to polished visual analytics and executive-level storytelling.",
    icon: "layers",
    tools: ["Power BI", "Tableau", "DAX", "Power Query"],
  },
  {
    id: "excel-analysis",
    title: "Excel Analysis",
    description:
      "Advanced Excel modeling with pivot tables, VLOOKUP, complex formulas, and automated reporting workflows.",
    icon: "table",
    tools: ["Excel", "VBA", "Power Query", "Power Pivot"],
  },
  {
    id: "reporting",
    title: "Business Reporting",
    description:
      "Create clear, actionable reports that translate complex data into business narratives stakeholders can act on.",
    icon: "bar-chart",
    tools: ["Power BI", "Excel", "Python", "Google Sheets"],
  },
];

export const BUSINESS_QUESTIONS = [
  {
    question: "Why are sales declining?",
    data: "Transaction logs, seasonal trends, competitor pricing, customer feedback",
    analysis:
      "Time-series decomposition, cohort analysis, price elasticity modeling",
    insight:
      "Sales declined 18% in Q3 due to a pricing mismatch in the mid-tier segment, not overall market contraction",
    action:
      "Introduce a competitive mid-tier bundle, projected to recover 72% of lost revenue",
  },
  {
    question: "Which customers create the most value?",
    data: "Customer lifetime value data, purchase history, engagement metrics",
    analysis: "RFM segmentation, CLV modeling, behavioral clustering",
    insight:
      "Top 8% of customers generate 41% of revenue, but 60% are at risk of churning within 6 months",
    action:
      "Launch a VIP retention program with personalized offers for high-value at-risk segments",
  },
  {
    question: "What drives retention?",
    data: "Churn data, product usage logs, support interactions, NPS scores",
    analysis:
      "Survival analysis, feature importance ranking, satisfaction correlation",
    insight:
      "Product adoption in the first 14 days is the strongest retention predictor — not pricing or support quality",
    action:
      "Redesign onboarding flow to ensure 3 key feature activations within the first week",
  },
  {
    question: "Where are opportunities being lost?",
    data: "Funnel data, lead scoring, conversion paths, sales cycle duration",
    analysis:
      "Funnel analysis, drop-off mapping, lead quality scoring, win/loss analysis",
    insight:
      "52% of qualified leads drop off between demo and proposal due to a 9-day response gap",
    action:
      "Automate proposal generation to reduce response time from 9 days to 2 days",
  },
  {
    question: "Which products are underperforming?",
    data: "Product sales data, margin analysis, customer reviews, market share",
    analysis:
      "BCG matrix analysis, margin contribution analysis, market basket analysis",
    insight:
      "3 products consume 25% of marketing budget but contribute only 4% of profit margin",
    action:
      "Sunset underperforming products and reallocate resources to high-margin growth items",
  },
];

// ======================================
// EXPERIENCE & EDUCATION DATA
// Edit this to add your own entries
// ======================================
export interface ExperienceItem {
  id: string;
  type: 'work' | 'education' | 'training' | 'internship';
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  tools?: string[];
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "edu-1",
    type: "education",
    title: "Bachelor’s Degree in Information Technology and Computer Science",
    organization: "Sinai University",
    location: "Kantara East, Egypt",
    startDate: "2019",
    endDate: "2024",
    description:
      "Studied computer science, information technology, programming, databases, software engineering, data science, and statistics, building a strong foundation for working with data and solving technical problems.",
    highlights: [
      "**GPA:** 3.02 / 4.00 (Very Good)",
      "Relevant Coursework: Data Analysis · Statistics · Databases · Programming · Software Engineering",
      "Graduation Project: Road Anomalies Detection System using Mobile Crowdsourcing — a Flutter/Firebase application for collecting and analyzing geotagged road images.",
    ],
  },
  {
    id: "exp-1",
    type: "work",
    title: "Customer Service Representative — TUI UK Account",
    organization: "Teleperformance",
    location: "5th Settlement, Egypt",
    startDate: "January 2026",
    endDate: "May 2026",
    description:
      "Handled UK customer requests related to holiday reservations, cancellations, refunds, and booking modifications while maintaining accuracy and service quality.",
    highlights: [
      "Resolved customer issues by understanding their needs, investigating problems, and providing appropriate solutions.",
      "Worked with performance KPIs such as **Average Handling Time (AHT)** and **First Contact Resolution (FCR)**, and understood how they reflect operational performance and customer experience.",
      "Developed strong communication, problem-solving, attention to detail, and customer-focused decision-making skills in a fast-paced environment.",
    ],
  },
  {
    id: "training-1",
    type: "training",
    title: "Professional Data Analyst",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    location: "Online",
    startDate: "July 2026",
    endDate: "Present",
    description:
      "Intensive practical training covering the end-to-end data analysis workflow, from data preparation and exploration to visualization and business insights.",
    highlights: [
      "Use Python for data cleaning, exploratory analysis, feature engineering, and feature scaling.",
      "Apply SQL for data extraction, transformation, joins, subqueries, CTEs, and analytical queries.",
      "Build dashboards and reports using Power BI, Tableau, Excel, and Power Query.",
      "Practice statistical analysis and translate data findings into clear business insights.",
    ],
  },
];
