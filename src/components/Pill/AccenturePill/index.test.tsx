import { render } from '@testing-library/react';
import AccenturePill from '.';

describe('Accenture Pill', () => {
  it('should render', () => {
    render(<AccenturePill />);
  });

  describe('external link', () => {
    it('should have the correct url', () => {
      const { getByTestId } = render(<AccenturePill />);
      expect(getByTestId('accenture-external-link')).toHaveAttribute('href', 'https://www.accenture.com/');
    });

    it('should open in a new tab', () => {
      const { getByTestId } = render(<AccenturePill />);
      expect(getByTestId('accenture-external-link')).toHaveAttribute('target', '_blank');
    });
  });
});
