import Link from "next/link";

const projects = {
  "journey-guru": {
  title: "The JourneyGuru",
  technology: "Shopify • SEO",
  description:
    "A live travel website where I worked on Shopify website management, SEO, content optimization, and website performance.",

  role: "Digital Marketing & Shopify Executive",

  tools: [
    "Shopify",
    "Google Analytics (GA4)",
    "Google Search Console",
    "SEO",
    "DNS & SSL",
    "Razorpay"
  ],

  features: [
    "Developed and managed Shopify website content and structure",
    "Created SEO-friendly landing pages and blog content",
    "Implemented on-page and technical SEO",
    "Optimized metadata, images, internal linking, and canonical URLs",
    "Monitored website performance using GA4 and Google Search Console",
    "Worked on website speed, Core Web Vitals, and mobile responsiveness",
    "Managed products, collections, navigation, and website content",
    "Worked with domains, DNS, SSL, hosting, and payment gateway configuration"
  ],

  liveUrl: "https://thejourneyguru.com"
},


  "job-tracker": {
    title: "Job Application Tracker",
    technology: "React",
    description:
      "A responsive React application for managing and tracking job applications.",
    features: [
      "Add and delete job applications",
      "Update application status",
      "Filter applications by status",
      "Track application statistics",
      "Save data using localStorage",
      "Responsive layout",
    ],
  },

  "developer-portfolio": {
    title: "Developer Portfolio",
    technology: "Next.js",
    description:
      "A responsive developer portfolio built using Next.js and the App Router.",
    features: [
      "File-based routing",
      "Dynamic project routes",
      "Server and Client Components",
      "Server-side data fetching",
      "Route Handlers",
      "Responsive design",
    ],
    liveUrl: "https://job-tracker-teal-mu.vercel.app/"
  },
};

export default async function ProjectDetails({ params }) {
  const { id } = await params;
  const project = projects[id];

  if (!project) {
    return (
      <main className="project-details">
        <h1>Project not found</h1>

        <Link href="/projects" className="project-link">
          Back to Projects
        </Link>
      </main>
    );
  }

return (
  <main className="project-details">
    <p className="eyebrow">{project.technology}</p>

    <h1>{project.title}</h1>

    <p className="project-description">
      {project.description}
    </p>

    {/* Show role only when the project has one */}
    {project.role && (
      <section className="case-study-section">
        <h2>My Role</h2>
        <p>{project.role}</p>
      </section>
    )}

    {/* Show tools only when the project has them */}
    {project.tools && (
      <section className="case-study-section">
        <h2>Tools & Technologies</h2>

        <div className="skills">
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>
    )}

    <section className="project-features">
      <h2>What I Worked On</h2>

      <ul>
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </section>

    {/* Show live website button only when a URL exists */}
    {project.liveUrl && (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="primary-btn"
      >
        Visit Live Website
      </a>
    )}

    <Link href="/projects" className="secondary-btn">
      ← Back to Projects
    </Link>
  </main>
);}