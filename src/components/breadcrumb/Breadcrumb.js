import React from "react";
import folder from "./icons/bi_folder.svg";
import pencil from "./icons/clarity_edit-line.svg";
import arrow from "./icons/eva_arrow-ios-back-fill.svg";
import upload from "./icons/ion_cloud-upload-outline.svg";

const Breadcrumb = () => (
  <div className="breadcrumb flex-center">
    <div className="breadcrumb__left flex-center">
      <img src={arrow} alt="back" />
      <h2 className="breadcrumb__title">Charter Log</h2>
      <img src={pencil} alt="edit" />
      <img src={folder} alt="folder" />
      <p className="breadcrumb__dir">Templates - Draft - Charter Log</p>
    </div>
    <div className="breadcrumb__right flex-center">
      <div className="breadcrumb__saving flex-center">
        <img src={upload} alt="upload" />
        <p className="breadcrumb__saving-text">Saving..</p>
      </div>
      <button type="button" className="breadcrumb__btn-save">
        Save
      </button>
      <button type="button" className="breadcrumb__btn-publish">
        Publish
      </button>
    </div>
  </div>
);

export default Breadcrumb;
