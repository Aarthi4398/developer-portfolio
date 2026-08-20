export async function GET() {
  const projects = [
    {
      id: 1,
      title: "Job Application Tracker",
      technology: "React",
    },
    {
      id: 2,
      title: "Developer Portfolio",
      technology: "Next.js",
    },
  ];

  return Response.json(projects);
}