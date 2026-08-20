import Link from "next/link";

const projects = [
  {
    id: "journey-guru",
    title: "The JourneyGuru",
    description:
      "A live travel website where I worked on Shopify website management, SEO, content optimization, and website performance.",
    technology: "Shopify • SEO"
  },
  {
    id: "job-tracker",
    title: "Job Application Tracker",
    description:
      "A React application for tracking job applications, statuses, and interview progress.",
    technology: "React"
  },
  {
    id: "developer-portfolio",
    title: "Developer Portfolio",
    description:
      "A responsive developer portfolio built with Next.js using the App Router.",
    technology: "Next.js"
  }
];

export default function Projects() {
  return (
    <main className="projects-page">
      <h1>My Projects</h1>
      <p className="projects-intro">
        A few projects that demonstrate my frontend development skills.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <p className="project-tech">{project.technology}</p>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <Link
              href={`/projects/${project.id}`}
              className="project-link"
            >
              View Project
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}