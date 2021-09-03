import { render } from '@testing-library/react';
import EmailPill from '.';

describe('Email Pill', () => {
  beforeEach(() => {
    process.env.REACT_APP_USER_EMAIL_ADDRESS = 'my@email.com';
  });

  it('should render', () => {
    render(<EmailPill />);
  });

  describe('when email address environment variable is defined', () => {
    it('should not render the body of the pill', () => {
      process.env.REACT_APP_USER_EMAIL_ADDRESS = 'my@email.com';
      const { getByText } = render(<EmailPill />);

      getByText(/📫 my@email.com/);
    });
  });

  describe('when email address environment variable is undefined', () => {
    it('should not render the body of the pill', () => {
      delete process.env.REACT_APP_USER_EMAIL_ADDRESS;
      const { queryByText } = render(<EmailPill />);

      const incorrectEmail = queryByText(/📫 undefined/);
      expect(incorrectEmail).not.toBeInTheDocument();
    });
  });
});
