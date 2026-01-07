import {Target, Users, TrendingUp, Award} from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">About Me</h2>
        
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            I'm a Technical Product Manager who bridges engineering and business strategy, specializing in <strong>platform and infrastructure products</strong> that enable teams to move faster.
          </p>

          <p>
            Currently at Toyota Connected, I lead cloud engineering initiatives for 12+ development teams, building internal operations platforms that reduce deployment friction and accelerate innovation cycles.
          </p>

          <p>
            My approach combines hands-on technical experience with strategic product thinking. I've written <strong>Python automation scripts</strong>, designed <strong>RESTful APIs</strong>, managed <strong>Kafka streams</strong>, and scaled real-time systems—while driving million dollar cost optimization initiatives and leading cross-functional teams.
          </p>

          <p>
            I believe the best product managers <strong>deeply understand their technology stack</strong>, which enables them to make better prioritization decisions, communicate effectively with engineering teams, and identify opportunities that others miss.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-200">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-teal-600">Technical Depth</h3>
              <ul className="space-y-2 text-base">
                <li>✓ Infrastructure automation & scaling</li>
                <li>✓ API design & integration architecture</li>
                <li>✓ Cross-team technical coordination</li>
                <li>✓ Hands-on scripting & automation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-amber-600">Business Impact</h3>
              <ul className="space-y-2 text-base">
                <li>✓ $1.2M+ in annual cost savings</li>
                <li>✓ 3 weeks → 10 hours deployment time</li>
                <li>✓ 10K+ users scaled in production</li>
                <li>✓ C-level stakeholder management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}