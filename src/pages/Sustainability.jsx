import { motion } from 'framer-motion'
import { Leaf, Trees, Recycle, Droplets, Factory, Truck, Target, Globe, Sprout, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import ParallaxImage from '../components/animations/ParallaxImage'
import AnimatedSection from '../components/ui/AnimatedSection'
import ThreeDeeEffect from '../components/animations/ThreeDeeEffect'

const milestones = [
  { year: '2020', title: 'Company Founded', description: 'Started with a mission for sustainable packaging' },
  { year: '2021', title: 'FSC Certification', description: 'Achieved Forest Stewardship Council certification' },
  { year: '2022', title: 'Carbon Neutral', description: 'Became a carbon-neutral operation' },
  { year: '2023', title: '100% Renewable', description: 'Switched to 100% renewable energy' },
  { year: '2024', title: 'Zero Waste Goal', description: 'Aiming for zero waste to landfill' },
]

const certifications = [
  { icon: Award, title: 'FSC Certified', description: 'Responsibly sourced materials' },
  { icon: Recycle, title: '100% Recyclable', description: 'Complete circular lifecycle' },
  { icon: Leaf, title: 'Carbon Neutral', description: 'Carbon offset for all shipments' },
  { icon: Droplets, title: 'Water-Based Inks', description: 'Non-toxic, eco-friendly printing' },
]

export default function Sustainability() {
  return (
    <div className="pt-30">
      {/* Hero Section */}
      <section className="section-padding relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage 
            src="/images/about/sustainability-hero.jpg"
            alt="Sustainable forest"
            speed={0.1}
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-charcoal to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-charcoal to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-white">
          <AnimatedSection>
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
              >
                <Globe className="w-5 h-5 text-leaf" />
                <span className="font-semibold">Our Sustainability Journey</span>
              </motion.div>
              
              <h1 className="mb-6">
                Packaging with a <span className="text-gradient from-leaf to-eco">Purpose</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                At MakPack, sustainability isn't just a feature—it's our foundation. 
                We're committed to creating beautiful packaging that gives back to our planet.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <a href="#impact" className="btn-primary bg-leaf hover:bg-eco">
                  Our Impact
                </a>
                <Link to="/products" className="btn-secondary border-white text-white hover:bg-white hover:text-charcoal">
                  Sustainable Products
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="mb-4">Our Environmental Impact</h2>
              <p className="text-muted max-w-2xl mx-auto">
                Every MakPack bag contributes to a healthier planet. Here's what we've achieved together.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { value: '500K+', label: 'Trees Planted', icon: Trees, color: 'text-eco' },
              { value: '1.2M', label: 'Plastic Bags Replaced', icon: Recycle, color: 'text-leaf' },
              { value: '85%', label: 'Less Water Used', icon: Droplets, color: 'text-blue-500' },
              { value: '100%', label: 'Renewable Energy', icon: Factory, color: 'text-orange-500' },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-paper p-8 rounded-2xl text-center card-hover"
                >
                  <div className={`w-16 h-16 bg-${stat.color.split('-')[1]}/10 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-4xl font-bold text-charcoal mb-2">{stat.value}</div>
                  <div className="text-muted font-medium">{stat.label}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-gradient-to-b from-paper to-white">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-16">Our Circular Process</h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-eco via-leaf to-kraft" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative mb-16 lg:mb-24 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:ml-1/2'}`}
                >
                  <ThreeDeeEffect className={`bg-white p-8 rounded-2xl shadow-xl ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                    <div className={`flex ${index % 2 === 0 ? 'lg:justify-end' : ''} items-center gap-4 mb-4`}>
                      <div className="w-14 h-14 bg-eco/10 rounded-full flex items-center justify-center">
                        <div className="text-2xl font-bold text-eco">{milestone.year}</div>
                      </div>
                      <h3 className="text-xl">{milestone.title}</h3>
                    </div>
                    <p className="text-muted">{milestone.description}</p>
                  </ThreeDeeEffect>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute top-8 w-6 h-6 bg-white rounded-full border-4 border-eco shadow-lg"
                    style={{ 
                      [index % 2 === 0 ? 'right' : 'left']: '-41px',
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-charcoal text-white" id="impact">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4">Our Certifications & Standards</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We adhere to the highest environmental standards and hold multiple certifications.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 text-center card-hover"
                >
                  <div className="w-16 h-16 bg-eco/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <cert.icon className="w-8 h-8 text-leaf" />
                  </div>
                  <h3 className="mb-3">{cert.title}</h3>
                  <p className="text-gray-400 text-sm">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Future Goals */}
      <section className="section-padding bg-gradient-to-r from-eco/5 to-leaf/5">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <Sprout className="w-16 h-16 text-eco mx-auto mb-6" />
            <h2 className="mb-6">Our Future Goals</h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              By 2025, we aim to achieve zero waste across all operations, 
              implement full traceability for all materials, and help our 
              customers eliminate single-use plastics entirely.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {[
                { value: '100%', label: 'Compostable Products' },
                { value: '0', label: 'Waste to Landfill' },
                { value: '100%', label: 'Supply Chain Traceability' },
              ].map((goal, index) => (
                <motion.div
                  key={goal.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg min-w-[200px]"
                >
                  <div className="text-3xl font-bold text-eco mb-2">{goal.value}</div>
                  <div className="text-muted font-medium">{goal.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}