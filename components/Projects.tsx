'use client';

import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectCardCondensed } from './ProjectCardCondensed';

export function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const totalSlides = 2; // Slide 0: Featured, Slide 1: Other

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            {currentSlide === 0 ? 'Featured Projects' : 'Other Notable Projects'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentSlide === 0 
              ? 'Technical product initiatives delivering measurable business impact through platform engineering and infrastructure optimization'
              : 'Additional initiatives demonstrating breadth of experience across platform engineering, cost optimization, and enterprise systems'
            }
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Slides */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              
              {/* Slide 1: Featured Projects */}
              <div className="w-full flex-shrink-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredProjects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                  ))}
                </div>
              </div>

              {/* Slide 2: Other Projects */}
              <div className="w-full flex-shrink-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                  {otherProjects.map((project, idx) => (
                    <ProjectCardCondensed key={idx} {...project} />
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Navigation Arrows - Simple and Subtle */}
          {currentSlide === 0 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={nextSlide}
                className="group flex items-center gap-3 px-6 py-3 text-gray-600 
                         hover:text-teal-600 transition-all duration-300 
                         border-2 border-gray-300 hover:border-teal-500 rounded-lg"
                aria-label="View more projects"
              >
                <span className="text-sm font-semibold">More Projects</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </button>
            </div>
          )}

          {currentSlide === 1 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={prevSlide}
                className="group flex items-center gap-3 px-6 py-3 text-gray-600 
                         hover:text-teal-600 transition-all duration-300 
                         border-2 border-gray-300 hover:border-teal-500 rounded-lg"
                aria-label="Back to featured projects"
              >
                <svg 
                  className="w-5 h-5 group-hover:-translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M11 17l-5-5m0 0l5-5m-5 5h12" 
                  />
                </svg>
                <span className="text-sm font-semibold">Back to Featured</span>
              </button>
            </div>
          )}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? 'w-12 h-3 bg-gradient-to-r from-teal-600 to-orange-600'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}