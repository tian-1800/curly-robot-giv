import React from "react";
import Dropdown from "../Dropdown";
import ImageUpload from "../ImageUpload";
import LongText from "../LongText";
import ShortText from "../ShortText";
import Table from "../Table";
import VideoUpload from "../VideoUpload";

const SwitchComponent = ({ id, data, deployed, index, handler }) => {
  // console.log("data", data);
  const name = data ? data.fieldName : id;
  if (name === "short-text")
    return (
      <ShortText
        deployed={deployed}
        index={index}
        handler={handler}
        data={data}
      />
    );
  if (name === "long-text")
    return (
      <LongText
        deployed={deployed}
        index={index}
        handler={handler}
        data={data}
      />
    );
  if (name === "table")
    return (
      <Table deployed={deployed} index={index} handler={handler} data={data} />
    );
  if (name === "drop-down")
    return (
      <Dropdown
        deployed={deployed}
        index={index}
        handler={handler}
        data={data}
      />
    );
  if (name === "img-upload")
    return (
      <ImageUpload
        deployed={deployed}
        index={index}
        handler={handler}
        data={data}
      />
    );
  if (name === "vid-upload")
    return (
      <VideoUpload
        deployed={deployed}
        index={index}
        handler={handler}
        data={data}
      />
    );
  return null;
};

export default SwitchComponent;
