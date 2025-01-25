import Image from "next/image";
import NetworkBackground from './components/NetworkBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <NetworkBackground />
      
      <div className="relative z-10 grid grid-rows-[1fr_auto_1fr] min-h-screen p-8 pb-20 gap-16 sm:p-20">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center gap-6 max-w-3xl mx-auto mt-20">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            valle.us
          </h1>
          <p className="text-xl sm:text-2xl font-light text-foreground/80">
            Coming Soon
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-8 max-w-2xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
          We are shaping possibilities at the intersection of technology, strategy, and ambition. We’re driven by curiosity, guided by innovation, and focused on what’s next.
          </p>
          
          <a 
            href="https://abevalle.com" 
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-purple-600 rounded-lg transition-all duration-300 hover:bg-purple-700 hover:scale-105 focus:ring-4 focus:ring-purple-500/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit abevalle.com
          </a>
        </div>

        {/* Footer */}
        <div className="flex items-end justify-center pb-8">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} valle.us. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
