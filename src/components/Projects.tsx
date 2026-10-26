
import { motion } from 'motion/react'
import { ArrowUpRight, Code2 } from 'lucide-react'

type Project = {
  title: string
  description: string
  technologies: string[]
  status: string
  image?: string
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: 'Seven Sacred Shadows',
    
description:
  'An ongoing web development project for a spiritual guidance platform featuring tarot readings, angel card readings, and consultation services. Focused on creating an engaging user interface and responsive experience.',

    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    status: 'In Progress',
  },

   
{
  title: 'Developer Portfolio',
  
description:
  'Designed and developed a responsive frontend portfolio using React, TypeScript, and Tailwind CSS. Implemented reusable components, animated sections, mobile navigation, accessible controls, and SEO metadata. Deployed the application on Vercel with GitHub integration.',

  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
  status: 'Completed · October 2026',
  github: 'https://github.com/addy-commit/developer-portfolio',
  demo: 'https://developer-portfolio-kohl-psi.vercel.app/',
},

  
]

function Projects() {
  return (
    <section
      id="projects"
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
            03 / SELECTED WORK
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Featured{' '}
            <span className="text-purple-400">
              Projects.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            A selection of projects I'm building to
            strengthen my frontend development skills.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-purple-500/40"
            >
              <div className="flex h-56 items-center justify-center bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Code2
                    size={64}
                    className="text-purple-400/60"
                  />
                )}
              </div>

              <div className="p-7">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                    {project.status}
                  </span>
                </div>

                <p className="leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-purple-200"
                    >
                      View Code
                      <ArrowUpRight size={17} />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-purple-200"
                    >
                      Live Demo
                      <ArrowUpRight size={17} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
