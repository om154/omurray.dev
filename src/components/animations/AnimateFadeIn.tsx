import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
}

const AnimateFadeIn = ({ children, className, delay }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimateFadeIn
