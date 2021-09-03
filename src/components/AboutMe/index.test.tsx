import { render } from '@testing-library/react';
import AboutMe, { calculateAge } from '.';

describe('getAge', () => {
  it('should calculate age given a date in format DD-MM-YYYY', () => {
    const date = new Date();
    date.setFullYear(date.getUTCFullYear() - 21);

    const age = calculateAge(`${date.getUTCDay()}-${date.getUTCMonth()}-${date.getUTCFullYear()}`);
    expect(age).toEqual(21);
  });
});

describe('About Me', () => {
  it('should render', () => {
    const { getByText } = render(<AboutMe />);
    getByText(/About Me/);
  });
});
