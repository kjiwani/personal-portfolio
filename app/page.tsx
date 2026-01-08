import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Currently } from '@/components/Currently';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="py-8">
          <div className="container mx-auto px-6">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
        <Projects />
        <div className="py-8">
          <div className="container mx-auto px-6">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
        <About />
        <div className="py-8">
          <div className="container mx-auto px-6">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
        <Skills />
        <div className="py-8">
          <div className="container mx-auto px-6">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Khurram Jiwani. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </>
  );
}
