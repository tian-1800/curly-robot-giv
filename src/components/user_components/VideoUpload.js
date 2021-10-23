import React from "react";
import Upload from "./Upload";

const VideoUpload = ({ dropped }) => (
  <Upload type={"Video"} dropped={dropped} />
);

export default VideoUpload;
