import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import shortLongText from "./icons/short_long_text.svg";

const ShortText = ({ properties }) => {
  const { title, style } = properties || { title: null, style: "column" };
  let container = "text-dropdown flex-center";
  container += style === "column" ? " column" : " row";

  return (
    <div className={container}>
      {title ? <h4 className="text-dropdown__title">{title} :</h4> : null}
      <div className="input-group short-text flex-center">
        <img src={shortLongText} alt="icon" />
        <p className="input-group__text">Employee Name; Employee List</p>
        <button type="button" className="input-group__button">
          <BsThreeDotsVertical />
        </button>
      </div>
    </div>
  );
};

export default ShortText;
