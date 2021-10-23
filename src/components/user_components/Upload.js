import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import imageUpload from "./icons/image_upload.svg";

const Upload = ({ type, dropped }) => {
  console.log("hi");
  return (
    <div className="upload flex-center">
      <img src={imageUpload} alt="upload" />
      <span className="upload__text">{type} Upload</span>

      {dropped ? (
        <button type="button" className="upload__button flex-center">
          <BsThreeDotsVertical />
        </button>
      ) : null}
    </div>
  );
};

export default Upload;
