export default function ProjectCard({ title, company, description, results, techStack }) {
  return (
    <div className="space-y-8">
        <div className="border p-4 rounded">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{title}</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{company}</p>
          <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
          <ul>
            {results.map((result, index) => (
            <li key={index}>{result}</li>
            ))}
        </ul>
          <div className="flex flex-wrap gap-2 mt-4">
                {techStack.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded mr-2">{tech}</span>
                ))}
          </div>
        </div>
      </div>
  );
}