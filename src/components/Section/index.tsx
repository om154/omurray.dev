import cn from 'classnames';
import { ChildrenProp } from '../../utils/props';

interface SectionProps {
  style?: object
  alignTop?: boolean
  className?: string
}

const Section = (
  {
    children, className, style, alignTop
  }: SectionProps & ChildrenProp
) => (
  <section
    id="hero"
    className={cn(
      'flex flex-col items-center h-screen min-h-screen px-8 py-6 border-b-0 md:px-24 box-border',
      {
        'justify-center': !alignTop,
        'justify-start': alignTop
      },
      className
    )}
    // style={{ inset: 0, zIndex: -1 }}
    style={style}
  >
    {children}
  </section>
);

Section.defaultProps = {
  style: {},
  className: '',
  alignTop: false
};

export default Section;
