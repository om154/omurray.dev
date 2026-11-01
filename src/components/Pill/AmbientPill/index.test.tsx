import { render } from '@testing-library/react';
import AmbientPill from '.';

describe('Ambient Pill', () => {
  it('should render', () => {
    render(<AmbientPill />);
  });

  describe('external link', () => {
    it('should have the correct url', () => {
      const { getByTestId } = render(<AmbientPill />);
      expect(getByTestId('glimpse-external-link')).toHaveAttribute(
        'href',
        'https://www.ambient.us/',
      );
    });

    it('should open in a new tab', () => {
      const { getByTestId } = render(<AmbientPill />);
      expect(getByTestId('glimpse-external-link')).toHaveAttribute(
        'target',
        '_blank',
      );
    });
  });
});
