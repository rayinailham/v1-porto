export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth">
      {/* Hero Section - 100vh */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm [Your Name]
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300">
            Full Stack Developer & Creative Problem Solver
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              View My Work
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-slate-300 to-slate-400 rounded-full"></div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                Building Digital Experiences
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I'm a passionate developer with expertise in modern web technologies. 
                I love creating clean, efficient, and user-friendly applications that solve 
                real-world problems. With a strong foundation in both frontend and backend 
                development, I bring ideas to life through code.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                My journey in tech has been driven by curiosity and a desire to continuously 
                learn and grow. I believe in writing clean, maintainable code and creating 
                experiences that delight users.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                  Next.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
