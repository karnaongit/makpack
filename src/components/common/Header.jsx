import { useState, useEffect } from 'react'
import { Menu, X, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const navItems = [
  { name: 'Products', path: '/products' },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const socialLinks = [
  { label: 'Instagram', url: 'https://www.instagram.com/makpackindia/', icon: Instagram },
  { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61568966834618', icon: Facebook },
  { label: 'Twitter', url: 'https://x.com/makpackindia', icon: Twitter },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/makpack-india', icon: Linkedin },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      }
    }
  }

  return (
    <>
      {/* Top Contact Bar - From your previous project */}
      <div className="fixed top-0 left-0 w-full z-50 bg-charcoal text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Section - Contact Info */}
          <div className="flex items-center gap-4">
            <a href="mailto:contact@makpackindia.com" className="flex items-center gap-1 hover:text-leaf transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">contact@makpackindia.com</span>
            </a>
            <a href="tel:+919665385933" className="flex items-center gap-1 hover:text-leaf transition-colors">
              <Phone size={14} />
              <span className="hidden sm:inline">+91 9665385933</span>
            </a>
          </div>
          
          {/* Right Section - Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a 
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-leaf transition-colors"
                  title={social.label}
                >
                  <Icon size={14} />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-md' : 'bg-transparent'
      }`}>
        <div className="section-padding flex justify-between items-center py-4">
         <Link to="/" className="flex items-center gap-3 group">
            <div className="
                 p-2 rounded-lg
                transition-transform duration-300
                group-hover:rotate-12
            ">
                <img
                src={logo}
                alt="MakPack Logo"
                className="w-12 h-12 object-contain rounded-full"
                />
            </div>

            <span className="text-2xl font-bold text-charcoal">
                Mak<span className="text-eco">Pack</span>
            </span>
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.section ? (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className="text-muted hover:text-eco font-medium transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-leaf group-hover:w-full transition-all duration-300" />
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-muted hover:text-eco font-medium transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-leaf group-hover:w-full transition-all duration-300" />
                </Link>
              )
            ))}
            <button className="btn-primary">Get a Quote</button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-effect shadow-lg">
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                item.section ? (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.section)}
                    className="text-lg text-muted hover:text-eco py-2 border-b border-gray-100 text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-lg text-muted hover:text-eco py-2 border-b border-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <button className="btn-primary mt-4">Get a Quote</button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}