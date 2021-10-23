import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import dummy from "./dummy/components";

const TextDropdown = ({ title, style, type, deployed }) => {
  let container = "text-dropdown flex-center";
  container += style === "row" ? " row" : " column";

  const { list } = dummy[0];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  const component = list.find((el) => el.id === type);

  return (
    <div className={container}>
      {title ? <h4 className="text-dropdown__title">{title} :</h4> : null}
      <div className="input-group short-text flex-center">
        <img src={component.icon} alt="icon" />
        <p className="input-group__text">Employee Name; Employee List</p>
        {deployed && (
          <button type="button" className="input-group__button">
            <BsThreeDotsVertical />
          </button>
        )}
      </div>
    </div>
  );
};

export default TextDropdown;
