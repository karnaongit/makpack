import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Leaf, Package, Users, Recycle, Globe, Shield, Truck, Palette, Award, IndianRupee, TreePine, Factory, Scissors, ClipboardCheck, Quote, Star, Tag, Ruler } from 'lucide-react'
import { Link } from 'react-router-dom'
import ParallaxImage from '../components/animations/ParallaxImage'
import AnimatedSection from '../components/ui/AnimatedSection'
import ThreeDeeEffect from '../components/animations/ThreeDeeEffect'

// Update bag image paths to public folder
const bagImages = [
  '/images/home/bbag_0.jpg',
  '/images/home/bbag_1.jpg',
  '/images/home/bbag_2.jpg',
  '/images/home/bbag_3.jpg',
  '/images/home/bbag_4.jpg',
  '/images/home/bbag_5.jpg',
  '/images/home/bbag_6.jpg',
]

// Rest of the Home.jsx code remains the same...
// Products data from your old website
const products = [
  {
    name: 'PB Small',
    nickname: 'Swiftie',
    dimensions: '155 x 90 x 215 mm',
    description: 'Compact and lightweight, perfect for quick trips or carrying essentials.',
    image: 'https://images.unsplash.com/photo-1590820077566-af4e557c1548?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
    category: 'Without Handle',
  },
  {
    name: 'PB Medium',
    nickname: 'Balancer',
    dimensions: '180 x 120 x 245 mm',
    description: 'Balanced size for work or short getaways with moderate storage needs.',
    image: 'https://images.unsplash.com/photo-1695245503558-5cdb37f49092?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
    category: 'Without Handle',
  },
  {
    name: 'PB Large',
    nickname: 'Maxy',
    dimensions: '215 x 130 x 290 mm',
    description: 'Maximum storage, great for long trips or heavy-duty tasks.',
    image: 'https://images.unsplash.com/photo-1693606780204-f70b72652fb0?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
    category: 'Without Handle',
  },
  {
    name: 'PBH Small',
    nickname: 'Trekker Mini',
    dimensions: '215 x 120 x 290 mm',
    description: 'Rugged and compact, ideal for quick outdoor adventures.',
    image: 'https://images.unsplash.com/photo-1639037593613-fe623e381f15?crop=entropy&cs=srgb&fm=jpg&q=85&w=600',
    category: 'With Handle',
  },
  {
    name: 'PBH Medium',
    nickname: 'Trailblazer',
    dimensions: '250 x 100 x 305 mm',
    description: 'Balanced size and durability for versatile outdoor activities.',
    image: 'https://images.pexels.com/photos/4440858/pexels-photo-4440858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'With Handle',
  },
  {
    name: 'PBH Large',
    nickname: 'Expeditioner',
    dimensions: '280 x 150 x 280 mm',
    description: 'Heavy-duty bag built for extended adventures and tough conditions.',
    image: 'https://images.pexels.com/photos/13431759/pexels-photo-13431759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'With Handle',
  },
]

// Stats data
const stats = [
  { icon: Package, value: '1M+', label: 'Bags Produced Monthly', suffix: '' },
  { icon: Users, value: '500+', label: 'Happy Clients', suffix: '' },
  { icon: Recycle, value: '100', label: 'Eco-Friendly', suffix: '%' },
  { icon: Globe, value: '10+', label: 'States Served', suffix: '' },
]

// Why Choose Us reasons
const reasons = [
  {
    icon: Leaf,
    title: 'Eco-Friendly Materials',
    description: 'All bags are made from 100% recyclable and biodegradable kraft paper, reducing environmental impact.',
  },
  {
    icon: Palette,
    title: 'Custom Printing',
    description: 'Full-color custom printing to showcase your brand. From logos to artwork, we bring your vision to life.',
  },
  {
    icon: IndianRupee,
    title: 'Best Market Rates',
    description: 'Competitive pricing without compromising quality. We offer the best rates for bulk orders.',
  },
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'Rigorous quality checks at every stage ensure our bags meet the highest standards of durability.',
  },
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    description: 'Reliable shipping across India. Fast turnaround times with tracking for every order.',
  },
  {
    icon: Award,
    title: 'Trusted by 500+ Brands',
    description: 'Restaurants, cafes, boutiques, and delivery services trust MakPack for their packaging needs.',
  },
]

// Process steps
const steps = [
  {
    icon: TreePine,
    title: 'Pulp Sourcing',
    description: 'We source high-quality, sustainably harvested kraft pulp from certified suppliers.',
    number: '01',
  },
  {
    icon: Factory,
    title: 'Eco-Processing',
    description: 'Advanced machines process the raw material into strong, flexible paper sheets.',
    number: '02',
  },
  {
    icon: Scissors,
    title: 'Precision Cutting',
    description: 'Computer-aided cutting ensures each bag meets exact size specifications.',
    number: '03',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Check',
    description: 'Every batch undergoes rigorous testing for strength, durability, and print quality.',
    number: '04',
  },
  {
    icon: Truck,
    title: 'Shipping',
    description: 'Packed securely and delivered on time across India and for export orders.',
    number: '05',
  },
]

export default function Home() {
  const bagRef = useRef(null)
  const [currentBagIndex, setCurrentBagIndex] = useState(0)
  const [leaves, setLeaves] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')

  // Initialize leaves animation
  useEffect(() => {
    const initialLeaves = [...Array(12)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      size: 16 + Math.random() * 12,
      rotation: Math.random() * 360,
    }))
    setLeaves(initialLeaves)

    // Floating animation for the bag
    const bag = bagRef.current
    if (!bag) return

    const animate = () => {
      const time = Date.now() / 1000
      const y = Math.sin(time * 0.5) * 20
      const rotate = Math.sin(time * 0.4) * 2
      
      if (bag.style) {
        bag.style.transform = `translateY(${y}px) rotate(${rotate}deg)`
      }
    }

    const interval = setInterval(animate, 16)
    return () => clearInterval(interval)
  }, [])

  // Auto-change bags every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBagIndex((prev) => (prev + 1) % bagImages.length)
      
      // Generate new leaves
      const newLeaves = [...Array(12)].map((_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 8 + Math.random() * 4,
        size: 30 + Math.random() * 12,
        rotation: Math.random() * 360,
      }))
      setLeaves(newLeaves)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const filteredProducts = activeFilter === 'All' ? products : products.filter((p) => p.category === activeFilter)

  return (
    <div className="pt-20">
      {/* Hero Section with floating bag animation */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'var(--makpack-bg)' }}>
        {/* Big Floating Bag Background */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          <div
            ref={bagRef}
            className="w-[700px] h-[900px] opacity-70"
            style={{ willChange: 'transform' }}
          >
            <img
              src={bagImages[currentBagIndex]}
              alt="Paper bag"
              className="w-full h-full object-contain drop-shadow-2xl transition-opacity duration-700"
              style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.2))' }}
            />
          </div>

          {/* Leaf particles */}
          <div className="absolute inset-0">
            {leaves.map((leaf) => (
              <div
                key={leaf.id}
                className="absolute animate-float"
                style={{
                  left: `${leaf.left}%`,
                  top: `${leaf.top}%`,
                  animationDelay: `${leaf.delay}s`,
                  animationDuration: `${leaf.duration}s`,
                }}
              >
                <Leaf
                  size={leaf.size}
                  className="text-green-600 opacity-20"
                  style={{
                    transform: `rotate(${leaf.rotation}deg)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <AnimatedSection>
            <div className="max-w-2xl relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-eco/10 px-4 py-2 rounded-full mb-6">
                <Leaf className="w-4 h-4 text-eco" />
                <span className="text-sm font-semibold text-eco">
                  100% Eco-Friendly Packaging
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-charcoal">
                Packaging that{' '}
                <span className="text-gradient">
                  Speaks
                </span>{' '}
                for Your Brand.
              </h1>
              
              <p className="text-lg text-muted mb-8 max-w-xl">
                Premium eco-friendly paper bags for restaurants, cafes, and
                delivery services. Manufactured with precision in India.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Request a Quote
                </Link>
                <a href="#products" className="btn-secondary">
                  Explore Products
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <a href="#stats" className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-charcoal">
              Scroll
            </span>
            <ArrowDown size={18} className="text-eco" />
          </a>
        </div>

        {/* Bag indicator dots */}
        <div className="absolute bottom-8 right-8 z-10 flex gap-2">
          {bagImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBagIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentBagIndex
                  ? 'bg-eco w-8'
                  : 'bg-leaf/50 hover:bg-leaf'
              }`}
              aria-label={`View bag ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="section-padding bg-charcoal text-white">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6" style={{ background: 'rgba(255,255,255,0.1)' }}>
                      <Icon size={28} className="text-kraft" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold mb-2 text-leaf">{stat.value}{stat.suffix}</div>
                    <p className="text-gray-300">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Products Section */}
      <section id="products" className="section-padding bg-white">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-leaf/10 text-leaf">
                Our Collection
              </span>
              <h2 className="text-4xl font-bold mb-6">
                Paper Bags for <span className="text-gradient">Every Need</span>
              </h2>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {['All', 'Without Handle', 'With Handle'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-eco text-white shadow-lg'
                      : 'bg-gray-100 text-muted hover:text-eco hover:bg-gray-50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <AnimatedSection key={product.name} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-paper rounded-2xl overflow-hidden card-hover"
                  >
                    {/* Product Image */}
                    <div className="relative h-64 overflow-hidden">
                      <ParallaxImage 
                        src={product.image} 
                        alt={product.name}
                        speed={0.2}
                        className="h-full w-full"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-eco text-white">
                        {product.category}
                      </span>
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-charcoal">{product.name}</h3>
                          <p className="text-sm text-eco font-medium">{product.nickname}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted text-sm mb-4">{product.description}</p>
                      
                      <div className="flex items-center gap-2 text-muted">
                        <Ruler size={14} />
                        <span className="text-sm">{product.dimensions}</span>
                      </div>
                      
                      <button className="btn-primary w-full mt-4">
                        <Tag size={16} />
                        Get Quote
                      </button>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-muted mb-6">
                Need a custom size or printing? We've got you covered.
              </p>
              <a href="tel:+919665385933" className="btn-primary">
                <Tag size={18} /> Customizable Bags Available
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="section-padding bg-paper">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-leaf/10 text-leaf">
                Why MakPack?
              </span>
              <h2 className="text-4xl font-bold mb-6">
                Built Different. <span className="text-gradient">Built Better.</span>
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                We combine cutting-edge manufacturing with sustainable practices to deliver packaging that elevates your brand.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white p-8 rounded-2xl shadow-lg card-hover"
                  >
                    <div className="w-14 h-14 bg-eco/10 rounded-2xl flex items-center justify-center mb-6">
                      <Icon size={26} className="text-eco" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-charcoal">{reason.title}</h3>
                    <p className="text-muted">{reason.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding bg-white">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-leaf/10 text-leaf">
                Manufacturing Process
              </span>
              <h2 className="text-4xl font-bold mb-6">
                From <span className="text-gradient">Pulp to Packaging</span>
              </h2>
            </div>
            
            <div className="relative">
              <div className="flex flex-col md:flex-row gap-8">
                {steps.map((step, i) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.2 }}
                      className="flex-1 bg-paper p-8 rounded-2xl shadow-lg relative"
                    >
                      <div className="absolute top-4 right-4 text-5xl font-bold text-eco/10">{step.number}</div>
                      <div className="w-14 h-14 bg-eco/10 rounded-2xl flex items-center justify-center mb-6">
                        <Icon size={28} className="text-eco" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-charcoal">{step.title}</h3>
                      <p className="text-muted">{step.description}</p>
                      
                      {i < steps.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-eco/30" />
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-eco/10 to-leaf/10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Ready to Elevate Your Packaging?</h2>
            <p className="text-lg text-muted mb-8">
              Join 500+ brands who trust MakPack for sustainable, beautiful packaging solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary px-8">
                Request Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a href="tel:+919665385933" className="btn-secondary px-8">
                Call: +91 9665385933
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}