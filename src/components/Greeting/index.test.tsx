import { render } from '@testing-library/react';
import Greeting from '.';

describe('Greeting', () => {
  it('renders', () => {
    render(<Greeting />);
  });

  it('shows a welcoming greeting', () => {
    const { getByText } = render(<Greeting />);
    getByText(/Hey, my name is/);
    getByText(/Oliver/);
    getByText(/I'm a software engineer who loves building great products./);
  });
});
