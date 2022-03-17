import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders a heading', () => {
  render(<App />);

  expect(screen.getByText('FizzBuzz React App')).toBeInTheDocument();
});

test('counter has initial value', () => {
  render(<App />);

  expect(screen.getAllByText('1')).toHaveLength(2)
});

test('renders a + button', () => {
  render(<App />);

  expect(screen.getByText('+')).toBeInTheDocument();
});

test('plus button increments by 1', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: '+' })
  fireEvent.click(button)
  expect(screen.getAllByText('2')).toHaveLength(2)
});

test('renders a - button', () => {
  render(<App />);

  expect(screen.getByText('-')).toBeInTheDocument();
});

test('minus button decrements by 1', () => {
  render(<App initialCount={2} />);

  const minusButton = screen.getByRole('button', { name: '-' })
  userClick(minusButton, 1)
  expect(screen.getAllByText('1')).toHaveLength(2)
});

test('renders a result', () => {
  render(<App />);

  expect(screen.getAllByText('1')).toHaveLength(2)
});

test('result returns Fizz', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: '+' })
  userClick(button, 2)
  expect(screen.getByText('3')).toBeInTheDocument()
  expect(screen.getByText('Fizz')).toBeInTheDocument()
})

test('result returns Buzz', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: '+' })
  userClick(button, 4)
  expect(screen.getByText('5')).toBeInTheDocument()
  expect(screen.getByText('Buzz')).toBeInTheDocument()
})

test('result returns FizzBuzz', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: '+' })

  userClick(button, 14)

  expect(screen.getByText('15')).toBeInTheDocument()
  expect(screen.getByText('FizzBuzz')).toBeInTheDocument()
})

function userClick(element: HTMLElement, times: number) {
  for (let i = 0; i < times; i++) {
    fireEvent.click(element)
  }
}
