import React from "react";
import Upload from "./Upload";

const VideoUpload = ({ data, deployed, index, handler }) => (
  <Upload
    data={data}
    type={"vid-upload"}
    deployed={deployed}
    index={index}
    handler={handler}
  />
);

export default VideoUpload;
