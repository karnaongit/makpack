import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/ui/AnimatedSection'
import ThreeDeeEffect from '../components/animations/ThreeDeeEffect'

const socialLinks = [
  { label: 'Instagram', url: 'https://www.instagram.com/makpackindia/', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61568966834618', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'Twitter', url: 'https://x.com/makpackindia', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/makpack-india', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { label: 'YouTube', url: 'https://youtube.com/@makpackindia?si=M7DeZKoG8WiFs4cF', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z M9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'About', href: '/about' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    productType: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        productType: '',
      })
    }, 3000)
  }

  const productTypes = [
    'Retail Bags',
    'Food Grade Bags',
    'Compostable Bags',
    'Custom Branded',
    'Gift Bags',
    'Bulk Orders',
    'Not Sure',
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-paper to-white">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted mb-8 max-w-3xl mx-auto">
              Have questions about our products? Need a custom quote? Our team is here to help 
              you find the perfect sustainable packaging solution.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Contact Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <ThreeDeeEffect>
                  <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <CheckCircle className="w-20 h-20 text-leaf mx-auto mb-6" />
                        <h2 className="mb-4">Thank You!</h2>
                        <p className="text-muted mb-8 max-w-md mx-auto">
                          Your message has been sent successfully. Our team will get back to you within 24 hours.
                        </p>
                        <button
                          onClick={() => setIsSubmitted(false)}
                          className="btn-primary"
                        >
                          Send Another Message
                        </button>
                      </motion.div>
                    ) : (
                      <>
                        <div className="flex items-center gap-3 mb-8">
                          <MessageSquare className="w-8 h-8 text-eco" />
                          <h2>Send Us a Message</h2>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-charcoal mb-2">
                                Your Name *
                              </label>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-eco focus:ring-2 focus:ring-eco/20 outline-none transition-all"
                                placeholder="John Doe"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-charcoal mb-2">
                                Email Address *
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-eco focus:ring-2 focus:ring-eco/20 outline-none transition-all"
                                placeholder="john@company.com"
                              />
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-charcoal mb-2">
                                Company Name
                              </label>
                              <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-eco focus:ring-2 focus:ring-eco/20 outline-none transition-all"
                                placeholder="Your Company"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-charcoal mb-2">
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-eco focus:ring-2 focus:ring-eco/20 outline-none transition-all"
                                placeholder="+91 9665385933"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-charcoal mb-2">
                              What type of packaging are you interested in?
                            </label>
                            <select
                              name="productType"
                              value={formData.productType}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-eco focus:ring-2 focus:ring-eco/20 outline-none transition-all"
                            >
                              <option value="">Select an option</option>
                              {productTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-charcoal mb-2">
                              Your Message *
                            </label>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              rows={5}
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-eco focus:ring-2 focus:ring-eco/20 outline-none transition-all resize-none"
                              placeholder="Tell us about your project..."
                            />
                          </div>
                          
                          <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary w-full flex items-center justify-center gap-2 py-4"
                          >
                            <Send className="w-5 h-5" />
                            Send Message
                          </motion.button>
                        </form>
                      </>
                    )}
                  </div>
                </ThreeDeeEffect>
              </AnimatedSection>
            </div>
            
            {/* Contact Info */}
            <div>
              <AnimatedSection delay={0.2}>
                <div className="space-y-6 mb-8">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-eco/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-eco" />
                      </div>
                      <div>
                        <h3 className="mb-1">Email Us</h3>
                        <a href="mailto:contact@makpackindia.com" className="text-muted hover:text-eco">
                          contact@makpackindia.com
                        </a>
                        <br />
                        <a href="mailto:exports@makpackindia.com" className="text-muted hover:text-eco">
                          exports@makpackindia.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-eco/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-eco" />
                      </div>
                      <div>
                        <h3 className="mb-1">Call Us</h3>
                        <a href="tel:+919665385933" className="text-muted hover:text-eco">
                          +91 9665385933
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-eco/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-eco" />
                      </div>
                      <div>
                        <h3 className="mb-1">Visit Us</h3>
                        <p className="text-muted">MIDC, WALUJ, Maharashtra, India</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-eco/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-eco" />
                      </div>
                      <div>
                        <h3 className="mb-1">Business Hours</h3>
                        <p className="text-muted">Mon-Fri: 9AM-6PM EST</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-eco">Follow Us</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 bg-gray-100 hover:bg-eco"
                        title={social.label}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 hover:text-white">
                          <path d={social.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-gradient-to-br from-eco/5 to-leaf/5 rounded-2xl p-6">
                  <h3 className="mb-4 text-charcoal">Quick Links</h3>
                  <div className="space-y-2">
                    {quickLinks.map((link, index) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        className="flex items-start gap-3 text-sm text-muted hover:text-eco transition-colors"
                      >
                        <div className="w-2 h-2 bg-leaf rounded-full mt-2 flex-shrink-0" />
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Keeping your old map style */}
      <section className="section-padding bg-paper">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-12">Find Our Headquarters</h2>
            <ThreeDeeEffect>
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(0,0,0,0.1)' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15010.368454192823!2d75.2183173!3d19.8572043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9b2ba3c81d03%3A0x407ca1788107b56e!2sMaKPack%20India!5e0!3m2!1sen!2sin!4v1733037317195!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MakPack India Location"
                  />
                </div>
                
                <div className="p-8 grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="mb-2 text-charcoal">Parking</h4>
                    <p className="text-sm text-muted">Free parking available in front of building</p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-charcoal">Public Transport</h4>
                    <p className="text-sm text-muted">Bus #12, #45 stop right outside</p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-charcoal">Accessibility</h4>
                    <p className="text-sm text-muted">Wheelchair accessible entrance and facilities</p>
                  </div>
                </div>
              </div>
            </ThreeDeeEffect>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-eco/10 to-leaf/10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our packaging experts. We'll help you find 
              the perfect sustainable solution for your brand.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+919665385933" className="btn-primary px-8">
                Call Now
              </a>
              <a href="mailto:contact@makpackindia.com" className="btn-secondary px-8">
                Email Us
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}