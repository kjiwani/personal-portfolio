'use client';

interface ProjectCardProps {
  title: string;
  company: string;
  timeframe: string;
  category: string;
  problemStatement: string;
  yourRole: string;
  impact: {
    primary: string;
    secondary: string[];
  };
  tags: string[];
  image?: string;
  imageCaption?: string;
}

export function ProjectCard({
  title,
  company,
  timeframe,
  category,
  problemStatement,
  yourRole,
  impact,
  tags,
  image,
  imageCaption
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl 
                    transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      
      {/* Image Section - Optional */}
      {image && (
        <div className="relative h-56 overflow-hidden bg-gray-100">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          {imageCaption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white 
                          text-xs px-4 py-2">
              {imageCaption}
            </div>
          )}
        </div>
      )}
      
      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        
        {/* Category Badge */}
        <span className="inline-block text-sm text-teal-600 font-semibold 
                       uppercase tracking-wide mb-2">
          {category}
        </span>
        
        {/* Title & Company */}
        <h3 className="text-2xl font-bold text-gray-900 mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          {company} • {timeframe}
        </p>
        
        {/* Problem Statement - Emphasized */}
        <div className="border-l-4 border-teal-600 bg-teal-50 pl-4 pr-4 py-3 mb-4 
                      rounded-r">
          <p className="text-xs font-semibold text-teal-800 mb-1 uppercase tracking-wide">
            The Challenge
          </p>
          <p className="text-gray-700 italic leading-relaxed">
            "{problemStatement}"
          </p>
        </div>
        
        {/* Your Role */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-800 mb-1 uppercase tracking-wide">
            My Role
          </p>
          <p className="text-gray-700 leading-relaxed">
            {yourRole}
          </p>
        </div>
        
        {/* Impact Section - Highlighted */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg 
                      p-4 border-2 border-teal-100 mb-4">
          <p className="text-xs font-bold text-teal-700 mb-2 uppercase tracking-wide flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Key Impact
          </p>
          <p className="font-semibold text-gray-900 mb-2">
            {impact.primary}
          </p>
          <ul className="space-y-1">
            {impact.secondary.map((item, idx) => (
              <li key={idx} className="text-sm text-gray-700 flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 text-xs border border-gray-300 rounded-full 
                       text-gray-700 hover:border-teal-600 hover:text-teal-600 
                       transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}