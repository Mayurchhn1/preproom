import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import * as React from 'react';

import {App} from '../src/App';

describe('App', () => {
  it('matches snapshot', () => {
    const screen = render(<App />);
    expect(screen).toMatchSnapshot();
  });

  it('renders all tiles', () => {
    const screen = render(<App />);
    expect(screen.getByTestId('tile-home')).toBeTruthy();
    expect(screen.getByTestId('tile-get-started')).toBeTruthy();
    expect(screen.getByTestId('tile-debug')).toBeTruthy();
    expect(screen.getByTestId('tile-learn-more')).toBeTruthy();
  });

  it('opens the goal view from Get Started', () => {
    const screen = render(<App />);

    expect(screen.getByText('Practice before\nit matters.')).toBeTruthy();

    fireEvent.press(screen.getByTestId('tile-get-started'));

    expect(screen.getByText('Set your goal.')).toBeTruthy();
    expect(
      screen.getByText(
        'Choose what you want to improve in your next interview rehearsal.',
      ),
    ).toBeTruthy();
  });
});
