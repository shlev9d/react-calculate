import React from 'react';
import '../index.css';

const Button = ({button, clickFunc}) => {
  return (
    <div
      className={`${
        button.class
      } flex justify-center items-center min-w-[93.75px] min-h-[93.75px] border-user ${
        button.color === 'dark'
          ? 'bg-dark hover:bg-darkHover'
          : button.color === 'gray'
          ? 'bg-gray hover:bg-grayHover'
          : 'bg-yellow hover:bg-yellowHover'
      } ${
        button.value === 'C'
          ? 'rounded-tl-[30px]'
          : button.value === 'delete'
          ? 'rounded-tr-[30px]'
          : ''
      } cursor-pointer `}
      onClick={() => clickFunc(button.value)}
    >
      {button.image ? (
        <img src={require(`../assets/${button.image}`)} alt={button.value} />
      ) : (
        <p className="text-white">{button.value}</p>
      )}
    </div>
  );
};

export default Button;
