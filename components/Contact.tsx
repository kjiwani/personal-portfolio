import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "kjiwani786@gmail.com",
      href: "mailto:kjiwani786@gmail.com",
      color: "teal"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/khurramjiwani",
      href: "https://linkedin.com/in/khurramjiwani",
      color: "blue"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/kjiwani",
      href: "https://github.com/kjiwani",
      color: "gray"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "McKinney, Texas",
      href: null,
      color: "amber"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Let's Connect
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          I'm always interested in discussing platform engineering, infrastructure optimization, 
          and technical product management opportunities.
        </p>

        <div className="mb-8">
  
    <a href="/resume.pdf"
    download
    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-amber-600 text-white rounded-lg hover:from-teal-700 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl text-lg font-semibold"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
    Download Resume
  </a>
</div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            const colorClasses = {
              teal: "border-teal-200 hover:border-teal-500 hover:bg-teal-50",
              blue: "border-blue-200 hover:border-blue-500 hover:bg-blue-50",
              gray: "border-gray-200 hover:border-gray-500 hover:bg-gray-50",
              amber: "border-amber-200 hover:border-amber-500 hover:bg-amber-50"
            }

            const content = (
              <div className={`flex items-center gap-4 p-6 bg-white rounded-xl border-2 transition-all ${colorClasses[method.color as keyof typeof colorClasses]}`}>
                <Icon size={32} className="text-gray-600" />
                <div className="text-left">
                  <p className="text-sm text-gray-500 font-medium">{method.label}</p>
                  <p className="text-gray-800 font-semibold break-all">{method.value}</p>
                </div>
              </div>
            )

            return method.href ? (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={index}>
                {content}
              </div>
            )
          })}
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            This portfolio was built with Next.js, deployed on AWS ECS Fargate, 
            and managed with Terraform and GitHub Actions CI/CD
          </p>

          <a
            href="https://github.com/kjiwani/personal-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium"
          >
            <Github size={20} />
            View Source Code
          </a>
        </div>
      </div>
    </section>
  )
}