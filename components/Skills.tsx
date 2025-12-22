export default function Skills() {
    const technicalSkills = [
    "AWS", "Kubernetes", "Docker", "GitLab CI/CD", "GitHub Actions",
    "ArgoCD", "Terraform", "Python", "Java", "JavaScript", "Node.js",
    "React", "SQL", "NoSQL", "MongoDB", "Kafka", "RabbitMQ",
    "Datadog", "New Relic", "Grafana"
  ];

  const pmSkills = [
    "Cross-Functional Leadership", "Executive & Stakeholder Management",
    "User-Centric Design", "API & Integration Strategy", "Product Roadmapping",
    "Strategic Vision", "Data Analysis", "Technical Documentation"
  ];
    return (
    <section className="py-16" id="skills">
        <h2>Skills</h2>
        <div className="flex flex-wrap gap-2 mt-4">
            <h3>Technical Skills</h3>
                {technicalSkills.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded mr-2">{tech}</span>
                ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
            <h3>Product Management Skills</h3>
                {pmSkills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded mr-2">{skill}</span>
                ))}
        </div>
    </section>
    );
}