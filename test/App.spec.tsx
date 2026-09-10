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

  it('opens the strategy view after selecting a goal', () => {
    const screen = render(<App />);

    fireEvent.press(screen.getByTestId('tile-get-started'));
    fireEvent.press(screen.getByTestId('goal-clarity'));

    expect(screen.getByText('Choose your strategy.')).toBeTruthy();
    expect(screen.getByText('Clear, direct answers')).toBeTruthy();
    expect(screen.getByTestId('strategy-clarity')).toBeTruthy();
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

  it('starts a rehearsal after selecting a strategy', () => {
    const screen = render(<App />);

    fireEvent.press(screen.getByTestId('tile-get-started'));
    fireEvent.press(screen.getByTestId('goal-clarity'));

    const strategy = screen.getByTestId('strategy-clarity');

    fireEvent.press(strategy);
    fireEvent.press(strategy);

    expect(screen.getByText('Question 1 of 3')).toBeTruthy();
    expect(
      screen.getByText(
        'Tell me about a time you solved a difficult problem.',
      ),
    ).toBeTruthy();
    expect(screen.getByText('Clear, direct answers')).toBeTruthy();
  });

  it('progresses through all rehearsal questions and reaches completion', () => {
    const screen = render(<App />);

    fireEvent.press(screen.getByTestId('tile-get-started'));
    fireEvent.press(screen.getByTestId('goal-clarity'));

    const strategy = screen.getByTestId('strategy-clarity');
    fireEvent.press(strategy);
    fireEvent.press(strategy);

    const nextQuestion = screen.getByText(
      'Take your time. Focus on the main point.',
    );

    expect(screen.getByText('Question 1 of 3')).toBeTruthy();

    fireEvent.press(nextQuestion);

    expect(screen.getByText('Question 2 of 3')).toBeTruthy();
    expect(
      screen.getByText('What did you learn from that experience?'),
    ).toBeTruthy();

    fireEvent.press(
      screen.getByText('Take your time. Focus on the main point.'),
    );

    expect(screen.getByText('Question 3 of 3')).toBeTruthy();
    expect(
      screen.getByText('How would you approach a similar problem today?'),
    ).toBeTruthy();

    fireEvent.press(
      screen.getByText('Take your time. Focus on the main point.'),
    );

    expect(screen.getByText('REHEARSAL COMPLETE')).toBeTruthy();
    expect(screen.getByText('Nice work.')).toBeTruthy();
    expect(
      screen.getByText(
        'You completed all 3 questions in your Clear, direct answers.',
      ),
    ).toBeTruthy();
  });

  it('moves from completion to review and selects an improvement', () => {
    const screen = render(<App />);

    fireEvent.press(screen.getByTestId('tile-get-started'));
    fireEvent.press(screen.getByTestId('goal-clarity'));

    const strategy = screen.getByTestId('strategy-clarity');
    fireEvent.press(strategy);
    fireEvent.press(strategy);

    fireEvent.press(
      screen.getByText('Take your time. Focus on the main point.'),
    );
    fireEvent.press(
      screen.getByText('Take your time. Focus on the main point.'),
    );
    fireEvent.press(
      screen.getByText('Take your time. Focus on the main point.'),
    );

    fireEvent.press(screen.getByText('Next: review your rehearsal.'));

    expect(screen.getByText('REVIEW')).toBeTruthy();
    expect(screen.getByText('Review your rehearsal.')).toBeTruthy();
    expect(screen.getByText('Evidence to consider')).toBeTruthy();

    fireEvent.press(screen.getByText('Main point'));

    expect(
      screen.getByText('Improvement selected: Main point'),
    ).toBeTruthy();

    fireEvent.press(screen.getByText('Main point'));

    expect(screen.getByText('IMPROVEMENT DECISION')).toBeTruthy();
    expect(screen.getByText('Improve one thing.')).toBeTruthy();
    expect(screen.getByText('Retry with Main point.')).toBeTruthy();
  });

  it('retries the rehearsal from the improvement decision', () => {
    const screen = render(<App />);

    fireEvent.press(screen.getByTestId('tile-get-started'));
    fireEvent.press(screen.getByTestId('goal-clarity'));

    const strategy = screen.getByTestId('strategy-clarity');
    fireEvent.press(strategy);
    fireEvent.press(strategy);

    fireEvent.press(
      screen.getByText('Take your time. Focus on the main point.'),
    );
    fireEvent.press(
      screen.getByText('Take your time. Focus on the main point.'),
    );
    fireEvent.press(
      screen.getByText('Take your time. Focus on the main point.'),
    );

    fireEvent.press(screen.getByText('Next: review your rehearsal.'));
    fireEvent.press(screen.getByText('Main point'));
    fireEvent.press(screen.getByText('Main point'));

    fireEvent.press(screen.getByText('Retry with Main point.'));

    expect(screen.getByText('Question 1 of 3')).toBeTruthy();
    expect(
      screen.getByText(
        'Tell me about a time you solved a difficult problem.',
      ),
    ).toBeTruthy();
  });
});
