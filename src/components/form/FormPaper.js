import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";

import ShortText from "../user_components/ShortText";
import ImageUpload from "../user_components/ImageUpload";
import Title from "../user_components/Title";
import Header from "./components/Header";

const FormPaper = () => {
  const [fontSize, setFontSize] = useState(12);

  const dropHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-paper">
      <div className="form-paper__header-background" />
      <Header fz={fontSize} setFz={setFontSize} />
      <main className="form-paper__main">
        <section className="form-paper__top flex-center">
          <ImageUpload />
          <Title />
        </section>
        <div className="form-paper__separator">
          <button
            type="button"
            className="form-paper__separator-button flex-center"
          >
            <BsPlus />
          </button>
        </div>
        <div className="form-paper__dropzone" onDrop={dropHandler}>
          Drop here to add section
        </div>
        <ShortText />
      </main>
    </div>
  );
};

export default FormPaper;
