import { motion } from 'framer-motion'
import { Quote, Target, Heart, Award, CheckCircle, Sparkles, TrendingUp, Globe, Users, Factory, Truck } from 'lucide-react'
import ParallaxImage from '../components/animations/ParallaxImage'
import AnimatedSection from '../components/ui/AnimatedSection'
import ThreeDeeEffect from '../components/animations/ThreeDeeEffect'
import { Link } from 'react-router-dom'

const founderImage = 'https://media.licdn.com/dms/image/v2/D4D03AQFCHT2MMqhSgg/profile-displayphoto-scale_200_200/B4DZsgWwAvK0AY-/0/1765774396365?e=2147483647&v=beta&t=85nMkxnwxVDEKmdZhlcfO_haJf98aRxlAI5mvG7qI8I'

const teamMembers = [
  { name: 'Alex Morgan', role: 'Founder & CEO', image: '/images/about/team1.jpg' },
  { name: 'Sarah Chen', role: 'Head of Sustainability', image: '/images/about/team2.jpg' },
  { name: 'Marcus Rivera', role: 'Production Director', image: '/images/about/team3.jpg' },
  { name: 'Elena Petrova', role: 'Design Lead', image: '/images/about/team4.jpg' },
]

const values = [
  { icon: Heart, title: 'Passion for Planet', description: 'Every decision made with environmental impact in mind' },
  { icon: Target, title: 'Quality First', description: 'Never compromising on material or craft quality' },
  { icon: Users, title: 'Customer Partnership', description: 'Working together to achieve sustainability goals' },
  { icon: Sparkles, title: 'Innovation Driven', description: 'Constantly exploring better materials and processes' },
]

export default function About() {
  return (
    <div className="pt-30">
      {/* Hero Section */}
      <section className="section-padding relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage 
            src="/images/about/about-hero.jpg"
            alt="MakPack team"
            speed={0.1}
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-white">
          <AnimatedSection>
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
              >
                <Sparkles className="w-4 h-4 text-leaf" />
                <span className="text-sm font-semibold">Our Story</span>
              </motion.div>
              
              <h1 className="mb-6">
                More Than Just <span className="text-gradient from-leaf to-eco">Packaging</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                MakPack was born from a simple belief: beautiful packaging shouldn't cost the earth. 
                We're a team of designers, environmentalists, and innovators committed to redefining 
                sustainable packaging.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary bg-leaf hover:bg-eco">
                  Join Our Mission
                </Link>
                <a href="#values" className="btn-secondary border-white text-white hover:bg-white hover:text-charcoal">
                  Our Values
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Section - Keeping your old vibe */}
      <section className="section-padding bg-paper">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ThreeDeeEffect>
                <div className="relative rounded-3xl overflow-hidden">
                  <ParallaxImage 
                    src={founderImage}
                    alt="Pawan Gawande - Founder of MakPack India"
                    speed={0.2}
                    className="h-[500px]"
                  />
                  {/* Overlay tag */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-xl">
                    <p className="font-bold text-sm text-leaf">Pawan Gawande</p>
                    <p className="text-xs text-muted">Founder & CEO</p>
                  </div>
                </div>
              </ThreeDeeEffect>
              
              <div>
                <div className="inline-flex items-center gap-2 text-eco mb-4">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-semibold">Meet the Founder</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-leaf">
                  Pawan Gawande
                </h2>

                <div className="relative mb-8">
                  <Quote size={36} className="absolute -top-2 -left-2 opacity-10 text-eco" />
                  <blockquote className="text-lg md:text-xl leading-relaxed pl-8 border-l-4 border-eco text-muted">
                    At MakPack, we take pride in manufacturing high-quality, customizable paper bags that cater
                    to businesses of all sizes. With options for personalized sizes and printing, our eco-friendly
                    bags help clients showcase their brands while contributing to a sustainable future.
                  </blockquote>
                </div>

                <p className="text-base leading-relaxed mb-6 text-muted">
                  Selling millions of bags each month, we are committed to innovation, quality, and reducing
                  the environmental impact of packaging. Our vision is to make sustainable packaging accessible
                  and affordable for every business in India.
                </p>

                <div className="flex flex-wrap gap-6">
                  <div>
                    <p className="font-numbers text-2xl font-bold text-eco">15+</p>
                    <p className="text-xs text-muted">Years Experience</p>
                  </div>
                  <div>
                    <p className="font-numbers text-2xl font-bold text-eco">1M+</p>
                    <p className="text-xs text-muted">Monthly Production</p>
                  </div>
                  <div>
                    <p className="font-numbers text-2xl font-bold text-eco">500+</p>
                    <p className="text-xs text-muted">Brands Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-white">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ThreeDeeEffect>
                <div className="relative rounded-3xl overflow-hidden">
                  <ParallaxImage 
                    src="/images/about/mission.jpg"
                    alt="Our mission"
                    speed={0.2}
                    className="h-[500px]"
                  />
                </div>
              </ThreeDeeEffect>
              
              <div>
                <div className="inline-flex items-center gap-2 text-eco mb-4">
                  <Target className="w-5 h-5" />
                  <span className="font-semibold">Our Mission</span>
                </div>
                
                <h2 className="mb-6">
                  To Make Sustainable Packaging <span className="text-gradient">Beautiful & Accessible</span>
                </h2>
                
                <p className="text-muted mb-6">
                  We're on a mission to eliminate single-use plastics from retail and food service 
                  by providing packaging solutions that businesses are proud to use and customers 
                  love to receive.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Replace 1 million plastic bags annually by 2025',
                    'Source 100% of materials from certified sustainable forests',
                    'Maintain carbon-neutral operations across all facilities',
                    'Educate 10,000+ businesses on sustainable packaging'
                  ].map((goal, index) => (
                    <motion.div
                      key={goal}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-leaf flex-shrink-0" />
                      <span className="text-muted">{goal}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Values */}
      <section className="section-padding bg-paper" id="values">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4">Our Core Values</h2>
              <p className="text-muted max-w-2xl mx-auto">
                These principles guide everything we do, from material selection to customer service.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white p-8 rounded-2xl text-center card-hover"
                  >
                    <div className="w-16 h-16 bg-eco/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-eco" />
                    </div>
                    <h3 className="mb-3">{value.title}</h3>
                    <p className="text-muted text-sm">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-r from-eco/10 to-leaf/10">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: TrendingUp, value: '500+', label: 'Happy Clients' },
                { icon: Award, value: '25K+', label: 'Projects Delivered' },
                { icon: Globe, value: '15+', label: 'Countries Served' },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl text-center shadow-lg"
                  >
                    <Icon className="w-12 h-12 text-eco mx-auto mb-4" />
                    <div className="text-4xl font-bold text-charcoal mb-2">{stat.value}</div>
                    <div className="text-muted font-medium">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}