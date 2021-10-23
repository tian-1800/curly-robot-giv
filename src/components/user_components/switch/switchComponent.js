import React from "react";
import Dropdown from "../Dropdown";
import ImageUpload from "../ImageUpload";
import LongText from "../LongText";
import ShortText from "../ShortText";
import Table from "../Table";
import VideoUpload from "../VideoUpload";

const SwitchComponent = ({ id }) => {
  if (id === "short-text") return <ShortText />;
  if (id === "long-text") return <LongText />;
  if (id === "table") return <Table />;
  if (id === "drop-down") return <Dropdown />;
  if (id === "img-upload") return <ImageUpload />;
  if (id === "vid-upload") return <VideoUpload />;
  return null;
};

export default SwitchComponent;
