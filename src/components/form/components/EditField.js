import React, { useState } from "react";
import { Save16 } from "@carbon/icons-react";
import dummy from "../../user_components/dummy/components";

const EditField = ({ field, setField }) => {
  const [localField, setLocalField] = useState(field);

  const type = field.fieldName;
  const componentList = [
    "short-text",
    "long-text",
    "drop-down",
    "img-upload",
    "vid-upload",
  ];
  const header = type === "drop-down" ? "Dropdown" : "Text";
  const destructuredDummy = dummy.reduce((arr, el) => [...arr, ...el.list], []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setField(localField, "edit");
  };

  const handleInput = (e) => {
    const newField = localField;
    newField[e.target.name] = e.target.value;
    setLocalField(newField);
  };

  const FieldTitle = () => (
    <label htmlFor="field-title" className="edit-field__long">
      Field Title
      <input
        type="text"
        id="field-title"
        name="fieldTitle"
        defaultValue={localField.fieldTitle}
        className="edit-field__input"
        onBlur={handleInput}
      />
    </label>
  );

  const FieldType = () => (
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
          return (
            <option value={id} selected={id === field.fieldName}>
              {component.name}
            </option>
          );
        })}
      </select>
    </label>
  );

  const FieldStyle = () => (
    <div className="edit-field__style edit-field__short">
      <h4 className="edit-field__style-subtitle">Field Style</h4>
      <div className="edit-field__style-main flex-center">
        <label
          className="edit_field__style-label flex-center"
          htmlFor="style-column"
        >
          <input
            type="radio"
            name="fieldStyle"
            value="column"
            id="style-column"
            className="edit-field__style-radio"
            defaultChecked={
              !localField.fieldStyle || localField.fieldStyle === "column"
            }
            onChange={handleInput}
          />
          <div className="edit-field__style-column">
            <span className="edit-field__style-span">Title</span>
            <div className="edit-field__style-box" />
          </div>
        </label>
        <label
          className="edit_field__style-label flex-center"
          htmlFor="style-row"
        >
          <input
            type="radio"
            name="fieldStyle"
            value="row"
            id="style-row"
            className="edit-field__style-radio"
            defaultChecked={localField.fieldStyle === "row"}
            onChange={handleInput}
          />
          <div className="edit-field__style-row flex-center">
            <span className="edit-field__style-span">Title</span>
            <div className="edit-field__style-box" />
          </div>
        </label>
      </div>
    </div>
  );

  const GetData = () => (
    <label htmlFor="get-data" className="edit-field__short">
      Get data from..
      <select id="get-data" name="get-data" className="edit-field__input">
        <option value="get-data-1" selected>
          {"This Form Assignee"}
        </option>
      </select>
    </label>
  );

  const DataVar = () => (
    <label htmlFor="get-data" className="edit-field__short">
      Get data from..
      <select id="get-data" name="get-data" className="edit-field__input">
        <option value="get-data-1" selected>
          {"Assignee Name"}
        </option>
      </select>
    </label>
  );

  return (
    <form action="" className="edit-field" onSubmit={handleSubmit}>
      <header>
        <h3 className="edit-field__header">Edit {header} Fields Properties</h3>
      </header>
      <main className="edit-field__main">
        <FieldTitle />
        <FieldType />
        <FieldStyle />
        <GetData />
        <DataVar />
      </main>
      <footer className="edit-field__footer flex-center">
        <button type="submit" className="edit-field__submit-button flex-center">
          <span>Apply</span>
          <Save16 />
        </button>
      </footer>
    </form>
  );
};

export default EditField;
