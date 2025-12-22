export default function Contact() {
  return (
    <section className="py-16" id="contact">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
        Get In Touch
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        I'm always open to discussing Product Management opportunities, Platform Engineering, or interesting projects.
      </p>
      
      <div className="space-y-4">
        <div>
            <span className="font-semibold">Email: </span>
            <a href="mailto:kjiwani786@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                kjiwani786@gmail.com
            </a>
            <span className="text-zinc-600 dark:text-zinc-400"> LinkedIn Profile</span>
            <a href="https://www.linkedin.com/in/khurramjiwani/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                https://www.linkedin.com/in/khurramjiwani/
            </a>
            <span className="text-zinc-600 dark:text-zinc-400"> GitHub Profile</span>
            <a href="https://github.com/kjiwani" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                https://github.com/kjiwani
            </a>
            <div>
                <span className="text-zinc-600 dark:text-zinc-400">Location: </span>
                <span className="text-zinc-900 dark:text-white">McKinney, Texas</span>
            </div>
        </div>
      </div>
    </section>
  );
}