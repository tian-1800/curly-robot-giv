import React, { useState } from "react";
import dummy from "../../user_components/dummy/components";

const AddField = ({ setField, pointer }) => {
  const [localField, setLocalField] = useState({ fieldName: "short-text" });

  const componentList = [
    "short-text",
    "long-text",
    "drop-down",
    "img-upload",
    "vid-upload",
  ];
  const destructuredDummy = dummy.reduce((arr, el) => [...arr, ...el.list], []);
  const handleInput = (e) => {
    setLocalField({ fieldName: e.target.value });
  };

  const addFieldLeft = () => {
    setField(localField, "pre");
  };

  const addFieldRight = () => {
    setField(localField, "post");
  };

  return (
    <div
      className="add-field"
      style={{ left: `${pointer[0]}px`, top: `${pointer[1]}px` }}
    >
      <button
        type="button"
        className="add-field__choice flex-center"
        onClick={addFieldLeft}
      >
        To The Left
      </button>
      <button
        type="button"
        className="add-field__choice flex-center"
        onClick={addFieldRight}
      >
        To The Right
      </button>
      <label htmlFor="field-type" className="edit-field__short">
        <span>Field Type</span>
        <select
          id="field-type"
          name="fieldName"
          className="edit-field__input"
          onBlur={handleInput}
        >
          {componentList.map((id) => {
            const component = destructuredDummy.find(
              (element) => element.id === id
            );
            return <option value={id}>{component.name}</option>;
          })}
        </select>
      </label>
    </div>
  );
};

export default AddField;
