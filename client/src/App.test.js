import React from 'react';
import { render } from '@testing-library/react'
import { App } from './App';

// Test 1
test("renders App without crashing", () => {
  render(<App />);
});

// Test 2
test('Get player card title', () => {
  const { getByText } = render(<App />);
  getByText(/Player Card/i);
  });

