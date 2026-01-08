'use client';

import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'projects', 'about', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      // Check if we're near the bottom of the page
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      // If near bottom, set to last section (contact)
      if (nearBottom) {
        setActiveSection('contact');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 border-b border-gray-100">
          {/* Logo / Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors"
          >
            Product Manager
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#projects"
              className={`text-gray-700 hover:text-orange-500 transition-colors relative ${activeSection === 'projects' ? 'text-teal-600 font-semibold' : ''
                }`}
            >
              Projects
              {activeSection === 'projects' && (
                <span className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-teal-500"></span>
              )}
            </a>
            <a
              href="#about"
              className={`text-gray-700 hover:text-orange-500 transition-colors relative ${activeSection === 'about' ? 'text-teal-600 font-semibold' : ''
                }`}
            >
              About
              {activeSection === 'about' && (
                <span className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-teal-500"></span>
              )}
            </a>
            <a
              href="#skills"
              className={`text-gray-700 hover:text-orange-500 transition-colors relative ${activeSection === 'skills' ? 'text-teal-600 font-semibold' : ''
                }`}
            >
              Skills
              {activeSection === 'skills' && (
                <span className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-teal-500"></span>
              )}
            </a>
            <a
              href="#contact"
              className={`text-gray-700 hover:text-orange-500 transition-colors relative ${activeSection === 'contact' ? 'text-teal-600 font-semibold' : ''
                }`}
            >
              Contact
              {activeSection === 'contact' && (
                <span className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-teal-500"></span>
              )}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
