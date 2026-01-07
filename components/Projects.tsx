'use client';

import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectCardCondensed } from './ProjectCardCondensed';

export function Projects() {
  const [showOtherProjects, setShowOtherProjects] = useState(false);
  const featuredProjects = [
    {
      title: "Infrastructure Build Time Optimization",
      company: "New Relic",
      timeframe: "2023-2024",
      category: "Platform Engineering",
      problemStatement: 
        "Engineering teams waited 3 weeks for infrastructure provisioning, creating bottlenecks that blocked customer-facing features from shipping and caused missed deadlines.",
      yourRole: 
        "Led cross-functional initiative coordinating 14 engineering teams to identify workflow bottlenecks through stakeholder interviews. Designed parallel execution strategy and facilitated migration off legacy tooling with 10+ successful deployments.",
      impact: {
        primary: "Reduced provisioning from 3 weeks to 10 hours (95% reduction)",
        secondary: [
          "$1.2M in annual cost savings",
          "10+ successful migrations to new workflow",
          "Eliminated dual-infrastructure maintenance costs",
          "Accelerated time-to-market for customer features"
        ]
      },
      tags: ["AWS", "Infrastructure", "DevOps", "Cost Optimization", "Stakeholder Management", "Process Improvement"]
    },
    {
      title: "Multi-Tenant Fuel Loyalty Platform",
      company: "PDI Technologies",
      timeframe: "2021-2023",
      category: "B2B2C Platform",
      problemStatement:
        "Fortune 500 fuel retailer needed their first digital loyalty platform to compete with mobile-first competitors, but had no existing digital infrastructure, no APIs, and no real-time capabilities.",
      yourRole:
        "Led technical integration as product SME, coordinating offshore engineering teams and third-party mobile developers. Partnered with CTO to design RESTful API contracts connecting legacy POS systems. Wrote Python automation scripts for offer management and real-time point calculations.",
      impact: {
        primary: "Delivered Fortune 500 client's first digital loyalty platform from concept to production",
        secondary: [
          "10K+ active users with personalized offers",
          "5 campaign types: sweepstakes, gamification, bonus points, targeted offers, referral programs",
          "Real-time point tracking across mobile app and POS systems",
          "Platform scaled to support 250% user growth",
          "Managed technical escalations during 8K-user pilot phase"
        ]
      },
      tags: ["Loyalty Platforms", "API Design", "Python", "Real-time Systems", "B2B2C", "Mobile Apps", "Cross-team Coordination", "Legacy Integration"]
    },
    {
      title: "Rapid Prototyping Infrastructure Platform",
      company: "Toyota Connected",
      timeframe: "2024-Present",
      category: "Internal Developer Platform",
      problemStatement:
        "Product teams spent weeks provisioning prototype environments, creating DevOps bottlenecks that delayed experimentation and slowed innovation cycles. No self-service platform existed for rapid testing.",
      yourRole:
        "Leading POC phase to demonstrate platform value, coordinating cloud engineering, security, and DevEx teams to design self-service infrastructure. Built business case with cost-benefit analysis and tracked bi-weekly success metrics. Presenting to C-suite executives for funding approval.",
      impact: {
        primary: "Secured C-suite buy-in and funding approval for platform investment",
        secondary: [
          "Validated approach with successful proof-of-concept",
          "Projected 60% reduction in prototype provisioning time",
          "Established framework for self-service infrastructure with Argo CD integration",
          "25+ engineering teams identified as early adopters",
          "Created standardized deployment templates across multiple technology stacks"
        ]
      },
      tags: ["Internal Platforms", "Developer Experience", "Cloud Infrastructure", "Self-Service", "POC Management", "Executive Presentations", "Argo CD", "Infrastructure Automation"]
    }
  ];

  const otherProjects = [
    {
      title: "Cloud Cost Optimization Initiative",
      company: "Toyota Connected",
      timeframe: "2024-Present",
      description: "Led cost optimization initiative identifying opportunities to reduce cloud infrastructure spending across 25+ engineering teams. Established maintenance roadmap for 9 core systems, extending upgrade visibility from 2 weeks to 1 quarter.",
      keyMetric: "Contributing to $2M cost reduction OKR with $500K in identified savings",
      tags: ["Cost Optimization", "Cloud Infrastructure", "Platform Engineering", "Financial Planning"]
    },
    {
      title: "AI Tooling Pilot for Developer Productivity",
      company: "Toyota Connected",
      timeframe: "2024-Present",
      description: "Driving AI tooling pilot across 25-person engineering group to improve developer productivity and code quality. Coordinating vendors, security teams, and DevEx stakeholders while tracking bi-weekly metrics for adoption and impact.",
      keyMetric: "Piloting AI coding assistants to reduce development time and improve code quality",
      tags: ["AI Tooling", "Developer Experience", "Vendor Management", "Innovation"]
    },
    {
      title: "Manufacturing Systems & Plant Operations",
      company: "General Motors",
      timeframe: "2016-2019",
      description: "Built 3 full-stack manufacturing applications serving plant workers with vehicle location tracking, parts management, and recall remediation workflows. Provided foundation for transition to product management.",
      keyMetric: "3 production applications deployed across GM manufacturing plants",
      tags: ["AngularJS", "Java Spring Boot", "Full-Stack Development", "Manufacturing"]
    }
  ];

  return (
    <section id="projects" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Featured Projects Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technical product initiatives delivering measurable business impact through 
            platform engineering and infrastructure optimization
          </p>
        </div>
        
        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        {/* Other Notable Projects Section - Collapsible */}
        <div className="mt-16">
          
          {/* Subtle Toggle Link */}
          <div className="flex items-center justify-center mb-8">
            <button
              onClick={() => setShowOtherProjects(!showOtherProjects)}
              className="group flex items-center gap-2 text-gray-600 hover:text-teal-600 
                       transition-colors duration-300"
            >
              <span className="text-lg font-semibold">
                {showOtherProjects ? 'Hide' : 'View'} Other Notable Projects ({otherProjects.length})
              </span>
              
              {/* Small Chevron Icon */}
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${
                  showOtherProjects ? 'rotate-180' : ''
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </button>
          </div>
          
          {/* Collapsible Content */}
          <div 
            className={`overflow-hidden transition-all duration-500 ${
              showOtherProjects ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="border-t-2 border-gray-200 pt-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-3 text-gray-900">
                  Other Notable Projects
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Additional initiatives demonstrating breadth of experience across 
                  platform engineering, cost optimization, and enterprise systems
                </p>
              </div>
              
              {/* Condensed Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {otherProjects.map((project, idx) => (
                  <ProjectCardCondensed key={idx} {...project} />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider before About section */}
        <div className="mt-16"></div>

        {/* Optional CTA */}
        {/* <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4 text-lg">
            Want to discuss how I can help solve your infrastructure and platform challenges?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white 
                     rounded-lg hover:bg-teal-700 transition-colors font-semibold"
          >
            Let's Connect
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
}