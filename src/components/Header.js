import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoChatbubbleOutline, IoTicketOutline } from "react-icons/io5";
import { GrPowerShutdown } from "react-icons/gr";
import { MdSettings } from "react-icons/md";
import { Icon } from "@iconify/react";
import adeptIcon from "../images/adept-form-icon.png";

const Header = () => {
  console.log("hi");
  return (
    <header className="header">
      <div className="header__left">
        <img className="header__left-img" src={adeptIcon} alt="AdeptForms" />
        <HiMenuAlt3 className="header__left-menu" />
      </div>
      <div className="header__right">
        <span className="header__right-item">
          <Icon icon="bytesize:user" />
          <span>My Profile</span>
        </span>
        <span className="header__right-item">
          <i className="las la-coins" />
          <span>My Balance</span>
        </span>
        <span className="header__right-item">
          <IoChatbubbleOutline />
          <span>Messages</span>
        </span>
        <span className="header__right-item">
          <IoTicketOutline />
          <span>Issue</span>
        </span>
        <span className="header__right-item">
          <MdSettings />
          <span>Settings</span>
        </span>
        <span className="header__right-item">
          <GrPowerShutdown />
          <span>Logout</span>
        </span>
      </div>
    </header>
  );
};

export default Header;
