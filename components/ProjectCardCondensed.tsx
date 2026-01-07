'use client';

interface ProjectCardCondensedProps {
  title: string;
  company: string;
  timeframe: string;
  description: string;
  keyMetric: string;
  tags: string[];
}

export function ProjectCardCondensed({
  title,
  company,
  timeframe,
  description,
  keyMetric,
  tags
}: ProjectCardCondensedProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-gray-200 p-5 
                    hover:border-teal-500 hover:shadow-lg transition-all duration-300">
      
      {/* Title & Company */}
      <h4 className="text-lg font-bold text-gray-900 mb-1">
        {title}
      </h4>
      <p className="text-sm text-gray-600 mb-3">
        {company} • {timeframe}
      </p>
      
      {/* Description */}
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        {description}
      </p>
      
      {/* Key Metric - Highlighted */}
      <div className="bg-teal-50 border-l-4 border-teal-500 px-3 py-2 mb-3">
        <p className="text-sm font-semibold text-teal-900">
          {keyMetric}
        </p>
      </div>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span 
            key={idx}
            className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}