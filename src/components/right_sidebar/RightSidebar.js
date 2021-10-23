import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import dummy from "../user_components/dummy/components";
import SwitchComponent from "../user_components/switch/switchComponent";
import List from "./components/List";

const RightSidebar = () => {
  const [activeMenu, setActiveMenu] = useState(2);
  const [draggedId, setDraggedId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartHandler = (e) => {
    // e.stopImmediatePropagation();
    e.dataTransfer.setData("text/plain", draggedId);
  };
  const dragEndHandler = () => {
    setIsDragging(false);
  };

  // const DraggedEl = switchComponent(draggedId);

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
        />
      ))}
      <div
        className={
          isDragging
            ? "right-sidebar__dragged-component"
            : "right-sidebar__dragged-component--invisible"
        }
        draggable
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
      >
        <SwitchComponent id={draggedId} />
      </div>
    </div>
  );
};

export default RightSidebar;
