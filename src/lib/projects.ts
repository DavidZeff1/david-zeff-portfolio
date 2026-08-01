/**
 * Analytics work leads the site. Each entry carries the finding, not a
 * description of the work — the same rule the resume follows, so a recruiter
 * reading both sees one consistent story.
 *
 * `headline` is the single number the project turned on; `scale` is the size
 * of the data behind it. Both are shown before the prose.
 */
export const analyticsProjects = [
  {
    title: "Coffee Shop Sales — Traffic vs Basket Decomposition",
    scale: "149,116 transaction lines · 3 NYC stores",
    headline: "100% of growth came from traffic, not basket size",
    description:
      "Decomposed Revenue = Orders × AOV across six months of transaction data. Orders rose +104% while average order value moved −0.1% — every dollar of growth came from one lever, and the other sat untouched. Also proved transaction_id was a line item rather than an order, which corrected true AOV from $4.69 to $5.98.",
    tech: ["Python", "pandas", "Plotly", "Market-Basket Analysis", "KPI Design"],
    image: "/images/dashboards/maven-roasters-analysis.jpg",
    demo: "https://maven-roasters-analysis.vercel.app",
    github: "https://github.com/DavidZeff1/coffee-shop-sales-analysis",
  },
  {
    title: "Maven Toys México — Margin Bridge Analysis",
    scale: "829,262 transaction lines · 50 stores · 29 cities",
    headline: "The entire −3.35 pp margin decline was product mix",
    description:
      "Revenue grew +30.9% year on year but gross profit only +16.0%. An exact mix-vs-rate bridge attributed 100% of the margin decline to what was being sold rather than what it was sold for — the rate effect was zero. The chain was buying growth with margin.",
    tech: ["Python", "pandas", "ABC / Pareto", "Mix-vs-Rate Bridging", "Inventory Analysis"],
    image: "/images/dashboards/mexico-toy-sales.jpg",
    demo: "https://mexico-toy-sales.vercel.app",
    github: "https://github.com/DavidZeff1/mexico-toy-sales",
  },
  {
    title: "Airline Loyalty Program — Campaign Analytics",
    scale: "16,737 members · 389,065 member-months",
    headline: "A +54% headline was really +40.7% once trend-adjusted",
    description:
      "Measured a 2018 acquisition campaign against a trend-adjusted counterfactual rather than against the flattering raw number: +281 incremental members, $332 CAC against $8,047 mean CLV, and +11.0 pp difference-in-differences among existing members.",
    tech: ["Python", "pandas", "Difference-in-Differences", "CLV / CAC", "Cohort Analysis"],
    image: "/images/dashboards/airline-loyalty-analytics.jpg",
    demo: "https://airline-loyalty-analytics.vercel.app",
    github: "https://github.com/DavidZeff1/airline-loyalty-analytics",
  },
  {
    title: "Bank Customer Churn Analysis",
    scale: "10,000 retail-banking customers",
    headline: "20.4% churn — €186M of deposits at risk",
    description:
      "End-to-end churn and retention analysis, from raw data through KPI definition to deep-dive segmentation and an interactive dashboard. Quantified the exposure in the currency the business actually cares about: deposits, not customer counts.",
    tech: ["Python", "pandas", "KPI Design", "Segmentation", "Interactive Dashboard"],
    image: "/images/dashboards/bank-churn.jpg",
    demo: "https://bank-churn-ashy.vercel.app/#overview",
    github: "https://github.com/DavidZeff1/bank-churn",
  },
];

/**
 * Software engineering work from the CS degree and before. Kept because it
 * backs up the technical depth the analytics work assumes, but it no longer
 * leads the page.
 */
export const softwareProjects = [
  {
    title: "Real-Time Battle Tracker",
    description:
      "A distributed system for live military unit monitoring and tactical analysis. Features real-time position tracking, threat visualization with danger zones, movement trails, and an auto-generated activity feed. Built with event-driven microservices architecture.",
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Leaflet Maps",
      "Node.js",
      "Apache Kafka",
      "Server-Sent Events (SSE)",
      "Docker",
      "Microservices Architecture",
      "Event-Driven Design",
    ],
    video: "/videos/BattleTracker.mov",
    demo: "https://github.com/DavidZeff1/battletracker",
    github: "https://github.com/DavidZeff1/battletracker",
  },
  {
    title: "PlacePal (Airbnb Clone)",
    description:
      "A property rental platform where users can browse listings, book accommodations, and make secure payments. Includes user authentication and a responsive booking interface.",
    tech: [
      "Next.js",
      "TypeScript",
      "Postgres (Neon)",
      "Prisma ORM",
      "NextAuth",
      "Stripe Payments",
      "Cloudinary",
      "Tailwind CSS",
    ],
    video: "/videos/PlacePal.mp4",
    demo: "https://airbnb-83oc.vercel.app/",
    github: "https://github.com/DavidZeff1/airbnb",
  },
  {
    title: "David Teaches Code",
    description:
      "A site showcasing coding tutorials, projects, and technical articles. Features video previews, smooth animations, and a clean, modern design.",
    tech: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Server Components",
      "Vercel",
    ],
    video: "/videos/david-teaches-code-preview.mp4",
    demo: "https://david-teaches-code.vercel.app/",
    github: "https://github.com/DavidZeff1/david-teaches-code",
  },
  {
    title: "Algorithm Visualizer",
    description:
      "A web-based tool for interactively visualizing sorting and searching algorithms. Built with pure TypeScript, HTML, and CSS, prioritizing clean code and a modular architecture.",
    tech: [
      "TypeScript",
      "HTML5",
      "CSS3",
      "Clean Architecture",
      "DOM Manipulation",
      "Async/Await",
    ],
    video: "/videos/AlgoVisualizer.mp4",
    demo: "https://github.com/DavidZeff1/algorithm-visualizer",
    github: "https://github.com/DavidZeff1/algorithm-visualizer",
  },
  {
    title: "Survivor Guy (Unity Game)",
    description:
      "A 2D survival game where players fight off waves of enemies and manage resources. Built with Unity and demonstrates core game development patterns and architecture.",
    tech: [
      "Unity Engine",
      "C#",
      "2D Game Development",
      "Design Patterns (Singleton, Observer, Factory)",
      "Game Loop Architecture",
    ],
    video: "/videos/survivor-guy.mp4",
    demo: "https://gamerdave141592.itch.io/survivor-guy",
    github: "https://github.com/DavidZeff1/Final-Project",
  },
];
