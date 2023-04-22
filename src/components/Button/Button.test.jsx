import '@testing-library/jest-dom';
import {render, screen, fireEvent} from '@testing-library/react';
import Button from './Button';

describe('Button tests', () => {
  const button = {
    id: 1,
    value: '1',
    color: 'dark',
    class: 'one',
  };

  it('Button was rendered', () => {
    render(<Button button={button} />);
    expect(screen.getByText(`${button.value}`)).toBeInTheDocument();
  });
  it('Button was clicked', () => {
    const clientClick = jest.fn();
    render(<Button button={button} clickFunc={clientClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(clientClick).toHaveBeenCalledTimes(1);
  });
});
