import { render } from '@testing-library/react';
import ShippitPill from '.';

describe('Shippit Pill', () => {
  it('should render', () => {
    render(<ShippitPill />);
  });

  describe('external link', () => {
    it('should have the correct url', () => {
      const { getByTestId } = render(<ShippitPill />);
      expect(getByTestId('shippit-external-link')).toHaveAttribute('href', 'https://www.shippit.com/');
    });

    it('should open in a new tab', () => {
      const { getByTestId } = render(<ShippitPill />);
      expect(getByTestId('shippit-external-link')).toHaveAttribute('target', '_blank');
    });
  });
});
