import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import imageUpload from "./icons/image_upload.svg";

const Upload = ({ type }) => {
  console.log("hi");
  return (
    <div className="upload flex-center">
      <img src={imageUpload} alt="upload" />
      <span className="upload__text">{type} Upload</span>
      <button type="button" className="upload__button flex-center">
        <BsThreeDotsVertical />
      </button>
    </div>
  );
};

export default Upload;
