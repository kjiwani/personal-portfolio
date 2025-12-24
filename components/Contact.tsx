import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kjiwani786@gmail.com',
      href: 'mailto:kjiwani786@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/khurramjiwani',
      href: 'https://www.linkedin.com/in/khurramjiwani/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/kjiwani',
      href: 'https://github.com/kjiwani',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'McKinney, Texas',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing product management opportunities, technical challenges, or potential collaborations.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <method.icon size={24} className="text-gray-900" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">{method.label}</p>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 font-medium">{method.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="mailto:kjiwani786@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              <Mail size={20} />
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
