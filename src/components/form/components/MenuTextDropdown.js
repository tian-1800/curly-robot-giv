/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import addField from "../icons/add_field.svg";
import delIcon from "../icons/delete.svg";
import editIcon from "../icons/edit.svg";

const MenuTextDropdown = ({ type, del, pointer, edit }) => {
  console.log("hi");

  return (
    <div
      className="menu-text"
      style={{ left: `${pointer[0]}px`, top: `${pointer[1]}px` }}
    >
      <button
        type="button"
        onClick={edit}
        className="menu-text__choice flex-center"
      >
        <img src={editIcon} alt="edit" />
        <p className="menu-text__choice-text">Edit {type} Field Properties</p>
      </button>
      <button type="button" className="menu-text__choice flex-center">
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
};

export default MenuTextDropdown;
