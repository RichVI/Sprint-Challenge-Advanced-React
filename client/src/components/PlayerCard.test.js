import React from 'react';
import { render } from "@testing-library/react";
import { PlayerCard } from './PlayerCard';

// Test 1
test("render PlayerCard without crashing", ()=>{
    render(<PlayerCard />)
});

// Test 2
test("renders players text without crashing", () => {
    const { getByText } = render(<PlayerCard />);
  
    getByText(/Player Name/i);
    getByText(/Country/i);
    getByText(/Search/i);
  });

  //Test 3
test('should have text [player name]',  async ()=>{
    const {findByText} = await render(<PlayerCard />)
    findByText(/jUlIe eRtZ/i);
}) 