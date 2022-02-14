import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders a heading', () => {
  render(<App />);

  expect(screen.getByText('FizzBuzz React App')).toBeInTheDocument();
});

test('counter has initial value', () => {
  render(<App />);

  expect(screen.getByTestId('counter')).toHaveTextContent('1');
});

test('renders a + button', () => {
  render(<App />);

  expect(screen.getByText('+')).toBeInTheDocument();
});

test('plus button increments by 1', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: '+' })
  fireEvent.click(button)
  expect(screen.getByTestId('counter')).toHaveTextContent('2');
});

test('renders a - button', () => {
  render(<App />);

  expect(screen.getByText('-')).toBeInTheDocument();
});

test('minus button decrements by 1', () => {
  render(<App />);

  const plusButton = screen.getByRole('button', { name: '+' })
  fireEvent.click(plusButton)
  expect(screen.getByTestId('counter')).toHaveTextContent('2');

  const minusButton = screen.getByRole('button', { name: '-' })
  fireEvent.click(minusButton)
  expect(screen.getByTestId('counter')).toHaveTextContent('1');
});

test('renders a result', () => {
  render(<App />);

  expect(screen.getByTestId('result')).toHaveTextContent('1');
});

test('result returns Fizz', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: '+' })
  fireEvent.click(button)
  fireEvent.click(button)
  expect(screen.getByTestId('counter')).toHaveTextContent('3')
  expect(screen.getByTestId('result')).toHaveTextContent('Fizz')
})
