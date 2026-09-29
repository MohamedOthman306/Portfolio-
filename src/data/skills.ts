export type SkillCardIcon = 'preparation' | 'analysis' | 'sql' | 'visualization' | 'business' | 'workflow';

export interface SkillCard {
  id: string;
  title: string;
  icon: SkillCardIcon;
  skills: Array<{ name: string; highlighted?: boolean }>;
}

export const SKILL_CARDS: SkillCard[] = [
  {
    id: 'preparation',
    title: 'Data Preparation',
    icon: 'preparation',
    skills: [
      { name: 'Python' },
      { name: 'Pandas' },
      { name: 'Power Query' },
      { name: 'Excel' },
      { name: 'Data Cleaning' },
      { name: 'Data Validation', highlighted: true },
    ],
  },
  {
    id: 'exploration',
    title: 'Exploration & Analysis',
    icon: 'analysis',
    skills: [
      { name: 'EDA' },
      { name: 'Statistical Summaries' },
      { name: 'Pattern & Trend Analysis' },
      { name: 'Root-Cause Analysis', highlighted: true },
      { name: 'Hypothesis Testing' },
    ],
  },
  {
    id: 'analytical-sql',
    title: 'Analytical SQL',
    icon: 'sql',
    skills: [
      { name: 'Joins & Subqueries' },
      { name: 'CTEs' },
      { name: 'Window Functions', highlighted: true },
      { name: 'Aggregations' },
      { name: 'Query Optimization' },
    ],
  },
  {
    id: 'visualization',
    title: 'BI & Visualization',
    icon: 'visualization',
    skills: [
      { name: 'Power BI' },
      { name: 'DAX' },
      { name: 'Interactive Dashboards' },
      { name: 'Data Storytelling', highlighted: true },
      { name: 'Matplotlib / Seaborn' },
    ],
  },
  {
    id: 'business-analysis',
    title: 'Business & KPI Analysis',
    icon: 'business',
    skills: [
      { name: 'KPI Definition' },
      { name: 'Cohort & Funnel Analysis', highlighted: true },
      { name: 'Churn Analysis' },
      { name: 'Business Reporting' },
    ],
  },
  {
    id: 'tools-workflow',
    title: 'Tools & Workflow',
    icon: 'workflow',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Jupyter Notebook' },
      { name: 'Excel' },
      { name: 'Documentation', highlighted: true },
    ],
  },
];
