
import { motion } from 'motion/react'
import { Code2, Palette, Layers3, Sparkles } from 'lucide-react'

const strengths = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description:
      'Building responsive interfaces with React, TypeScript and reusable components.',
  },
  {
    icon: Palette,
    title: 'UI & Design',
    description:
      'Creating clean layouts, thoughtful interactions and visually engaging experiences.',
  },
  {
    icon: Layers3,
    title: 'Component Architecture',
    description:
      'Organizing interfaces into maintainable and scalable components.',
  },
  {
    icon: Sparkles,
    title: 'Continuous Learning',
    description:
      'Exploring modern frontend tools and improving through hands-on projects.',
  },
]

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-semibold tracking-widest text-purple-400">
            01 / ABOUT ME
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            A little about{' '}
            <span className="text-purple-400">me.</span>
          </h2>

         
<p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
  Hi! I'm Aditi Mitra, an aspiring Frontend Developer
  passionate about creating visually engaging, responsive,
  and user-friendly web experiences. I enjoy combining
  creativity with technology to turn ideas into functional,
  interactive websites.
</p>

<p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
  I'm currently building projects using React, TypeScript,
  JavaScript, and Tailwind CSS, with a focus on reusable
  components, clean UI design, and responsive layouts.
  My work includes a personal developer portfolio and
  Seven Sacred Shadows, a spiritual guidance web platform
  that I'm developing.
</p>

<p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
  I'm continuously expanding my frontend development
  skills and looking for opportunities to contribute
  to meaningful projects, collaborate with creative
  teams, and grow as a developer.
</p>

        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {strengths.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-colors hover:border-purple-500/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {item.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
