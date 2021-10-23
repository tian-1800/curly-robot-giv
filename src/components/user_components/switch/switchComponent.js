import React from "react";
import Dropdown from "../Dropdown";
import ImageUpload from "../ImageUpload";
import LongText from "../LongText";
import ShortText from "../ShortText";
import Table from "../Table";
import VideoUpload from "../VideoUpload";

const SwitchComponent = ({ id, deployed }) => {
  if (id === "short-text") return <ShortText deployed={deployed} />;
  if (id === "long-text") return <LongText deployed={deployed} />;
  if (id === "table") return <Table deployed={deployed} />;
  if (id === "drop-down") return <Dropdown deployed={deployed} />;
  if (id === "img-upload") return <ImageUpload deployed={deployed} />;
  if (id === "vid-upload") return <VideoUpload deployed={deployed} />;
  return null;
};

export default SwitchComponent;
