import { render } from '@testing-library/react';
import GlimpsePill from '.';

describe('Shippit Pill', () => {
  it('should render', () => {
    render(<GlimpsePill />);
  });

  describe('external link', () => {
    it('should have the correct url', () => {
      const { getByTestId } = render(<GlimpsePill />);
      expect(getByTestId('glimpse-external-link')).toHaveAttribute('href', 'https://www.joinglimpse.com/');
    });

    it('should open in a new tab', () => {
      const { getByTestId } = render(<GlimpsePill />);
      expect(getByTestId('glimpse-external-link')).toHaveAttribute('target', '_blank');
    });
  });
});
