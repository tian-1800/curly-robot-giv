import React from "react";
import icons from "./dummy";
import pic from "../../images/user-picture.png";

const LeftNav = () => {
  const active = 1;
  return (
    <div className="left-nav">
      <div className="left-nav__profile">
        <img className="left-nav__profile-pic" src={pic} alt="" />
      </div>
      {icons.map((icon, i) => (
        <div
          className={i === active ? "left-nav__item--active" : "left-nav__item"}
        >
          <img src={icon} alt="icon" className="left-nav__item-icon" />
        </div>
      ))}
    </div>
  );
};

export default LeftNav;
