import React from "react";
import TextDropdown from "./TextDropdown";

const LongText = ({ data, deployed, index, handler }) => (
  <TextDropdown
    data={data}
    type="long-text"
    deployed={deployed}
    index={index}
    handler={handler}
  />
);

export default LongText;
