import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import logo from '../../assets/logo.png'
const socialLinks = [
  { label: 'Instagram', url: 'https://www.instagram.com/makpackindia/', icon: Instagram },
  { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61568966834618', icon: Facebook },
  { label: 'Twitter', url: 'https://x.com/makpackindia', icon: Twitter },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/makpack-india', icon: Linkedin },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-leaf text-white">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
  <div className="bg-eco p-2 rounded-lg">
    <img
      src={logo}
      alt="MakPack Logo"
      className="w-6 h-6 object-contain"
    />
  </div>

  <span className="text-2xl font-bold">
    Mak<span className="text-kraft">Pack</span>
  </span>
</div>
            <p className="text-gray-400">
              Premium eco-friendly paper bags manufactured with precision in India.
              Packaging the future, preserving our planet.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a 
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-eco transition-colors"
                    title={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-kraft">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-kraft transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-kraft transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-gray-400 hover:text-kraft transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-kraft transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-kraft transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-kraft">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span>MIDC, WALUJ, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} />
                <a href="tel:+919665385933" className="hover:text-kraft transition-colors">
                  +91 9665385933
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                <a href="mailto:contact@makpackindia.com" className="hover:text-kraft transition-colors">
                  contact@makpackindia.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                <a href="mailto:exports@makpackindia.com" className="hover:text-kraft transition-colors">
                  exports@makpackindia.com
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-kraft">Find Us</h3>
            <div className="rounded-xl overflow-hidden border border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15010.368454192823!2d75.2183173!3d19.8572043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9b2ba3c81d03%3A0x407ca1788107b56e!2sMaKPack%20India!5e0!3m2!1sen!2sin!4v1733037317195!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MakPack India Location"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MakPack India. All rights reserved. Made with ♥ for a greener planet.</p>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 bg-gray-800 hover:bg-eco z-40"
      >
        <ArrowUp size={18} color="white" />
      </button>
    </footer>
  )
}