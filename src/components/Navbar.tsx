
import { useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"
      >
        {/* Personal branding */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
          onClick={() => setMenuOpen(false)}
        >
          aditi<span className="text-purple-400">.dev</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-gray-300 transition-colors hover:text-purple-400"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* GitHub link */}
        <a
          href="https://github.com/addy-commit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Aditi's GitHub profile"
          className="hidden items-center gap-2 text-sm text-gray-300 transition-colors hover:text-purple-400 md:inline-flex"
        >
          <Code2 size={19} />
          GitHub
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-lg p-2 text-white hover:bg-white/10 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 transition-colors hover:text-purple-400"
              >
                {item.name}
              </a>
            ))}

            <a
              href="https://github.com/addy-commit"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 text-purple-300"
            >
              <Code2 size={19} />
              GitHub Profile
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
