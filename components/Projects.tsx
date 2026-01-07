import { ProjectCard } from './ProjectCard'

export function Projects() {
  const projects = [
    {
      title: "Internal Developer Platform",
      company: "Toyota Connected",
      year: "2025",
      description: "Building self-service infrastructure platform enabling business teams to deploy prototypes without DevOps bottlenecks. Creating automated deployment pipelines with Argo CD integration and standardized templates across multiple technology stacks.",
      impact: [
        "Accelerating innovation velocity for C-level demos to Toyota Japan",
        "Supporting 25+ engineering teams across 4 product verticals",
        "Reducing prototype-to-demo time from weeks to hours"
      ],
      technologies: ["GitLab", "Argo CD", "Kubernetes", "Python", "Node.js"],
      category: "Platform Engineering"
    },
    {
      title: "Cellular Infrastructure Optimization",
      company: "New Relic",
      year: "2023-2024",
      description: "Led cross-team initiative to automate infrastructure provisioning for New Relic's cellular architecture. Replaced manual, sequential processes with parallelized, self-healing deployment system across 9 different cell types for telemetry ingestion (MELT).",
      impact: [
        "Reduced provisioning time from 3 weeks to 10 hours",
        "$1.2M in annual cost savings",
        "Eliminated infrastructure dual-run periods during cell rotations"
      ],
      technologies: ["Workflow Automation", "Infrastructure Parallelization", "AWS", "GCP"],
      category: "Infrastructure"
    },
    {
      title: "Real-Time Loyalty Platform",
      company: "PDI Technologies",
      year: "2021-2023",
      description: "Built loyalty engine backend integrating with point-of-sale systems, payment platforms (Verafone, Gilbarco), and mobile applications for Fortune 500 client. Designed RESTful APIs and automated point management systems using Python scripting.",
      impact: [
        "Scaled from 8K pilot to 10K+ production users across multiple markets",
        "Real-time transaction processing with Kafka streams",
        "Personalized offers based on customer behavior analytics"
      ],
      technologies: ["RESTful APIs", "Kafka", "Python", "XML Integration", "AWS"],
      category: "Platform Development"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Technical product initiatives delivering measurable business impact through platform engineering and infrastructure optimization
        </p>
        
        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}