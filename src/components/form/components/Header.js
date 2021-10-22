import React from "react";
import {
  Paper,
  TextAlignCenter,
  TextAlignLeft,
  TextAlignRight,
} from "akar-icons";
import {
  BsLink,
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
} from "react-icons/bs";
import { FaStarOfLife } from "react-icons/fa";

import FontSizeInput from "./FontSizeInput";

const Header = ({ fz, setFz }) => (
  <div className="fp-header flex-center">
    <div className="fp-header__font flex-center">
      <select className="fp-header__font-family">
        <option value="nunito">Nunito</option>
        <option value="saab">Saab</option>
      </select>
      <FontSizeInput value={fz} setValue={setFz} />
    </div>
    <div className="fp-header__font-style flex-center">
      <BsTypeBold className="fp-header__font-style-item" />
      <BsTypeItalic className="fp-header__font-style-item" />
      <BsTypeUnderline className="fp-header__font-style-item" />
    </div>
    <div className="fp-header__alignment flex-center">
      <TextAlignLeft className="fp-header__alignment-item" />
      <TextAlignCenter className="fp-header__alignment-item" />
      <TextAlignRight className="fp-header__alignment-item" />
    </div>
    <div className="fp-header__user flex-center">
      <BsLink className="fp-header__user-item" />
      <FaStarOfLife className="fp-header__user-item" />
      <div className="fp-header__user-edit flex-center">
        <Paper className="fp-header__user-edit-icon" />
        <span className="fp-header__user-edit-text">Edit Paper</span>
      </div>
    </div>
  </div>
);

export default Header;
