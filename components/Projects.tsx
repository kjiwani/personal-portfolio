import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <section className="py-16" id="projects">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
        Featured Projects
      </h2>
      <ProjectCard 
        title="Multi-Tenant Fuel Loyalty Platform Launch"
        company="DropTank/PDI Technologies"
        description="Successfully launched a multi-tenant Loyalty engine for 2 major US regions composed of 7 sites managing introductory offers, user-specific offers. Project involved integrating POS systems, a third-party mobile app, and managing a fully rearchitected platform."
        results={[
          "10,000+ new users onboarded to Loyalty Platform",
          "5 offer campaigns deployed",
          "Increase in return customers due to initial loyalty bonuses"
        ]}
        techStack={["Oracle Cloud", "RabbitMQ", "Kafka", "React", "Java", "POS Systems"]}
      />
      <ProjectCard 
        title="Infrastructure Build Time Optimization"
        company="New Relic"
        description="Infrastructure build times for cellular architecture were impeding the ability to respond quickly to traffic increase and decrease resulting in lower margins and high infra cost. Project focused on parallelizing build steps and aligning teams to reduce time in each step."
        results={[
          "Reduction of build time from 3 days to 9 hours for major cell types",
          "Cost savings of 300K+ per cell",
          "Increase in response time for new infrastructure deployment and teardown"
        ]}
        techStack={["Argo Workflows", "Temporal", "Python", "Docker", "GitHub actions"]}
      />
      <ProjectCard 
        title="Rapid Prototyping Infrastructure Platform"
        company="Toyota Connected North America"
        description="In the era of AI and coding tools, innovation is easier than ever, testing ideas is table stakes for technical and non-technical users alike. At TCNA, we ideate often, but operations and infrastructure slow us down. With the ability for quicker infrastructure deployment for Prototypes, we can decrease ideation to prototype time. This creates the ability to see ideas come to life and react quickly while keeping engineering teams uninterrupted."
        results={[
          "This project is in discovery and POC phase, currently we have stakeholder buy-in including C-suite users. The goal is to decrease the ideation to prototype phase to 1-2days where currently ideas do not even make it to prototype due to engineering talent requirement and infrastructure lead time."
        ]}
        techStack={["AWS", "Kubernetes", "ArgoCD", "GitLab CI", "Python", "Node.js"]}
      />
    </section>
  );
}