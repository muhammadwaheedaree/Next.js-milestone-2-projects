import Link from "next/link";

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
    <div className="min-h-screen bg-gray-50 pt-16 flex flex-col">
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row justify-between items-start max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md mb-8 md:mb-0">
              <h3 className="font-semibold mb-4">My Introduction</h3>
              <p className="text-gray-600">
                I am well-versed in HTML, CSS, JavaScript, and other
                cutting-edge frameworks and libraries, which allows me to
                implement interactive features. Additionally, I have experience
                working with backend technologies and database systems.
              </p>
              <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors">
                Download CV
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-auto">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="font-semibold mb-2">{category}</h4>
                  <ul className="space-y-2">
                    {skillList.map((skill) => (
                      <li
                        key={skill}
                        className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow"
                      >
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
      <div className="flex justify-center mb-8">
        <Link
          href="/contact"
          className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
