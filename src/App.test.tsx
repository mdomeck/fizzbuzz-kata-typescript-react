import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders a heading', () => {
  render(<App />);

  expect(screen.getByText('FizzBuzz React App')).toBeInTheDocument();
});

test('counter has initial value', () => {
  render(<App />);

  expect(screen.getByText('1')).toBeInTheDocument();
});

test('renders a + button', () => {
  render(<App />);

  expect(screen.getByText('+')).toBeInTheDocument();
});

test('plus button increments by 1', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: '+' })
  fireEvent.click(button)
  expect(screen.getByText('2')).toBeInTheDocument();
});
