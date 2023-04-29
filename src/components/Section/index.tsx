import cn from 'classnames';
import { ChildrenProp } from '../../utils/props';

interface SectionProps {
  alignTop?: boolean
  className?: string
}

const Section = (
  {
    children, className, alignTop
  }: SectionProps & ChildrenProp
) => (
  <div
    className={cn(
      'flex flex-col items-center p-4 md:p-8 border-b-0 box-border',
      {
        'justify-center': !alignTop,
        'justify-start': alignTop,

      },
      className
    )}
  >
    {children}
  </div>
);

Section.defaultProps = {
  className: '',
  alignTop: false,
};

export default Section;
