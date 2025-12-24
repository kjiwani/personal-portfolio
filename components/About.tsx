import { Target, Users, TrendingUp, Award } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Target,
      title: 'Strategic Vision',
      description: 'Translating business goals into actionable product roadmaps',
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Deeply understanding user needs through research and data',
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Driving metrics that matter and delivering measurable impact',
    },
    {
      icon: Award,
      title: 'Cross-Functional',
      description: 'Leading diverse teams to ship exceptional products',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NjUxNDIwMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional workspace"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 7 years of experience in product management, I've led cross-functional teams to launch
                innovative products that have reached millions of users. My approach combines data-driven
                decision making with a deep empathy for user needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in B2B SaaS and platform products, having worked with companies like New Relic, 
                PDI Technologies, and Toyota Connected to define product strategy, prioritize features, and 
                deliver solutions that drive both user satisfaction and business growth.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    <highlight.icon size={24} className="text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
