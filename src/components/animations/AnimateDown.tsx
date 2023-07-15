import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

const AnimateDown = ({ children, className, delay, duration }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          translateY: -10,
          opacity: 0
        },
        visible: {
          translateY: 0,
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

export default AnimateDown
