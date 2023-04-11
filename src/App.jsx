import {useEffect, useState} from 'react';
import {allButtons} from './common';
import Button from './components/Button';
import Display from './components/Display';
import './index.css';

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [keyDown, setKeyDown] = useState();
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);
  const operations = ['÷', '-', '+', '×'];
  const buttonsValue = allButtons.map(el => el.value);

  useEffect(() => {
    setKeyDown('');
    document.addEventListener('keydown', e => {
      setKeyDown(e.key);
    });
  }, [displayValue]);

  const addValue = value => {
    //can't start a value with a character
    if (displayValue === '' && (operations.includes(value) || value === '.'))
      return;
    //can't have two characters one after the other
    if (
      (operations.includes(displayValue.slice(-2, -1)) &&
        operations.includes(value)) ||
      (displayValue.slice(-1) === '.' &&
        (value === '.' || operations.includes(value)))
    )
      return;
    //no characters allowed if there are 2 numbers and one operator
    if (displayValue.split(' ').length === 3 && operations.includes(value))
      return;
    //can't have two dots in the same number
    if (
      displayValue
        .split(' ')
        [displayValue.split(' ').length - 1].includes('.') &&
      value === '.'
    )
      return;
    //percentages can only be used in the second number
    if (displayValue.split(' ').length < 3 && value === '%') return;
    //can't use percentages at the beginning of the second number
    if (
      displayValue.split(' ')[displayValue.split(' ').length - 1] === '' &&
      value === '%'
    )
      return;
    // can't insert any characters after the percent sign
    if (
      displayValue.split(' ')[displayValue.split(' ').length - 1].includes('%')
    )
      return;

    setDisplayValue(
      displayValue + `${operations.includes(value) ? ` ${value} ` : value}`,
    );
  };

  const clearValue = () => {
    setDisplayValue('');
    setResult(0);
  };

  const deleteValue = () => {
    setDisplayValue(
      displayValue.slice(-1) === ' '
        ? displayValue.slice(0, -3)
        : displayValue.slice(0, -1),
    );
  };

  const getResult = () => {
    let [first, operator, second] = displayValue.split(' ');
    let total = '';

    if (second && second.includes('%')) {
      second = (+first * +second.slice(0, -1)) / 100;
    }

    switch (operator) {
      case '+':
        total = `${+first + +second}`;
        setResult(total);
        break;
      case '-':
        total = `${+first - +second}`;
        setResult(total);
        break;
      case '÷':
        total = `${+first / +second}`;
        setResult(total);
        break;
      case '×':
        total = `${+first * +second}`;
        setResult(total);
        break;
      default:
        setResult(0);
    }
    displayValue && setHistory([displayValue, total])
    setDisplayValue('');
  };

  useEffect(() => {
    keyDown === 'Enter' && getResult();
    keyDown === 'Backspace' && deleteValue();
    keyDown === 'Escape' && clearValue();
    keyDown === '/' && addValue('÷');
    keyDown === '*' && addValue('×');
    buttonsValue.includes(keyDown) && addValue(keyDown);
  }, [keyDown]);

  return (
    <div className="max-w-xl bg-[#242530] h-full mx-auto flex flex-col justify-end ">
      <Display displayValue={displayValue} result={result} history={history} />
      <div className="buttonGrid h-[468.75px] border-user text-2xl leading-9">
        {allButtons.map(button => (
          <Button
            key={button.id}
            button={button}
            clickFunc={
              button.value === 'C'
                ? clearValue
                : button.value === 'delete'
                ? deleteValue
                : button.value === '='
                ? getResult
                : addValue
            }
          />
        ))}
      </div>
    </div>
  );
}

export default App;
