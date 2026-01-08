'use client'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-0">
      <div className="max-w-4xl mx-auto px-6 text-center">
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

        <h1 className="text-4xl md:text-7xl font-bold mb-4 text-gray-900 tracking-tight">
          Khurram Jiwani
        </h1>

        {/* <p className="text-3xl md:text-4xl text-gray-900 mb-3 font-semibold">
          Technical Product Manager
        </p> */}

        <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
          I'm the PM engineers actually want in architecture reviews. I've deployed to production, debugged Kubernetes clusters, and designed REST APIs, not to replace engineers, 
          but to make better product decisions. That technical depth lets me bridge complexity and strategy in ways most PMs can't.
          <span className="font-semibold text-gray-900"> Real impact: $1.2M saved, 3 weeks → 10 hours.</span>
        </h2>

        {/* Current Role Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-teal-50 border border-teal-200 rounded-full mb-8">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-teal-500"></span>
          </span>
          <span className="text-lg font-semibold text-teal-700">
            Currently enabling 15+ teams at Toyota Connected
          </span>
        </div>

        <p className="text-lg md:text-xl text-gray-600 mb-6 text-center">
          8+ years leading infrastructure products • AWS • Kubernetes • APIs
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 text-center justify-center">

          {/* PRIMARY CTA - Big, bold, prominent */}
          <a
            href="#projects"
            className="px-12 py-6 bg-teal-600 text-white rounded-xl 
             font-bold text-2xl shadow-2xl 
             hover:bg-gradient-to-r hover:from-teal-600 hover:to-orange-600
             hover:scale-105 transition-all duration-500
             inline-flex items-center justify-center group"
          >
            View My Work
            <svg
              className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>

          {/* SECONDARY CTA - Much smaller, outline style */}
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-teal-500 text-teal-700 
             rounded-lg hover:bg-orange-50 hover:border-orange-600 hover:text-orange-600
             transition-all duration-300 text-base
             inline-flex items-center justify-center"
          >
            Get in Touch
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