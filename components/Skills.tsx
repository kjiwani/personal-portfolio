export function Skills() {
  const technicalSkills = [
    "AWS", "Kubernetes", "Docker", "Terraform", "ECS Fargate",
    "GitLab CI/CD", "GitHub Actions", "Argo CD",
    "Python", "Java", "JavaScript", "Node.js", "React",
    "RESTful APIs", "Kafka", "RabbitMQ",
    "SQL", "NoSQL", "MongoDB",
    "Datadog", "New Relic", "Grafana", "CloudWatch"
  ]

  const productSkills = [
    "Platform Strategy & Roadmapping",
    "Developer Experience (DevEx)",
    "Technical Stakeholder Management",
    "Cross-functional Team Leadership",
    "Infrastructure Cost Optimization",
    "API & Integration Architecture",
    "User-Centric Product Design",
    "Data-Driven Decision Making",
    "Agile & Sprint Planning",
    "Technical Documentation",
    "Change Management & Adoption",
    "System Architecture Design"
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
          Skills & Expertise
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Technical depth combined with strategic product thinking
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-teal-600">
              Technical Platform Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Product Management Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-amber-600">
              Product Management Excellence
            </h3>
            <div className="space-y-3">
              {productSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors"
                >
                  <span className="text-amber-600">✓</span>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}