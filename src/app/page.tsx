import { EnhancedMarquee } from '@/components/ui/enhanced-marquee'
import { ScrollIndicator } from '@/components/ui/scroll-indicator'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - 100vh with Marquee */}
      <section id="hero" className="h-screen flex items-center justify-center bg-black relative">
        {/* Corner Braces */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top-left corner brace */}
          <div className="absolute top-8 left-8 w-24 h-24 border-l-4 border-t-4 border-white rounded-tl-3xl opacity-80"></div>
          {/* Top-right corner brace */}
          <div className="absolute top-8 right-8 w-24 h-24 border-r-4 border-t-4 border-white rounded-tr-3xl opacity-80"></div>
          {/* Bottom-left corner brace */}
          <div className="absolute bottom-8 left-8 w-24 h-24 border-l-4 border-b-4 border-white rounded-bl-3xl opacity-80"></div>
          {/* Bottom-right corner brace */}
          <div className="absolute bottom-8 right-8 w-24 h-24 border-r-4 border-b-4 border-white rounded-br-3xl opacity-80"></div>
        </div>
        
        {/* Halftone Vignette Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtler vignette gradient */}
          <div className="absolute inset-0" 
            style={{
              background: 'radial-gradient(circle at center, transparent 10%, rgba(128,128,128,0.15) 150%, rgba(64,64,64,0.3) 100%)'
            }}
          ></div>
          {/* Halftone dot pattern - barely visible small dots */}
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px),
                radial-gradient(circle, rgba(255,255,255,0.03) 1.5px, transparent 1.5px)
              `,
              backgroundSize: '12px 12px, 24px 24px',
              backgroundPosition: '0 0, 6px 6px',
              mixBlendMode: 'overlay'
            }}
          ></div>
          {/* Additional halftone texture - small dots */}
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 1.2px, transparent 1.2px),
                radial-gradient(circle at 75% 25%, rgba(255,255,255,0.04) 1.8px, transparent 1.8px),
                radial-gradient(circle at 25% 75%, rgba(255,255,255,0.04) 1.8px, transparent 1.8px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 1.2px, transparent 1.2px)
              `,
              backgroundSize: '30px 30px',
              mixBlendMode: 'screen'
            }}
          ></div>
        </div>
        <EnhancedMarquee 
          text="A Diamond In The Rough!" 
          fontSize="md"
          duration={15}
          repeat={10}
          strokeWidth="1.5px"
          enableVariableProximity={true}
          proximityRadius={200}
          proximityFalloff="gaussian"
          fromFontVariationSettings="'opsz' 9, 'GRAD' 0"
          toFontVariationSettings="'opsz' 40, 'GRAD' 200"
        />
        
        {/* Scroll Indicator */}
        <ScrollIndicator />
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-600 to-gray-800 rounded-full"></div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Building Digital Experiences
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate developer with expertise in modern web technologies. 
                I love creating clean, efficient, and user-friendly applications that solve 
                real-world problems. With a strong foundation in both frontend and backend 
                development, I bring ideas to life through code.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My journey in tech has been driven by curiosity and a desire to continuously 
                learn and grow. I believe in writing clean, maintainable code and creating 
                experiences that delight users.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm border border-gray-700">
                  React
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm border border-gray-700">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm border border-gray-700">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm border border-gray-700">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm border border-gray-700">
                  Next.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">Project {project}</h3>
                  <p className="text-gray-300 mb-4">
                    A innovative web application built with modern technologies to solve real-world problems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-700 text-gray-200 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-gray-700 text-gray-200 rounded text-xs">TypeScript</span>
                    <span className="px-2 py-1 bg-gray-700 text-gray-200 rounded text-xs">Node.js</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Let's Connect
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            I'm always interested in hearing about new opportunities and exciting projects.
            Feel free to reach out if you'd like to collaborate!
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
