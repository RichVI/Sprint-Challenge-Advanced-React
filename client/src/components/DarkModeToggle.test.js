import React from 'react';
import { render } from '@testing-library/react';
import { DarkModeToggle } from './DarkModeToggle';

// Test 1
test("render DarkModeToggle without crashing", ()=>{
    render(<DarkModeToggle />)
});

// Test 2
test('toggle dark mode element', () => {
    const { getByTestId } = render(<DarkModeToggle />);
    getByTestId("toggle-element");
  })
