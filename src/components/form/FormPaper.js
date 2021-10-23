import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import SwitchComponent from "../user_components/switch/switchComponent";
import ImageUpload from "../user_components/ImageUpload";
import Title from "../user_components/Title";
import Header from "./components/Header";

const FormPaper = () => {
  const [fontSize, setFontSize] = useState(12);
  const [sections, setSections] = useState([[{ fieldName: "short-text" }]]);

  const dropHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const id = e.dataTransfer.getData("text/plain");
    const newSection = [{ fieldName: id }];
    setSections([...sections, newSection]);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="form-paper">
      <div className="form-paper__header-background" />
      <Header fz={fontSize} setFz={setFontSize} />
      <main className="form-paper__main">
        <section className="form-paper__top flex-center">
          <ImageUpload />
          <Title title="Premier Transportation" subtitle="Charter Log" />
        </section>
        <div className="form-paper__separator">
          <button
            type="button"
            className="form-paper__separator-button flex-center"
          >
            <BsPlus />
          </button>
        </div>
        {sections.map((section, i) => (
          <section className="form-paper__section" id={`section${i}`}>
            {section.map((field) => (
              <SwitchComponent id={field.fieldName} deployed />
            ))}
          </section>
        ))}

        <section
          className="form-paper__dropzone"
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
        >
          <p className="form-paper__dropzone-text"> Drop here to add section</p>
        </section>
        {/* <EditField header={"Text"} title={"Driver Name"} type={"short-text"} /> */}
      </main>
    </div>
  );
};

export default FormPaper;
