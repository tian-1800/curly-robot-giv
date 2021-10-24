import React from "react";
import TextDropdown from "./TextDropdown";

const ShortText = ({ title, style, deployed, index, handler }) => (
  <TextDropdown
    title={title}
    style={style}
    type="short-text"
    deployed={deployed}
    index={index}
    handler={handler}
  />
);

export default ShortText;
