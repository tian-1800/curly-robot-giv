import React from "react";
import Upload from "./Upload";

const ImageUpload = ({ data, deployed, index, handler }) => (
  <Upload
    data={data}
    type={"img-upload"}
    deployed={deployed}
    index={index}
    handler={handler}
  />
);

export default ImageUpload;
