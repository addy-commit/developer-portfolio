
import { motion } from 'motion/react'
import {
  Code2,
  Atom,
  FileCode2,
  Palette,
  GitBranch,
  Layout,
  Smartphone,
  Accessibility,
} from 'lucide-react'

const skills = [
  {
    name: 'HTML & CSS',
    category: 'Web Fundamentals',
    description: 'Semantic HTML, modern CSS, layouts, and responsive styling',
    icon: Code2,
  },
  {
    name: 'JavaScript',
    category: 'Programming',
    description: 'ES6+ syntax, DOM interactions, functions, and array methods',
    icon: FileCode2,
  },
  
{
  name: 'React',
  category: 'Frontend Library',
  description: 'Reusable components, JSX, props, and state management',
  icon: Atom,
},

  {
    name: 'TypeScript',
    category: 'Programming',
    description: 'Type-safe components, interfaces, and typed application logic',
    icon: FileCode2,
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    description: 'Utility-first styling, responsive design, and reusable UI patterns',
    icon: Palette,
  },
  {
    name: 'Git & GitHub',
    category: 'Version Control',
    description: 'Version control, commits, branches, and GitHub workflows',
    icon: GitBranch,
  },
  {
    name: 'Responsive Design',
    category: 'UI Development',
    description: 'Mobile-first layouts and adaptable interfaces across devices',
    icon: Smartphone,
  },
  {
    name: 'Component Design',
    category: 'Frontend Architecture',
    description: 'Reusable UI components, props, and consistent design patterns',
    icon: Layout,
  },
  {
    name: 'Accessibility',
    category: 'Web Standards',
    description: 'Semantic markup, keyboard-friendly controls, and accessible navigation',
    icon: Accessibility,
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-semibold tracking-widest text-purple-400">
            02 / TECH STACK
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Tools &{' '}
            <span className="text-purple-400">
              Technologies.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            Technologies I use and am actively developing
            my skills in.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon

            return (
              <motion.article
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: (index % 3) * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-purple-500/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-semibold">
                  {skill.name}
                </h3>

               
<p className="mt-2 text-sm text-gray-400">
  {skill.category}
</p>

{'description' in skill && skill.description && (
  <p className="mt-3 text-sm leading-relaxed text-gray-500">
    {skill.description}
  </p>
)}

</motion.article>

            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
