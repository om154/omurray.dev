import cn from 'classnames';
import Link from 'next/link'

interface EmailPillProps {
  className?: string
}

const EmailPill = ({ className }: EmailPillProps) => {
  if (process.env.NEXT_PUBLIC__USER_EMAIL_ADDRESS === undefined) return null;

  return (
    <Link href={`mailto:${process.env.NEXT_PUBLIC__USER_EMAIL_ADDRESS}`} className={cn('inline-block px-3 py-2 font-bold bg-white rounded-lg shadow-md text-primary-900', className)}>
      <div className="flex items-center my-1">
        <span className="mr-2 font-serif leading-tight no-underline select-none font-regular text-md md:text-lg">
          📫
        </span>
        <span className="mr-1 font-serif leading-tight no-underline select-none font-regular text-md md:text-lg">
          { `${process.env.NEXT_PUBLIC__USER_EMAIL_ADDRESS}`}
        </span>
      </div>
    </Link>
  );
};

EmailPill.defaultProps = {
  className: ''
};

export default EmailPill;
