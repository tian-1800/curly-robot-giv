import React from "react";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const FontSizeInput = ({ value, setValue }) => {
  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    if (value > 8) setValue(value - 1);
  };
  const handleChange = (e) => {
    setValue(parseInt(e.target.value, 10));
  };

  return (
    <div className="font-size flex-center">
      <button
        type="button"
        className="font-size__btn-dec"
        name="decrement"
        onClick={handleDecrement}
      >
        <BsPlus />
      </button>
      <input
        className="font-size__input"
        type="number"
        value={value}
        name="quantity"
        onChange={handleChange}
        required
      />
      <button
        type="button"
        className="font-size__btn-inc"
        name="increment"
        onClick={handleIncrement}
      >
        <BiMinus />
      </button>
    </div>
  );
};

export default FontSizeInput;
