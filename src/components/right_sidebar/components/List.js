import React from "react";
import { MdExpandMore } from "react-icons/md";
import addSign from "../icons/ant-design_drag-outlined.svg";

const List = ({
  group,
  index,
  activeIndex,
  setMenu,
  setDraggedId,
  setIsDragging,
}) => {
  const handleMenu = () => {
    setMenu(index);
  };

  const handleClick = (e) => {
    setDraggedId(e.target.id);
    setIsDragging(true);
  };

  return (
    <>
      <h4 className="right-sidebar__subtitle">
        {group.title}
        <button
          className="right-sidebar__menu-button"
          type="button"
          onClick={handleMenu}
        >
          <MdExpandMore id={`menu${index}`} />
        </button>
      </h4>

      <ul
        className={
          index === activeIndex
            ? "right-sidebar__list"
            : "right-sidebar__list--hidden"
        }
      >
        {group.list.map((component) => (
          <li className="right-sidebar__item flex-center">
            <img src={component.icon} alt="icon" />
            <span className="right-sidebar__item-text">{component.name}</span>
            <button
              className="right-sidebar__item-button"
              type="button"
              onClick={handleClick}
            >
              <img src={addSign} alt="add button" id={component.id} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
