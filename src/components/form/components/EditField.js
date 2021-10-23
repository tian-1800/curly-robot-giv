import React from "react";
import { Save16 } from "@carbon/icons-react";
import dummy from "../../user_components/dummy/components";

const handleSubmit = (e) => {
  e.preventDefault();
};

const EditField = ({ header, title, type, style, dataFrom, dataVar }) => {
  const componentList = [
    "short-text",
    "long-text",
    "table",
    "drop-down",
    "img-upload",
    "vid-upload",
  ];
  const destructuredDummy = dummy.reduce((arr, el) => [...arr, ...el.list], []);
  const FieldTitle = () => (
    <label htmlFor="field-title" className="edit-field__long">
      Field Title
      <input
        type="text"
        id="field-title"
        name="field-title"
        value={title}
        className="edit-field__input"
      />
    </label>
  );

  const FieldType = () => (
    <label htmlFor="field-type" className="edit-field__short">
      <span>Field Type</span>
      <select id="field-type" name="field-type" className="edit-field__input">
        {componentList.map((id) => {
          const component = destructuredDummy.find(
            (element) => element.id === id
          );
          return (
            <option value={id} selected={id === type}>
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
      <div className="edit_field__style-main">
        <label htmlFor="style-column">
          <input
            type="radio"
            name="style-row"
            id="style-column"
            className="edit-field__style-radio"
            checked={!style || style === "column"}
          />
          <div className="edit-field__style-column">
            <span className="edit-field__style-span">Title</span>
            <div className="edit-field__style-box" />
          </div>
        </label>
        <label htmlFor="style-row">
          <input
            type="radio"
            name="style-row"
            id="style-row"
            className="edit-field__style-radio"
            checked={style === "row"}
          />
          <div className="edit-field__style-row">
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
          {dataFrom || "This Form Assignee"}
        </option>
      </select>
    </label>
  );

  const DataVar = () => (
    <label htmlFor="get-data" className="edit-field__short">
      Get data from..
      <select id="get-data" name="get-data" className="edit-field__input">
        <option value="get-data-1" selected>
          {dataVar || "Assignee Name"}
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
