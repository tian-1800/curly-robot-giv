import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import dummy from "../user_components/dummy/components";
import SwitchComponent from "../user_components/switch/switchComponent";
import List from "./components/List";

const RightSidebar = () => {
  const [activeMenu, setActiveMenu] = useState(2);
  const [draggedId, setDraggedId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [pointer, setPointer] = useState([0, 0]);

  const dragStartHandler = (e) => {
    e.dataTransfer.setData("text/plain", draggedId);
  };
  const dragEndHandler = () => {
    setIsDragging(false);
  };

  return (
    <div className="right-sidebar">
      <h3 className="right-sidebar__title flex-center">
        <FaAngleDoubleRight className="right-sidebar__title-icon" />
        Add Fields
      </h3>
      {dummy.map((group, i) => (
        <List
          group={group}
          index={i}
          activeIndex={activeMenu}
          setMenu={setActiveMenu}
          setDraggedId={setDraggedId}
          setIsDragging={setIsDragging}
          setPointer={setPointer}
        />
      ))}
      <div
        className={
          isDragging
            ? "right-sidebar__dragged-component"
            : "right-sidebar__dragged-component--invisible"
        }
        style={{ left: 0, top: pointer[1] }}
        draggable
        onDrag={() => {}}
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
      >
        <SwitchComponent id={draggedId} />
      </div>
    </div>
  );
};

export default RightSidebar;
