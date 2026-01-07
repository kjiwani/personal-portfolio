interface ProjectCardProps {
  title: string
  company: string
  year: string
  description: string
  impact: string[]
  technologies: string[]
  category: string
}

export function ProjectCard({ 
  title, 
  company, 
  year, 
  description, 
  impact, 
  technologies,
  category 
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="inline-block px-3 py-1 text-sm font-medium text-teal-700 bg-teal-50 rounded-full mb-3">
            {category}
          </span>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 font-medium">{company} • {year}</p>
        </div>
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">Key Impact:</h4>
        <ul className="space-y-2">
          {impact.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-teal-600 mt-1">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-sm border border-gray-300 text-gray-700 rounded-full hover:border-teal-600 hover:text-teal-600 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}