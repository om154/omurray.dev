const EmailPill = () => (
  <a href={`mailto:${process.env.REACT_APP_USER_EMAIL_ADDRESS}`} className="inline-block px-3 py-2 font-bold rounded-lg shadow-md bg-white text-primary-900">
    <div className="flex items-center my-1">
      <span className="mr-1 leading-tight no-underline select-none text-md md:text-lg">
        📫
        {' '}
        {process.env.REACT_APP_USER_EMAIL_ADDRESS}
      </span>
    </div>
  </a>
);

export default EmailPill;
