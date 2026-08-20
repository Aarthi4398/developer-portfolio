export default function About() {
  return (
    <main className="about-page">
      <p className="eyebrow">About Me</p>

      <h1>Frontend Developer focused on building practical web experiences.</h1>

      <p className="about-text">
        I am a frontend developer with experience building responsive web
        applications using JavaScript, React, and Next.js.
      </p>

      <p className="about-text">
        I enjoy creating clean user interfaces, working with reusable
        components, and building applications that are simple and easy to use.
      </p>


<div className="skills-section">
  <h2>Skills</h2>

  <div className="skill-category">
    <h3>Frontend Development</h3>
    <div className="skills">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>React</span>
      <span>Next.js</span>
    </div>
  </div>

  <div className="skill-category">
    <h3>Backend & Database</h3>
    <div className="skills">
      <span>C#</span>
      <span>ASP.NET</span>
      <span>LINQ</span>
      <span>MySQL</span>
    </div>
  </div>

  <div className="skill-category">
    <h3>CMS & E-commerce</h3>
    <div className="skills">
      <span>Shopify</span>
      <span>WordPress</span>
    </div>
  </div>

  <div className="skill-category">
    <h3>SEO & Analytics</h3>
    <div className="skills">
      <span>On-Page SEO</span>
      <span>Technical SEO</span>
      <span>Google Analytics (GA4)</span>
      <span>Google Search Console</span>
    </div>
  </div>

  <div className="skill-category">
    <h3>Tools</h3>
    <div className="skills">
      <span>Git</span>
      <span>GitHub</span>
      <span>Canva</span>
    </div>
  </div>
</div>     
    </main>
  );
}