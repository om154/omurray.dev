import cn from 'classnames';
import { ChildrenProp } from '../../utils/props';

interface SectionProps {
  alignTop?: boolean
  className?: string
}

const Section = (
  {
    children, className, alignTop = false
  }: SectionProps & ChildrenProp
) => (
  <div
    className={cn(
      'px-2 md:px-0 flex flex-col items-center border-b-0 box-border rounded-lg text-neutral-900',
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

export default Section;
