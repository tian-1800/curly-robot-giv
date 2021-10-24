import React from "react";
import uploadIcon from "../icons/upload_image.svg";
import delIcon from "../icons/delete.svg";

const MenuUpload = ({ type, del }) => (
  <div className="menu-upload">
    <button className="menu-upload__choice flex-center" type="button">
      <img src={uploadIcon} alt="upload" />
      <span className="menu-upload__choice-text">Upload {type}</span>
    </button>
    <button
      className="menu-upload__choice flex-center"
      type="button"
      onClick={del}
    >
      <img src={delIcon} alt="upload" />
      <span className="menu-upload__choice-text">Delete This Field</span>
    </button>
  </div>
);

export default MenuUpload;
