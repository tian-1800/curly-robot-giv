import React from "react";
import Upload from "./Upload";

const VideoUpload = ({ deployed, index, handler }) => (
  <Upload
    type={"vid-upload"}
    deployed={deployed}
    index={index}
    handler={handler}
  />
);

export default VideoUpload;
