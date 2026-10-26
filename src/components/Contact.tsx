
import { motion } from 'motion/react'
import { Mail, FileDown, ArrowUpRight } from 'lucide-react'

// Replace these with your real details before deployment.
const EMAIL = 'aditi.mitra6207@gmail.com'
const RESUME_AVAILABLE = false

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-950 px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-sm font-semibold tracking-widest text-purple-400">
            04 / GET IN TOUCH
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Let's build something
            <span className="block text-purple-400">
              amazing together.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            I'm interested in frontend development
            opportunities, creative collaborations,
            and exciting web projects.
            Have something in mind? Let's connect!
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {EMAIL && (
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`}
                target="_blank"
rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-purple-600 px-7 py-3 font-semibold transition-colors hover:bg-purple-500"
              >
                <Mail size={20} />
                Email Me
                <ArrowUpRight size={18} />
              </a>
            )}

            {RESUME_AVAILABLE && (
              <a
                href="/resume.pdf"
                download="Aditi_Resume.pdf"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-3 font-semibold transition-colors hover:border-purple-400 hover:text-purple-300"
              >
                <FileDown size={20} />
                Download Resume
              </a>
            )}
          </div>

          {!EMAIL && (
            <p className="mt-6 text-sm text-gray-500">
              Contact details will be available soon.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
