import React, { useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import dummy from "./dummy/components";

const TextDropdown = ({ data, type, deployed, index, handler }) => {
  const buttonRef = useRef();

  const title = data ? data.fieldTitle : undefined;
  const style = data ? data.fieldStyle : "column";
  let container = `text-dropdown flex-center ${type}`;
  container += style === "row" ? " row" : " column";

  const titleText = {
    "short-text": "Short Text",
    "long-text": "Long Text",
    "drop-down": "Dropdown",
  };

  const { list } = dummy[0];
  const component = list.find((el) => el.id === type);

  const handleClick = () => {
    const { offsetTop, offsetLeft } = buttonRef.current;
    handler(index, type, [offsetTop, offsetLeft]);
  };

  return (
    <div className={container}>
      {title ? (
        <h4 className="text-dropdown__title">{title} :</h4>
      ) : (
        <h4 className="text-dropdown__title--invisible">.</h4>
      )}
      <div className={`input-group ${type} flex-center`}>
        <img src={component.icon} alt="icon" />
        {type === "drop-down" && deployed ? (
          <select className="input-group__text">
            <option value={1} selected disabled={!deployed}>
              Employee ID; Employee List
            </option>
          </select>
        ) : (
          <p className="input-group__text">{titleText[type]}</p>
        )}
        {deployed && (
          <button
            ref={buttonRef}
            type="button"
            className="input-group__button"
            onClick={handleClick}
          >
            <BsThreeDotsVertical />
          </button>
        )}
      </div>
    </div>
  );
};

export default TextDropdown;
