import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import SwitchComponent from "../../user_components/switch/switchComponent";
import addSign from "../icons/ant-design_drag-outlined.svg";

const List = ({ group, index, activeIndex, setMenu }) => {
  // const [draggedId, setDraggedId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMenu = () => {
    if (index === activeIndex) setMenu(null);
    else setMenu(index);
  };

  // const handleClick = (e) => {
  //   setDraggedId(e.target.id);
  // setPointer([e.clientX, e.clientY - 100]);
  // };

  const dragStartHandler = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    setIsDragging(true);
  };
  const dragEndHandler = () => {
    setIsDragging(false);
  };

  return (
    <>
      <h4 className="right-sidebar__subtitle">
        {group.title}
        <button
          className={
            index === activeIndex
              ? "right-sidebar__menu-button--active"
              : "right-sidebar__menu-button"
          }
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
              // onClick={handleClick}
            >
              <img src={addSign} alt="add button" />
            </button>
            <div
              className={
                isDragging
                  ? "right-sidebar__dragged-component"
                  : "right-sidebar__dragged-component--invisible"
              }
              id={component.id}
              draggable
              onDrag={() => {}}
              onDragStart={dragStartHandler}
              onDragEnd={dragEndHandler}
            >
              <SwitchComponent id={component.id} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
