import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Display from './Display';


describe('Display tests', () => {
  it('Display was rendered', () => {
    render(<Display />)
    const history = screen.getByTestId('history')
    const expression = screen.getByTestId('expression')
    expect(expression).toBeInTheDocument()
    expect(history).toBeInTheDocument()
  })
  it('Display was rendered without props', () => {
    render(<Display />);
    const history = screen.getByTestId('history');
    const expression = screen.getByTestId('expression');
    expect(expression.textContent).toBe('0');
    expect(history.textContent).toBe('');
  })
  it('Display was rendered with props', () => {
    render(<Display displayValue='5 + 3' history={['5 + 3']} />);
    const history = screen.getByTestId('history');
    const expression = screen.getByTestId('expression');
    expect(expression.textContent).toBe('5 + 3');
    expect(history.textContent).toBe('5 + 3');
  })
})