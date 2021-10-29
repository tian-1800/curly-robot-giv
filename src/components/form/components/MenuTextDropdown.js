import React from "react";
import addField from "../icons/add_field.svg";
import delIcon from "../icons/delete.svg";
import editIcon from "../icons/edit.svg";

const MenuTextDropdown = ({ type, del, edit, add }) => (
  <div className="menu-text">
    <button
      type="button"
      onClick={edit}
      className="menu-text__choice flex-center"
    >
      <img src={editIcon} alt="edit" />
      <p className="menu-text__choice-text">Edit {type} Properties</p>
    </button>
    <button
      type="button"
      className="menu-text__choice flex-center"
      onClick={add}
    >
      <img src={addField} alt="add" />
      <p className="menu-text__choice-text">Add Field In This Sect</p>
    </button>
    <button
      type="button"
      onClick={del}
      className="menu-text__choice flex-center"
    >
      <img src={delIcon} alt="delete" />
      <p className="menu-text__choice-text">Delete This Component</p>
    </button>
  </div>
);

export default MenuTextDropdown;
