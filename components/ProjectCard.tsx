import { TrendingUp } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  company: string;
  category: string;
  description: string;
  image: string;
  impact: string[];
  tags: string[];
}

export function ProjectCard({ title, company, category, description, image, impact, tags }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 shadow-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
        
        <p className="text-gray-600">{description}</p>

        {/* Impact Metrics */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-900 font-medium">
            <TrendingUp size={16} />
            <span>Key Impact</span>
          </div>
          <ul className="space-y-1">
            {impact.map((item, i) => (
              <li key={i} className="text-gray-600 flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags - pushed to bottom */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 mt-auto">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 border border-gray-200 text-gray-700 rounded-full text-sm hover:border-gray-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
