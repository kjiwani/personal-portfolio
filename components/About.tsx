'use client';

export function About() {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto py-6 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <h2 className="text-5xl font-bold mb-12 text-gray-900 text-center">
            About Me
          </h2>
          
          {/* Journey & Story */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              I started as a software engineer at General Motors, building manufacturing 
              systems that tracked vehicles across assembly lines. What fascinated me 
              wasn't just the code—it was how technical decisions rippled through entire 
              operations.
            </p>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              As an engineer, I struggled to keep up with my peers who thrived on the 
              details—finding that missing semicolon, staying current with the newest 
              frameworks. I realized my strength wasn't in being the best coder, but in 
              something else: <strong className="text-gray-900">I could talk to anyone</strong>. 
              Engineers trusted me because I understood the constraints. Executives trusted 
              me because I translated complexity into strategy.
            </p>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              That's when I transitioned to product management. I've since led platform 
              and infrastructure products at PDI Technologies, New Relic, and Toyota 
              Connected, always focusing on one thing: <strong className="text-gray-900">making 
              engineering teams more productive</strong>. I became the bridge—learning 
              systems deeply enough to architect solutions with engineers, then defending 
              those decisions confidently to customers and executives.
            </p>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              I'm looking for my next role where I can tackle complex infrastructure 
              challenges—ideally at a company building developer tools, platform products, 
              or B2B SaaS at scale. I thrive in environments where <strong className="text-gray-900">
              happy engineers build better products</strong>, and where getting technical 
              isn't just allowed—it's essential.
            </p>
          </div>
          
          {/* My Approach - Principles */}
          <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-orange-50 rounded-2xl 
                        p-10 border-2 border-teal-100">
            <h3 className="text-3xl font-bold mb-8 text-gray-900 text-center">
              My Approach
            </h3>
            
            <div className="space-y-8">
              {/* Principle 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 
                                text-white rounded-full flex items-center justify-center 
                                font-bold text-xl shadow-lg">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">
                    Get technical enough to be dangerous
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    I learn systems deeply, write code when needed, and review PRs—not to 
                    micromanage, but to understand constraints and make informed tradeoffs. 
                    Engineers respect PMs who can speak their language and won't suggest 
                    impossible solutions.
                  </p>
                </div>
              </div>
              
              {/* Principle 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 
                                text-white rounded-full flex items-center justify-center 
                                font-bold text-xl shadow-lg">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">
                    Focus on the "how" instead of complaining about the "can'ts"
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    I'm customer-driven and solution-oriented. When faced with constraints, 
                    I collaborate with engineers to find creative approaches. I won't be a 
                    yes-man, but I'll always provide a path forward that gets stakeholders 
                    and customers what they need.
                  </p>
                </div>
              </div>
              
              {/* Principle 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-orange-600 
                                text-white rounded-full flex items-center justify-center 
                                font-bold text-xl shadow-lg">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">
                    Become the product SME—then earn trust through action
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    I'm thirsty to learn and collaborate. People want to work with me because 
                    I genuinely want to be an expert in our product and passionate about what 
                    the team is building. I drive architecture decisions, defend them with 
                    customers, and deliver results that make everyone succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Optional: Skills Highlight */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* What Energizes Me */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg font-bold mb-3 text-teal-700 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                What Energizes Me
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">→</span>
                  <span>Building architecture and solving customer problems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">→</span>
                  <span>Taking wild ideas and tinkering with engineers to find solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">→</span>
                  <span>Becoming the SME who can talk technical depth and business strategy</span>
                </li>
              </ul>
            </div>

            {/* What I'm Looking For */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg font-bold mb-3 text-orange-700 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                What I'm Looking For
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">→</span>
                  <span>Developer tools, platform products, or B2B SaaS at scale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">→</span>
                  <span>Companies that value technical depth in PMs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">→</span>
                  <span>Complex infrastructure challenges that require strategic thinking</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}