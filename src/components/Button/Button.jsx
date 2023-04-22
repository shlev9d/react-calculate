import React from 'react';
import '../../index.css';

const Button = ({button, clickFunc}) => {
  return (
    <button
      className={`${
        button.class
      } flex justify-center items-center min-w-[93.75px] min-h-[93.75px] border-user ${
        button.color === 'dark'
          ? 'bg-dark'
          : button.color === 'gray'
          ? 'bg-gray'
          : 'bg-yellow'
      } ${
        button.value === 'C'
          ? 'rounded-tl-[30px]'
          : button.value === 'delete'
          ? 'rounded-tr-[30px]'
          : ''
      } cursor-pointer `}
      onClick={clickFunc}
    >
      {button.image ? (
        <img src={require(`../../assets/${button.image}`)} alt={button.value} />
      ) : (
        <p className="text-white">{button.value}</p>
      )}
    </button>
  );
};

export default Button;
