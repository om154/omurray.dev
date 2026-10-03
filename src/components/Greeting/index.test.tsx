import { render } from '@testing-library/react';
import Greeting from '.';

describe('Greeting', () => {
  it('renders', () => {
    render(<Greeting />);
  });

  it('shows a welcoming greeting', () => {
    const { getByRole } = render(<Greeting />);
    expect(getByRole('heading', { level: 1 })).toHaveTextContent("Hey, my name is Oliver 👋🏻 Welcome to my website! I'm a software engineer who loves building great products.");
  });
});
