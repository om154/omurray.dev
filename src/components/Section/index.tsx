import cn from 'classnames';
import { ChildrenProp } from '../../utils/props';

interface SectionProps {
  alignTop?: boolean
  className?: string
  fullScreen?: boolean
}

const Section = (
  {
    children, className, alignTop, fullScreen
  }: SectionProps & ChildrenProp
) => (
  <section
    className={cn(
      'flex flex-col items-center px-8 py-6 border-b-0 md:px-24 box-border',
      {
        'justify-center': !alignTop,
        'justify-start': alignTop,
        'h-screen min-h-screen': fullScreen
      },
      className
    )}
  >
    {children}
  </section>
);

Section.defaultProps = {
  className: '',
  alignTop: false,
  fullScreen: false
};

export default Section;
