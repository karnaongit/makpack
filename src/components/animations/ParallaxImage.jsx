import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxImage({ src, alt = '', speed = 0.5, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed])
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`overflow-hidden rounded-2xl ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
    </motion.div>
  )
}