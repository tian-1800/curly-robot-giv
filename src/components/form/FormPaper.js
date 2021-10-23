import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";

import ShortText from "../user_components/ShortText";
import ImageUpload from "../user_components/ImageUpload";
import Title from "../user_components/Title";
import Header from "./components/Header";
// import EditField from "./components/EditField";

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
        <section className="form-paper__section">
          <ShortText title="Driver Name" />
        </section>
        <div className="form-paper__dropzone" onDrop={dropHandler}>
          <p className="form-paper__dropzone-text"> Drop here to add section</p>
        </div>
        {/* <EditField header={"Text"} title={"Driver Name"} type={"short-text"} /> */}
      </main>
    </div>
  );
};

export default FormPaper;
