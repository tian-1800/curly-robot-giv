import React from "react";
import Upload from "./Upload";

const ImageUpload = ({ dropped }) => (
  <Upload type={"Image"} dropped={dropped} />
);

export default ImageUpload;
