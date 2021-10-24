import React from "react";
import TextDropdown from "./TextDropdown";

const LongText = ({ title, style, deployed, index, handler }) => (
  <TextDropdown
    title={title}
    style={style}
    type="long-text"
    deployed={deployed}
    index={index}
    handler={handler}
  />
);

export default LongText;
