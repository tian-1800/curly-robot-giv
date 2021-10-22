import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import dummy from "../user_components/dummy/components";
import List from "./components/List";

const RightSidebar = () => {
  const [activeMenu, setActiveMenu] = useState(2);

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
        />
      ))}
    </div>
  );
};

export default RightSidebar;
