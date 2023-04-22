import React from 'react';
import '@testing-library/jest-dom';
import {render, fireEvent, screen} from '@testing-library/react';
import App from './App';
import Display from './components/Display/Display';

describe('Calculator tests', () => {
  it('Button and Diplay link', () => {
    render(<App />);
    const expression = screen.getByTestId('expression');
    const one = screen.getByText('1');
    fireEvent.click(one);
    expect(expression.textContent).toBe('1');
  });
  it(`'C' logic`, () => {
    render(
      <App>
        <Display displayValue="5 + 8" history={[3 - 2, 1]} />
      </App>,
    );
    const expression = screen.getByTestId('expression');
    const history = screen.getByTestId('history');
    fireEvent.click(screen.getByText('C'));
    expect(expression.textContent).toBe('0');
    expect(history.textContent).toBe('');
  });
  it(`Calculator logic '12 + 7'`, () => {
    render(<App />);
    const expression = screen.getByTestId('expression');
    const history = screen.getByTestId('history');
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByAltText('+'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByAltText('='));

    expect(expression.textContent).toBe('19');
    expect(history.textContent).toBe('12 + 7 19');
  });
  it(`Calculator logic '12 - 7'`, () => {
    render(<App />);
    const expression = screen.getByTestId('expression');
    const history = screen.getByTestId('history');
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByAltText('-'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByAltText('='));

    expect(expression.textContent).toBe('12');
    expect(history.textContent).toBe('19 - 7 12');
  });
  it(`Calculator logic '2 × 7'`, () => {
    render(<App />);
    const expression = screen.getByTestId('expression');
    const history = screen.getByTestId('history');
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByAltText('×'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByAltText('='));

    expect(expression.textContent).toBe('14');
    expect(history.textContent).toBe('2 × 7 14');
  });
  it(`Calculator logic '20 ÷ 4'`, () => {
    render(<App />);
    const expression = screen.getByTestId('expression');
    const history = screen.getByTestId('history');
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByAltText('÷'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByAltText('='));

    expect(expression.textContent).toBe('5');
    expect(history.textContent).toBe('20 ÷ 4 5');
  });
});
