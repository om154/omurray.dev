import { render } from '@testing-library/react';
import PunchupPill from '.';

describe('Punchup Pill', () => {
  it('should render', () => {
    render(<PunchupPill />);
  });

  describe('external link', () => {
    it('should have the correct url', () => {
      const { getByTestId } = render(<PunchupPill />);
      expect(getByTestId('punchup-external-link')).toHaveAttribute('href', 'https://punchup.live/');
    });

    it('should open in a new tab', () => {
      const { getByTestId } = render(<PunchupPill />);
      expect(getByTestId('punchup-external-link')).toHaveAttribute('target', '_blank');
    });
  });
});
