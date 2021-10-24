import React from "react";
import TextDropdown from "./TextDropdown";

const Dropdown = ({ data, deployed, index, handler }) => (
  <TextDropdown
    data={data}
    type="drop-down"
    deployed={deployed}
    index={index}
    handler={handler}
  />
);

export default Dropdown;
