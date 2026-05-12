import { CSSProperties, ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

const AnimateDown = ({ children, className, delay, duration }: Props) => {
  const style: CSSProperties = {}
  if (delay)    (style as Record<string, string>)['--anim-delay']    = `${delay * 1000}ms`
  if (duration) (style as Record<string, string>)['--anim-duration'] = `${duration}s`

  return (
    <div style={style} className={`animate-fade-down ${className ?? ''}`}>
      {children}
    </div>
  )
}

export default AnimateDown
