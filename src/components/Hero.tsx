
import { motion } from 'motion/react'
import {
  ArrowUpRight,
  Sparkles,
  Code2,
} from 'lucide-react'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-28 text-white"
    >
      {/* Purple background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-150px] top-24 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl py-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          {/* Availability badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            <Sparkles size={16} />
            Open to frontend opportunities
          </div>

          {/* Personal introduction */}
          <p className="mb-4 text-lg text-gray-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-8xl">
            Aditi Mitra.
            <span className="mt-3 block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Frontend Developer.
            </span>
          </h1>

         
<p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
  I'm Aditi Mitra, a Frontend Developer focused on building
  responsive, accessible, and visually engaging web applications.
  I work with React, TypeScript, JavaScript, and Tailwind CSS
  to create clean, reusable components and intuitive user
  experiences.
</p>


          {/* Action buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-7 py-3 font-semibold transition-all hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
            >
              View My Projects
              <ArrowUpRight size={19} />
            </a>

            <a
              href="https://github.com/addy-commit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 font-semibold transition-colors hover:border-purple-400 hover:text-purple-300"
            >
              <Code2 size={19} />
              GitHub Profile
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Technology highlights */}
          <div className="mt-16 flex flex-wrap gap-6 border-t border-white/10 pt-8 text-sm text-gray-400">
            <span>React</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>Responsive Design</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
