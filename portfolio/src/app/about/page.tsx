export default function About() {
  const skills = {
    Frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.JS",
      "Next.JS",
    ],
    Backend: ["PHP", "JAVA", "Python", "C++"],
    Database: ["MySQL", "PostgreSQL", "MongoDB"],
  };

  return (
    <div className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-card">
            <h3>My Introduction</h3>
            <p>
              I am well-versed in HTML, CSS, JavaScript, and other
              cutting-edge frameworks and libraries, which allows me to
              implement interactive features. Additionally, I have experience
              working with backend technologies and database systems.
            </p>
            <button className="button button-primary">
              Download CV
            </button>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="skill-category">
                <h4>{category}</h4>
                <ul className="skill-list">
                  {skillList.map((skill) => (
                    <li key={skill} className="skill-item">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}