   
import { ArrowUp } from 'lucide-react'


const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/addy-commit',
  },
]


function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        
<p className="text-center text-sm text-gray-400">
  © {new Date().getFullYear()} Aditi Mitra.
  Built with React, TypeScript & Tailwind CSS.
</p>


        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition-colors hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-purple-400 hover:text-purple-400"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
 