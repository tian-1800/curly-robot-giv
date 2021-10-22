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
      <div className="header__left flex-center">
        <img className="header__left-img" src={adeptIcon} alt="AdeptForms" />
        <HiMenuAlt3 className="header__left-menu" />
      </div>
      <div className="header__right flex-center">
        <span className="header__right-item">
          <Icon icon="bytesize:user" />
          <span>My Profile</span>
        </span>
        <span className="header__right-item flex-center">
          <i className="las la-coins" />
          <span>My Balance</span>
        </span>
        <span className="header__right-item flex-center">
          <IoChatbubbleOutline />
          <span>Messages</span>
        </span>
        <span className="header__right-item flex-center">
          <IoTicketOutline />
          <span>Issue</span>
        </span>
        <span className="header__right-item flex-center">
          <MdSettings />
          <span>Settings</span>
        </span>
        <span className="header__right-item flex-center">
          <GrPowerShutdown />
          <span>Logout</span>
        </span>
      </div>
    </header>
  );
};

export default Header;
