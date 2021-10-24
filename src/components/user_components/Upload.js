import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import imageUpload from "./icons/image_upload.svg";

const Upload = ({ type, deployed, index, handler }) => {
  const handleClick = (e) => {
    handler(index, type, [e.clientX, e.clientY]);
  };

  return (
    <div className="upload flex-center">
      <img src={imageUpload} alt="upload" />
      <span className="upload__text">
        {type === "img-upload" ? "Image" : "Video"} Upload
      </span>

      {deployed ? (
        <button
          type="button"
          className="upload__button flex-center"
          onClick={handleClick}
        >
          <BsThreeDotsVertical />
        </button>
      ) : null}
    </div>
  );
};

export default Upload;
