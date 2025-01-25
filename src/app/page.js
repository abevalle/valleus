import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-center p-8 gap-12">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          Valle.us
        </h1>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative px-12 py-10 bg-slate-900 rounded-lg backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-medium mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Coming Soon
            </p>
            <p className="text-lg md:text-xl text-slate-300/90 leading-relaxed">
              Dedicated to creating innovative solutions, conducting meaningful research, 
              and making strategic investments that shape the future of technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
