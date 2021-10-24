import React from "react";
import Upload from "./Upload";

const ImageUpload = ({ deployed, index, handler }) => (
  <Upload
    type={"img-upload"}
    deployed={deployed}
    index={index}
    handler={handler}
  />
);

export default ImageUpload;
