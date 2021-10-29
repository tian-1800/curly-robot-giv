import React from "react";
import helpIcon from "../images/icon-help.svg";

const Help = () => (
  <button type="button" className="help flex-center">
    <img src={helpIcon} alt="" />
    <span className="help__text">Help</span>
  </button>
);

export default Help;
