export function Skills() {
  const skillCategories = [
    {
      title: 'Technical Skills',
      skills: [
        'AWS',
        'Kubernetes',
        'Docker',
        'GitLab CI/CD',
        'GitHub Actions',
        'ArgoCD',
        'Terraform',
        'Python',
        'Java',
        'JavaScript',
        'Node.js',
        'React',
        'SQL',
        'MongoDB',
        'Kafka',
        'RabbitMQ',
        'Datadog',
        'New Relic',
        'Grafana',
      ],
    },
    {
      title: 'Product Management',
      skills: [
        'Cross-Functional Leadership',
        'Stakeholder Management',
        'User-Centric Design',
        'API & Integration Strategy',
        'Product Roadmapping',
        'Strategic Vision',
        'Data Analysis',
        'Technical Documentation',
        'Agile Methodologies',
        'Executive Communication',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A combination of technical depth and product leadership capabilities built over 7+ years in the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
