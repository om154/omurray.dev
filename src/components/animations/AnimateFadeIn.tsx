import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

const AnimateFadeIn = ({ children, className, delay, duration }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            delay,
            duration
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
