'use client'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Simple gradient ring around headshot */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500 to-amber-500 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <img
                src="/headshot.jpeg"
                alt="Khurram Jiwani"
                className="w-44 h-44 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent">
          Khurram Jiwani
        </h1>
        
        <p className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Technical Product Manager
        </p>
        
        <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Building platforms that scale teams and accelerate innovation
        </p>

        <p className="text-base md:text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
          8+ years leading infrastructure products • AWS • Kubernetes • APIs<br />
          Currently enabling 25+ engineering teams at Toyota Connected
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
  
    <a href="#contact"
    className="px-8 py-3 bg-gradient-to-r from-teal-600 to-amber-600 text-white rounded-lg hover:from-teal-700 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl"
  >
    Get in Touch
  </a>
  
    <a href="#projects"
    className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-all"
  >
    View Work
  </a>
  
   <a href="/resume.pdf"
    download
    className="px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-lg hover:bg-teal-600 hover:text-white transition-all"
  >
    Download Resume
  </a>
</div>
        <div className="flex gap-6 justify-center text-gray-600">
          <a href="mailto:kjiwani786@gmail.com" className="hover:text-teal-600 transition-colors" aria-label="Email">
            <Mail size={24} />
          </a>
          <a href="https://linkedin.com/in/khurramjiwani" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/kjiwani" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors" aria-label="GitHub">
            <Github size={24} />
          </a>
          <span className="flex items-center gap-1 text-gray-500">
            <MapPin size={20} />
            McKinney, Texas
          </span>
        </div>
      </div>
    </section>
  )
}