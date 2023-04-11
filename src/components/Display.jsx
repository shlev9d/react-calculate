import React from 'react';

const Display = ({displayValue, history, result}) => {
  return (
    <div className="flex flex-col justify-end text-white text-end mx-[19px] my-[21px]">
      <div className="flex flex-col justify-end overflow-auto">
        {history.map((el, idx) => (
          <p key={el + idx} className="text-[26px] leading-[39px]">
            {el}
          </p>
        ))}
      </div>
      <div className="h-[83px] text-[55px] leading-[82.5px]">
        {displayValue === '' ? result : displayValue}
      </div>
    </div>
  );
};

export default Display;
