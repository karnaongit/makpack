// src/components/ui/Button.jsx
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const Button = forwardRef(function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon: Icon,
  iconPosition = 'right',
  ...props 
}, ref) {
  const baseClasses = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2'
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white',
    ghost: 'text-charcoal hover:bg-charcoal/10'
  }
  
  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </motion.button>
  )
})

export default Button