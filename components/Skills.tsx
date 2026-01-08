'use client';

export function Skills() {
  const capabilities = [
    {
      title: "Platform Engineering Expertise",
      description: "Building internal developer platforms that reduce friction and accelerate delivery for engineering teams",
      techs: ["Kubernetes", "Docker", "Terraform", "AWS ECS", "GitLab CI/CD", "Argo CD"]
    },
    {
      title: "Infrastructure Optimization",
      description: "Cost reduction and performance improvements at scale through workflow automation and resource optimization",
      techs: ["AWS", "Cost Analysis", "Monitoring", "Performance Tuning", "Infrastructure Automation"]
    },
    {
      title: "Technical Fluency",
      description: "Hands-on coding and architecture design to understand constraints and build credibility with engineering teams",
      techs: ["Python", "JavaScript", "REST APIs", "Kafka", "SQL", "System Design"]
    },
    {
      title: "Cross-Functional Leadership",
      description: "Bridging engineering, business, and executive stakeholders to drive alignment and deliver results",
      techs: ["Product Strategy", "Technical Roadmapping", "Stakeholder Management", "Executive Communication"]
    }
  ];

  return (
    <section id="skills" className="py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            How I Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Strategic capabilities backed by hands-on technical experience
          </p>
        </div>
        
        {/* Capability Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {capabilities.map((cap, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl 
                       transition-all duration-300 hover:-translate-y-1 border-2 border-transparent
                       hover:border-teal-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-orange-500 
                          rounded-lg flex items-center justify-center mb-4">
                {idx === 0 && (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )}
                {idx === 1 && (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )}
                {idx === 2 && (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )}
                {idx === 3 && (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {cap.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {cap.description}
              </p>
              
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {cap.techs.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 bg-teal-50 text-teal-700 rounded-full 
                             text-sm font-medium hover:bg-teal-100 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add a note about technical depth */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            I believe the best product managers deeply understand their technology stack, 
            which enables them to make better prioritization decisions, communicate 
            effectively with engineering teams, and identify opportunities that others miss.
          </p>
        </div>
      </div>
    </section>
  );
}