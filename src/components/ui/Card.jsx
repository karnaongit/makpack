// src/components/ui/Card.jsx
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const Card = forwardRef(function Card({ children, className = '', hoverable = true, ...props }, ref) {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hoverable ? { y: -8, transition: { duration: 0.3 } } : {}}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden ${className} ${
        hoverable ? 'card-hover' : ''
      }`}
      {...props}
    >
      {children}
    </motion.div>
  )
})

export default Card