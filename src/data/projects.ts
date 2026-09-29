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
  insights: string[];
  recommendation: string;
  results: string;
  tools: string[];
  metrics: { label: string; value: string; change: string };
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
      "A telecom company was losing 26% of customers annually, costing $4.2M in revenue. Leadership needed to identify at-risk customers before they churned.",
    dataset:
      "18 months of customer data: 45K records with usage patterns, billing history, support tickets, and demographic data.",
    analysis:
      "Built a multi-variable analysis combining RFM scoring with behavioral patterns. Identified 7 key churn indicators through correlation analysis and cohort segmentation.",
    process: [
      "Cleaned and merged 5 data sources (CRM, billing, support tickets, usage logs, demographics)",
      "Performed EDA to identify distributions, outliers, and missing value patterns",
      "Built RFM scoring model and behavioral cohort segmentation",
      "Applied correlation analysis to isolate top churn predictors",
      "Designed Power BI early-warning dashboard with automated flagging",
    ],
    insights: [
      "Customers with 3+ support tickets in 30 days had 4.8x higher churn probability",
      "Price sensitivity was the #1 factor only for customers in their first 6 months",
      "Usage decline of >40% over 2 months predicted churn with 89% accuracy",
    ],
    recommendation:
      "Implemented an early-warning dashboard that flags at-risk customers 45 days before likely churn, enabling targeted retention campaigns.",
    results:
      "Reduced annual churn rate from 26% to 17%, recovering an estimated $1.4M in at-risk revenue. Retention campaigns reached 92% of flagged customers within 48 hours.",
    tools: ["Python", "SQL", "Power BI", "Pandas", "Scikit-learn"],
    metrics: { label: "Churn Reduction", value: "34%", change: "-34%" },
    featured: true,
    color: "#3FC1C9",
    github: "https://github.com/yourprofile/customer-churn-analysis",
  },
  {
    id: "sales-performance",
    title: "Sales Performance Dashboard",
    category: "Business Intelligence",
    problem:
      "Regional sales teams lacked visibility into real-time performance metrics, resulting in delayed decision-making and missed quarterly targets.",
    dataset:
      "2 years of transactional data: 120K+ orders, 800 products, 12 regions, integrated with CRM data.",
    analysis:
      "Designed an interactive Power BI dashboard with drill-through capabilities. Created DAX measures for YoY growth, moving averages, and forecast vs. actual comparisons.",
    process: [
      "Extracted and consolidated data from SQL Server and CRM exports",
      "Designed star schema data model with fact and dimension tables",
      "Built 15+ DAX measures including YoY growth, rolling averages, and forecast variance",
      "Created drill-through pages for regional and product-level analysis",
      "Deployed self-service analytics portal with scheduled data refresh",
    ],
    insights: [
      "Top 15% of products drove 68% of total revenue",
      "Tuesday-Thursday showed 40% higher conversion rates",
      "Northeast region outperformed by 23% due to bundling strategy",
    ],
    recommendation:
      "Rolled out a self-service analytics platform enabling regional managers to make data-driven decisions in real-time.",
    results:
      "Enabled real-time decision-making across 12 regions. Q1 post-launch saw 18% revenue growth. Reduced weekly reporting time from 8 hours to 15 minutes.",
    tools: ["Power BI", "SQL Server", "DAX", "Excel", "Python"],
    metrics: { label: "Revenue Growth", value: "+18%", change: "+18%" },
    color: "#364F6B",
    github: "https://github.com/yourprofile/sales-dashboard",
    liveUrl: "#",
  },
  {
    id: "supply-chain",
    title: "Supply Chain Optimization",
    category: "Operations Analytics",
    problem:
      "Warehouse operations faced 12% stockout rate and 23% overstock on key SKUs, impacting both revenue and storage costs.",
    dataset:
      "3 years of inventory data: purchase orders, supplier lead times, seasonal demand patterns, and warehouse capacity metrics.",
    analysis:
      "Applied time-series decomposition to identify seasonal patterns. Built an ABC-XYZ matrix to classify inventory by value and demand variability.",
    process: [
      "Aggregated 3 years of PO, inventory, and shipment data from ERP system",
      "Performed time-series decomposition (trend, seasonality, residual)",
      "Built ABC-XYZ classification matrix for 800+ SKUs",
      "Calculated dynamic safety stock levels using lead time variability",
      "Created Tableau monitoring dashboard with reorder alerts",
    ],
    insights: [
      "67% of stockouts occurred in just 8% of SKUs",
      "Supplier lead time variability was 3x higher than estimated",
      "Seasonal demand shifts were predictable 6 weeks in advance",
    ],
    recommendation:
      "Redesigned reorder points using dynamic safety stock calculations, reducing carrying costs while improving fill rates.",
    results:
      "Reduced stockout rate from 12% to 4%. Cut overstock by 28%, saving $1.2M annually in carrying costs. Improved order fill rate to 97%.",
    tools: ["Python", "SQL", "Tableau", "Excel", "Statsmodels"],
    metrics: { label: "Cost Savings", value: "$1.2M", change: "-28%" },
    color: "#48688c",
    github: "https://github.com/yourprofile/supply-chain-optimization",
  },
  {
    id: "marketing-attribution",
    title: "Marketing Attribution Analysis",
    category: "Marketing Analytics",
    problem:
      "Marketing team couldn't determine which channels drove actual conversions, leading to inefficient budget allocation across 8 channels.",
    dataset:
      "12 months of multi-touch attribution data: 250K customer journeys, ad spend across channels, and conversion events.",
    analysis:
      "Implemented multi-touch attribution modeling comparing first-touch, last-touch, and data-driven models. Analyzed customer journey paths and channel interactions.",
    process: [
      "Collected and unified touchpoint data from 8 marketing channels",
      "Mapped 250K customer journeys from first touch to conversion",
      "Built and compared first-touch, last-touch, and data-driven attribution models",
      "Performed ROI analysis by channel using each attribution model",
      "Created channel performance dashboard with budget optimization recommendations",
    ],
    insights: [
      "Social media influenced 45% of conversions but received only 12% of budget",
      "Email remarketing had the highest ROI at 8.4x",
      "Average conversion path involved 4.2 touchpoints across 3 channels",
    ],
    recommendation:
      "Reallocated 30% of budget based on data-driven attribution, projected to improve ROAS by 2.1x.",
    results:
      "Budget reallocation improved overall ROAS by 2.1x. Social media conversions increased 67% after budget adjustment. Reduced cost per acquisition by 31%.",
    tools: ["Python", "Google Analytics", "SQL", "Pandas", "Matplotlib"],
    metrics: { label: "ROAS Improvement", value: "2.1x", change: "+110%" },
    color: "#2fa1a8",
    github: "https://github.com/yourprofile/marketing-attribution",
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
      "Studied computer science, information technology, programming, databases, software engineering, data analysis, and statistics, building a strong foundation for working with data and solving technical problems.",
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
    endDate: "December 2026",
    description:
      "Intensive practical training covering the end-to-end data analysis workflow, from data preparation and exploration to visualization and business insights.",
    highlights: [
      "Worked with Python for data cleaning, exploratory analysis, feature engineering, and feature scaling.",
      "Applied SQL for data extraction, transformation, joins, subqueries, CTEs, and advanced analytical queries.",
      "Built dashboards and reports using Power BI, Tableau, Excel, and Power Query.",
      "Practiced statistical analysis and translated data findings into clear business insights.",
    ],
  },
];
