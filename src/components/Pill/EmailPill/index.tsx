import cn from 'classnames';

interface EmailPillProps {
  className?: string
}

const EmailPill = ({ className }: EmailPillProps) => (
  <a href={`mailto:${process.env.REACT_APP_USER_EMAIL_ADDRESS}`} className={cn('inline-block px-3 py-2 font-bold bg-white rounded-lg shadow-md text-primary-900', className)}>
    <div className="flex items-center my-1">
      <span className="mr-1 leading-tight no-underline select-none text-md md:text-lg">
        📫
        {' '}
        {process.env.REACT_APP_USER_EMAIL_ADDRESS}
      </span>
    </div>
  </a>
);

EmailPill.defaultProps = {
  className: ''
};

export default EmailPill;
