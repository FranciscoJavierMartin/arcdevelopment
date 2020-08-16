import React from 'react';

interface IButtonArrowProps {
  classes: string;
  width: number;
  height: number;
  fill: string;
}

const ButtonArrow: React.FC<Partial<IButtonArrowProps>> = ({
  classes,
  width,
  height,
  fill,
}) => {
  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill={fill}
      viewBox='0 0 18 18'
    >
      <path d='M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z' />
    </svg>
  );
};

export default ButtonArrow;
