import React from "react";
import Dropdown from "../Dropdown";
import ImageUpload from "../ImageUpload";
import LongText from "../LongText";
import ShortText from "../ShortText";
// import Table from "../Table";
import VideoUpload from "../VideoUpload";

const SwitchComponent = ({ id, data, deployed, index, handler }) => {
  const name = data ? data.fieldName : id;
  return (
    <>
      {name === "short-text" && (
        <ShortText
          deployed={deployed}
          index={index}
          handler={handler}
          data={data}
        />
      )}
      {name === "long-text" && (
        <LongText
          deployed={deployed}
          index={index}
          handler={handler}
          data={data}
        />
      )}
      {name === "drop-down" && (
        <Dropdown
          deployed={deployed}
          index={index}
          handler={handler}
          data={data}
        />
      )}
      {name === "img-upload" && (
        <ImageUpload
          deployed={deployed}
          index={index}
          handler={handler}
          data={data}
        />
      )}
      {name === "vid-upload" && (
        <VideoUpload
          deployed={deployed}
          index={index}
          handler={handler}
          data={data}
        />
      )}
    </>
  );
};

export default SwitchComponent;
