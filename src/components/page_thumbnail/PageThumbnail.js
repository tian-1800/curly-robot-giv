import React from "react";
import add from "./img/icon-add.svg";
import rectangle from "./img/Rectangle 2950.png";

const PageThumbnail = () => (
  <div className="page-thumbnail">
    <ul>
      <li className="page-thumbnail__item">
        <div className="page-thumbnail__index">1</div>
        <img src={rectangle} alt="" />
      </li>
    </ul>
    <div className="page-thumbnail__add flex-center">
      <img src={add} alt="" className="page-thumbnail__add-icon" />
      <p className="page-thumbnail__add-text">Add More Pages</p>
    </div>
  </div>
);

export default PageThumbnail;
