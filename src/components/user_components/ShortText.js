import React from "react";
import TextDropdown from "./TextDropdown";

const ShortText = ({ data, deployed, index, handler }) => (
  <TextDropdown
    data={data}
    type="short-text"
    deployed={deployed}
    index={index}
    handler={handler}
  />
);

export default ShortText;
