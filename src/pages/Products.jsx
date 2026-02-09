import { motion } from 'framer-motion'
import { ShoppingBag, Leaf, Recycle, Package, Tag, Star, ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ParallaxImage from '../components/animations/ParallaxImage'
import AnimatedSection from '../components/ui/AnimatedSection'
import ThreeDeeEffect from '../components/animations/ThreeDeeEffect'

const products = [
  {
    id: 1,
    name: 'Eco Retail Bags',
    category: 'Premium Collection',
    price: 'From $0.85',
    description: 'Elegant kraft paper bags with cotton handles for boutique stores',
    features: ['100% Recyclable', 'Custom Printing', 'Reinforced Bottom', 'Natural Finish'],
    icon: ShoppingBag,
    image: '/images/products/retail-bag.jpg',
    bestSeller: true,
    ecoRating: 5,
  },
  {
    id: 2,
    name: 'Food Grade Bags',
    category: 'Food Safe',
    price: 'From $0.65',
    description: 'Grease-resistant bags perfect for takeaway & bakery items',
    features: ['FDA Approved', 'Grease Resistant', 'Microwave Safe', 'Oil Proof'],
    icon: Package,
    image: '/images/products/food-bag.jpg',
    bestSeller: false,
    ecoRating: 4,
  },
  {
    id: 3,
    name: 'Compostable Bags',
    category: 'Zero Waste',
    price: 'From $1.20',
    description: 'Fully compostable bags that return to earth in 90 days',
    features: ['90-Day Compost', 'Plant-Based', 'Home Compostable', 'Water Soluble Ink'],
    icon: Leaf,
    image: '/images/products/compostable-bag.jpg',
    bestSeller: true,
    ecoRating: 5,
  },
  {
    id: 4,
    name: 'Custom Branded Bags',
    category: 'Bespoke',
    price: 'Custom Quote',
    description: 'Complete customization with your brand identity and messaging',
    features: ['Custom Sizing', 'Full Color Print', 'Brand Logo', 'Unlimited Designs'],
    icon: Recycle,
    image: '/images/products/custom-bag.jpg',
    bestSeller: false,
    ecoRating: 4,
  },
  {
    id: 5,
    name: 'Luxury Gift Bags',
    category: 'Premium Collection',
    price: 'From $2.50',
    description: 'Premium gift bags with satin ribbons and embossed details',
    features: ['Embossed Finish', 'Satin Ribbons', 'Tissue Lined', 'Gift Card Slot'],
    icon: Star,
    image: '/images/products/gift-bag.jpg',
    bestSeller: true,
    ecoRating: 4,
  },
  {
    id: 6,
    name: 'Bulk Order Bags',
    category: 'Commercial',
    price: 'From $0.35',
    description: 'Cost-effective solution for high-volume retail needs',
    features: ['Bulk Pricing', 'Fast Production', 'Standard Sizes', 'Quick Ship'],
    icon: Tag,
    image: '/images/products/bulk-bag.jpg',
    bestSeller: false,
    ecoRating: 3,
  },
]

const categories = [
  'All Products',
  'Premium Collection',
  'Food Safe',
  'Zero Waste',
  'Bespoke',
  'Commercial'
]

export default function Products() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-b from-paper via-white to-kraft/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-leaf/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-eco/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full mb-6"
                >
                  <Leaf className="w-4 h-4 text-eco" />
                  <span className="text-sm font-semibold text-eco">Sustainable Packaging</span>
                </motion.div>
                
                <h1 className="mb-6">
                  Our <span className="text-gradient">Product</span> Collection
                </h1>
                
                <p className="text-xl text-muted mb-8 max-w-3xl mx-auto">
                  Discover our range of eco-friendly paper bags, each designed with sustainability 
                  and style in mind. From retail to restaurants, we have the perfect solution.
                </p>
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center mb-16">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      index === 0 
                        ? 'bg-eco text-white shadow-lg' 
                        : 'bg-white text-muted hover:text-eco hover:bg-white/80 shadow'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -12 }}
                  className="bg-paper rounded-3xl overflow-hidden card-hover h-full flex flex-col"
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ParallaxImage 
                      src={product.image} 
                      alt={product.name}
                      speed={0.2}
                      className="h-full w-full"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.bestSeller && (
                        <div className="bg-leaf text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Best Seller
                        </div>
                      )}
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-charcoal">
                        {product.category}
                      </div>
                    </div>
                    
                    {/* Eco Rating */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-2xl">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Leaf
                            key={i}
                            className={`w-4 h-4 ${
                              i < product.ecoRating ? 'text-eco fill-eco' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-4">
                      <h3 className="mb-2">{product.name}</h3>
                      <p className="text-muted text-sm mb-3">{product.description}</p>
                    </div>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6 flex-grow">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-leaf rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Price and CTA */}
                    {/* <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <div className="text-2xl font-bold text-eco">{product.price}</div>
                        <div className="text-xs text-muted">per unit</div>
                      </div>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="btn-primary flex items-center gap-2"
                      >
                        Details
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </div> */}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-gradient-to-b from-white to-paper">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-12">Compare Our Collections</h2>
            
            <div className="overflow-x-auto rounded-2xl shadow-xl">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-eco/10">
                    <th className="p-6 text-left font-semibold text-charcoal">Feature</th>
                    {products.slice(0, 4).map(product => (
                      <th key={product.id} className="p-6 text-center">
                        <div className="flex flex-col items-center">
                          <product.icon className="w-8 h-8 text-eco mb-2" />
                          <span className="font-semibold">{product.name}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Eco Rating', '5/5', '4/5', '5/5', '4/5'],
                    ['Custom Printing', '✓', '✓', '✓', '✓'],
                    ['Compostable', '✓', '✗', '✓', '✓'],
                    ['Food Safe', '✓', '✓', '✓', '✓'],
                    ['Lead Time', '7-10 days', '5-7 days', '10-14 days', '14-21 days'],
                  ].map(([feature, ...values], index) => (
                    <tr key={feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 font-medium text-charcoal">{feature}</td>
                      {values.map((value, i) => (
                        <td key={i} className="p-4 text-center">
                          <span className={value.includes('✓') ? 'text-eco font-bold' : value.includes('✗') ? 'text-red-400' : ''}>
                            {value}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA Section */}
           {/* CTA Section */}
      <section className="section-padding bg-charcoal text-white">
        <AnimatedSection>
          <ThreeDeeEffect className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-eco/20 to-leaf/20 rounded-3xl p-12 text-center relative overflow-hidden">
              {/* Fixed background pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#7DBA28">
                    <circle cx="3" cy="3" r="1"/>
                    <circle cx="13" cy="13" r="1"/>
                  </g>
                </svg>
              </div>
              
              <div className="relative z-10">
                <h2 className="mb-6">Need Custom Packaging Solutions?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Our design team can create bespoke paper bags tailored to your brand's 
                  exact specifications and sustainability goals.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/contact" className="btn-primary bg-white text-charcoal hover:bg-gray-100 px-8">
                    Request Custom Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <a href="tel:+15551234567" className="btn-secondary border-white text-white hover:bg-white hover:text-charcoal px-8">
                    Call Our Experts
                  </a>
                </div>
              </div>
            </div>
          </ThreeDeeEffect>
        </AnimatedSection>
      </section>
    </div>
  )
}