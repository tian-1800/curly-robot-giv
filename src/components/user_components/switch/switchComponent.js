import React from "react";
import Dropdown from "../Dropdown";
import ImageUpload from "../ImageUpload";
import LongText from "../LongText";
import ShortText from "../ShortText";
import Table from "../Table";
import VideoUpload from "../VideoUpload";

const SwitchComponent = ({ id, deployed, index, handler }) => {
  if (id === "short-text")
    return <ShortText deployed={deployed} index={index} handler={handler} />;
  if (id === "long-text")
    return <LongText deployed={deployed} index={index} handler={handler} />;
  if (id === "table")
    return <Table deployed={deployed} index={index} handler={handler} />;
  if (id === "drop-down")
    return <Dropdown deployed={deployed} index={index} handler={handler} />;
  if (id === "img-upload")
    return <ImageUpload deployed={deployed} index={index} handler={handler} />;
  if (id === "vid-upload")
    return <VideoUpload deployed={deployed} index={index} handler={handler} />;
  return null;
};

export default SwitchComponent;
