import React from "react";
import TextDropdown from "./TextDropdown";

const ShortText = ({ title, style, deployed }) => (
  <TextDropdown
    title={title}
    style={style}
    type="short-text"
    deployed={deployed}
  />
);

export default ShortText;
