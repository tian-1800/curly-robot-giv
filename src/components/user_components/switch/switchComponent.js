import React from "react";
import Dropdown from "../Dropdown";
import LongText from "../LongText";
import ShortText from "../ShortText";
import Table from "../Table";

const switchComponent = (id) => {
  const switcher = {
    "short-text": <ShortText />,
    "long-text": <LongText />,
    table: <Table />,
    "drop-down": <Dropdown />,
  };

  try {
    return switcher[id];
  } catch (e) {
    return null;
  }
};

export default switchComponent;
