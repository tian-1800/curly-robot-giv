import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import dummy from "../user_components/dummy/components";
import addSign from "./icons/ant-design_drag-outlined.svg";

const RightSidebar = ({ setUserDrag, setActiveLabel }) => {
  const handleClick = (e) => {
    setUserDrag(true);
    setActiveLabel(e.target.id);
  };

  return (
    <div className="right-sidebar">
      <h3 className="right-sidebar__title">
        <FaAngleDoubleRight className="right-sidebar__title-icon" />
        Add Fields
      </h3>
      {dummy.map((group) => (
        <>
          <h4 className="right-sidebar__subtitle">
            {group.title}
            <MdExpandMore />
          </h4>
          <ul className="right-sidebar__list">
            {group.list.map((component) => (
              <li className="right-sidebar__item">
                <img src={component.icon} alt="icon" />
                <span>{component.name}</span>
                <button type="button" onClick={handleClick}>
                  <img src={addSign} alt="add button" />
                </button>
              </li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};

export default RightSidebar;
