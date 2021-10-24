import React from "react";
import addField from "../icons/add_field.svg";
import delIcon from "../icons/delete.svg";
import editIcon from "../icons/edit.svg";

const MenuTextDropdown = ({ type, del, pointer, edit }) => (
  <div
    className="menu-text"
    style={{ left: `${pointer[0]}px`, top: `${pointer[1]}px` }}
  >
    <div>
      <button
        className="menu-text__choice flex-center"
        id="choice-edit"
        type="button"
        onClick={edit}
      >
        <img src={editIcon} alt="edit" />
        <span className="menu-text__choice-text">
          Edit {type} Field Properties
        </span>
      </button>
    </div>
    <div>
      <button
        className="menu-text__choice flex-center"
        id="choice-add"
        type="button"
      >
        <img src={addField} alt="add" />
        <span className="menu-text__choice-text">Add Field In This Sect</span>
      </button>
    </div>
    <div>
      <button
        className="menu-text__choice flex-center"
        id="choice-del"
        type="button"
        onClick={del}
      >
        <img src={delIcon} alt="delete" />
        <span className="menu-text__choice-text">Delete This Component</span>
      </button>
    </div>
  </div>
);

export default MenuTextDropdown;
