/**
 * Case studies are the spine of the site. Each one leads with what it found,
 * not what was built — the same rule the resume follows.
 *
 * `finding` is the sentence a hiring manager should remember. `headline` is a
 * compressed version for the terminal at /terminal. Charts are real captures
 * from the live dashboards, so the imagery and the claim can't drift apart.
 */
/** `bg` is sampled from the image itself, so letterboxing it into a
    fixed-ratio frame is invisible. */
export type Chart = { src: string; alt: string; bg?: string };

export const caseStudies = [
  {
    slug: "coffee",
    title: "Coffee Shop Sales",
    subtitle: "Traffic vs basket decomposition",
    scale: "149,116 transaction lines · 3 NYC stores · 6 months",
    finding: "Every dollar of growth came from traffic. Basket size never moved.",
    headline: "100% of growth came from traffic, not basket size",
    body: "Revenue more than doubled over six months. Decomposing Revenue = Orders × AOV showed orders up +104% while average order value moved −0.1% — one lever doing all the work and another sitting completely untouched. The grain check mattered too: transaction_id turned out to be a line item rather than an order, which had been reporting true AOV as $4.69 instead of $5.98.",
    charts: [
      {
        src: "/images/charts/coffee-hero.png",
        bg: "#0d0d0d",
        alt: "Bar chart of revenue per trading day by month",
      },
      {
        src: "/images/charts/coffee-2.png",
        alt: "Bar chart of revenue by daypart",
      },
    ] as Chart[],
    methods: ["Python", "pandas", "Plotly", "Market-basket analysis", "KPI design"],
    demo: "https://maven-roasters-analysis.vercel.app",
    github: "https://github.com/DavidZeff1/coffee-shop-sales-analysis",
  },
  {
    slug: "mexico",
    title: "Maven Toys México",
    subtitle: "Margin bridge analysis",
    scale: "829,262 transaction lines · 50 stores · 29 cities",
    finding: "The entire margin decline was product mix. The rate effect was zero.",
    headline: "The entire −3.35 pp margin decline was product mix",
    body: "Revenue grew +30.9% year on year while gross profit grew only +16.0%. An exact mix-vs-rate bridge attributed all 3.35 points of margin decline to what was being sold rather than what it was sold for — no pricing effect at all. The chain was buying its growth with margin, and the bridge says precisely how much.",
    charts: [
      {
        src: "/images/charts/mexico-hero.png",
        bg: "#0c0c0c",
        alt: "Line chart of monthly gross margin over time",
      },
      {
        src: "/images/charts/mexico-2.png",
        alt: "Bar chart of revenue change by category",
      },
    ] as Chart[],
    methods: ["Python", "pandas", "ABC / Pareto", "Mix-vs-rate bridging", "Inventory analysis"],
    demo: "https://mexico-toy-sales.vercel.app",
    github: "https://github.com/DavidZeff1/mexico-toy-sales",
  },
  {
    slug: "airline",
    title: "Airline Loyalty Program",
    subtitle: "Campaign measurement",
    scale: "16,737 members · 389,065 member-months",
    finding: "A +54% headline was really +40.7% once the trend was accounted for.",
    headline: "A +54% headline was really +40.7% once trend-adjusted",
    body: "Measured a 2018 acquisition campaign against a trend-adjusted counterfactual instead of the flattering raw number: +281 incremental members, $332 CAC against $8,047 mean CLV, and a +11.0 pp difference-in-differences among members who were already enrolled. The result ships with its own caveat about what it can and can't prove.",
    charts: [
      {
        src: "/images/charts/airline-hero.png",
        bg: "#0b0b0b",
        alt: "Difference-in-differences bar chart of year-on-year flight change by month",
      },
      {
        src: "/images/charts/airline-2.png",
        alt: "Chart showing churn concentrated on a single date",
      },
    ] as Chart[],
    methods: ["Python", "pandas", "Difference-in-differences", "CLV / CAC", "Cohort analysis"],
    demo: "https://airline-loyalty-analytics.vercel.app",
    github: "https://github.com/DavidZeff1/airline-loyalty-analytics",
  },
  {
    slug: "bank",
    title: "Bank Customer Churn",
    subtitle: "Retention and deposits at risk",
    scale: "10,000 retail-banking customers · France, Germany, Spain",
    finding: "20.4% churn — and €186M of deposits sitting behind it.",
    headline: "20.4% churn — €186M of deposits at risk",
    body: "End-to-end churn analysis from raw data through KPI definition to segmentation and an interactive dashboard. Quantified in the unit the business actually manages — deposits at risk rather than customer counts. Germany churned at 32.4% against roughly 16% in France and Spain, and customers holding 3–4 products churned almost universally.",
    charts: [
      {
        src: "/images/charts/bank-hero.png",
        bg: "#ecf0f5",
        alt: "Two bar charts: churn by geography and churn by number of products",
      },
      {
        src: "/images/charts/bank-2.png",
        alt: "KPI tiles showing churn rate, retention, deposits under management and deposits at risk",
      },
    ] as Chart[],
    methods: ["Python", "pandas", "Plotly", "Segmentation", "KPI design"],
    demo: "https://bank-churn-ashy.vercel.app/#overview",
    github: "https://github.com/DavidZeff1/bank-churn",
  },
];

/**
 * How I work — each principle is evidenced by something that actually happened
 * in the case studies above, not asserted. Claims without evidence are the
 * thing this section exists to avoid.
 */
export const principles = [
  {
    title: "Check the grain before trusting the metric",
    evidence:
      "transaction_id turned out to be a line item, not an order — true average order value was $5.98, not the $4.69 being reported.",
  },
  {
    title: "Compare like with like",
    evidence:
      "A naive month-over-month revenue chart is distorted by month length. Revenue per trading day is the comparison that survives scrutiny.",
  },
  {
    title: "Separate mix from rate",
    evidence:
      "An exact bridge attributed 100% of a 3.35 pp margin decline to product mix, with a rate effect of exactly zero — a general answer beats a directional one.",
  },
  {
    title: "State what the number can't prove",
    evidence:
      "The difference-in-differences result ships with its own caveat: one airline, no untreated control market, strongly suggestive rather than causal.",
  },
];

export const skillGroups: [string, string][] = [
  ["Programming", "Python · SQL · PostgreSQL · MySQL"],
  ["Analysis", "pandas · NumPy · A/B testing · hypothesis testing · regression"],
  ["Visualisation & BI", "Tableau · Plotly · Streamlit · Matplotlib · Seaborn"],
  ["Data handling", "ETL · Excel · Google Sheets · Jupyter"],
  ["Engineering", "TypeScript · React · Next.js · Node.js · Docker"],
  ["Languages", "Hebrew — native · English — native"],
];

export const experience = [
  {
    role: "Financial Analyst",
    org: "Gush Etzion Regional Council",
    dates: "Jan 2026 — Present",
    note: "Budgets in the tens of millions of shekels. Near-daily data-driven reporting for council departments — real-time budget control, welfare and youth services — plus welfare case-management analysis for department status reviews.",
  },
  {
    role: "Teaching Assistant",
    org: "Perach Program",
    dates: "Jan 2023 — Dec 2025",
    note: "Taught JavaScript, React and Node.js, and mentored students building end-to-end projects with REST APIs and database integration.",
  },
  {
    role: "Customer Service Representative",
    org: "Bernstein LTD",
    dates: "Jan 2021 — Jan 2023",
    note: "Analysed customer data patterns to identify trends and improve service quality; managed invoice processing and billing enquiries.",
  },
];

export const education = [
  { main: "B.Sc. Computer Science", org: "Sapir College", dates: "2021 — 2025" },
  { main: "Data Analysis Certificate", org: "Hebrew University", dates: "2026" },
  { main: "Data Science Certificate", org: "Bar-Ilan University", dates: "2026" },
];

/**
 * Software engineering work from the CS degree and side projects. Kept because
 * it backs up the technical depth the analytics work assumes, but it doesn't
 * lead the page.
 */
export const softwareProjects = [
  {
    title: "Real-Time Battle Tracker",
    description:
      "A distributed system for live unit monitoring and tactical analysis: real-time position tracking, threat visualisation, movement trails and an auto-generated activity feed, on an event-driven microservices architecture.",
    tech: ["React", "TypeScript", "Node.js", "Apache Kafka", "Server-Sent Events", "Docker"],
    video: "/videos/BattleTracker.mov",
    demo: "https://github.com/DavidZeff1/battletracker",
    github: "https://github.com/DavidZeff1/battletracker",
  },
  {
    title: "PlacePal (Airbnb Clone)",
    description:
      "A property rental platform with browsing, booking, authentication and payments, built end to end on Next.js and Postgres.",
    tech: ["Next.js", "TypeScript", "Postgres (Neon)", "Prisma", "NextAuth", "Stripe"],
    video: "/videos/PlacePal.mp4",
    demo: "https://airbnb-83oc.vercel.app/",
    github: "https://github.com/DavidZeff1/airbnb",
  },
  {
    title: "David Teaches Code",
    description:
      "A site of coding tutorials and technical articles, with video previews and a clean, fast reading experience.",
    tech: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Framer Motion"],
    video: "/videos/david-teaches-code-preview.mp4",
    demo: "https://david-teaches-code.vercel.app/",
    github: "https://github.com/DavidZeff1/david-teaches-code",
  },
  {
    title: "Algorithm Visualizer",
    description:
      "An interactive tool for visualising sorting and searching algorithms, built in pure TypeScript with a modular architecture.",
    tech: ["TypeScript", "HTML5", "CSS3", "Clean architecture", "Async/await"],
    video: "/videos/AlgoVisualizer.mp4",
    demo: "https://github.com/DavidZeff1/algorithm-visualizer",
    github: "https://github.com/DavidZeff1/algorithm-visualizer",
  },
  {
    title: "Survivor Guy",
    description:
      "A 2D survival game built in Unity, demonstrating core game-development patterns and state management.",
    tech: ["Unity", "C#", "Design patterns", "Game loop architecture"],
    video: "/videos/survivor-guy.mp4",
    demo: "https://gamerdave141592.itch.io/survivor-guy",
    github: "https://github.com/DavidZeff1/Final-Project",
  },
];
