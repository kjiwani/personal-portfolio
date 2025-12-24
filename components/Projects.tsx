import { ProjectCard, ProjectCardProps } from './ProjectCard';

export function Projects() {
  const projects: ProjectCardProps[] = [
    {
      title: 'Multi-Tenant Fuel Loyalty Platform',
      company: 'PDI Technologies / DropTank',
      category: 'B2B SaaS',
      description:
        'Successfully launched a multi-tenant Loyalty engine for 2 major US regions composed of 7 sites managing introductory offers, user-specific offers, and a fully rearchitected platform.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      impact: [
        '10,000+ new users onboarded',
        '5 offer campaigns deployed',
        'Integrated POS systems & mobile app',
      ],
      tags: ['Oracle Cloud', 'Kafka', 'React', 'Java', 'POS Integration'],
    },
    {
      title: 'Infrastructure Build Time Optimization',
      company: 'New Relic',
      category: 'Platform',
      description:
        'Infrastructure build times for cellular architecture were impeding the ability to respond quickly to traffic. Led initiative to parallelize build steps and align teams to reduce time in each step.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      impact: [
        'Build time: 3 days → 9 hours',
        '$300K+ annual cost savings',
        'Improved incident response capability',
      ],
      tags: ['AWS', 'CI/CD', 'GitLab', 'Observability'],
    },
    {
      title: 'Rapid Prototyping Infrastructure Platform',
      company: 'Toyota Connected',
      category: 'Platform',
      description:
        'Spearheading a platform to accelerate proof-of-concept development, enabling engineering teams to quickly validate ideas and demonstrate value to C-suite stakeholders.',
      image: 'https://images.unsplash.com/photo-1600697395780-1cf7ab1fef5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      impact: [
        'POC development accelerated',
        'C-suite buy-in achieved',
        'Cross-team adoption in progress',
      ],
      tags: ['Kubernetes', 'Docker', 'ArgoCD', 'Terraform'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of projects where I've driven product strategy, led cross-functional teams, and delivered
            measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
