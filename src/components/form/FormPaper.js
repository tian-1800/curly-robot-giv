import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import SwitchComponent from "../user_components/switch/switchComponent";
import ImageUpload from "../user_components/ImageUpload";
import Title from "../user_components/Title";
import Header from "./components/Header";
import MenuTextDropdown from "./components/MenuTextDropdown";
import MenuUpload from "./components/MenuUpload";
import bgHeader from "../../images/Vector.svg";
import EditField from "./components/EditField";

const FormPaper = () => {
  const [fontSize, setFontSize] = useState(12);
  const [sections, setSections] = useState([
    [
      {
        fieldName: "short-text",
        fieldTitle: "Driver Name",
        fieldStyle: "column",
      },
    ],
  ]);
  const [showFieldMenu, setShowFieldMenu] = useState(false);
  const [showEditMenu, setShowEditMenu] = useState(false);
  const [typeToEdit, setTypeToEdit] = useState();
  const [indexToEdit, setIndexToEdit] = useState(-1);
  const [pointer, setPointer] = useState([0, 0]);

  const dropHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const id = e.dataTransfer.getData("text/plain");
    if (id) {
      const newSection = [{ fieldName: id }];
      setSections([...sections, newSection]);
    }
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleModal = (index, type, [x, y]) => {
    setPointer([x - 100, y - 100]);
    if (index[0] === indexToEdit[0] && index[1] === indexToEdit[1]) {
      setShowFieldMenu(false);
      setIndexToEdit(-1);
    } else if (["short-text", "long-text", "drop-down"].includes(type)) {
      setShowFieldMenu("text");
      setTypeToEdit(type === "drop-down" ? "Dropdown" : "Text");
      setIndexToEdit(index);
    } else if (["vid-upload", "img-upload"].includes(type)) {
      setShowFieldMenu("upload");
      setTypeToEdit(type === "img-upload" ? "Image" : "Video");
      setIndexToEdit(index);
    }
  };

  const deleteField = () => {
    const [i, j] = indexToEdit;
    const newSections = [...sections];
    const tempArr = sections[i];
    tempArr.splice(j, 1);
    if (tempArr.length) {
      newSections[i] = tempArr;
    } else {
      newSections.splice(i, 1);
    }
    setSections(newSections);
    setShowFieldMenu(false);
  };

  const editField = () => {
    setShowFieldMenu(false);
    setShowEditMenu(true);
  };

  const setField = (newField) => {
    const [i, j] = indexToEdit;
    const newSections = [...sections];
    const tempArr = sections[i];
    tempArr.splice(j, 1, newField);
    newSections.splice(i, 1, tempArr);
    setShowEditMenu(false);
  };

  return (
    <div className="form-paper">
      <div className="form-paper__header-background">
        <img src={bgHeader} alt="" />
      </div>
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
            {section.map((field, j) => (
              <SwitchComponent
                data={field}
                deployed
                index={[i, j]}
                handler={handleModal}
              />
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
        {showFieldMenu === "text" && (
          <MenuTextDropdown
            type={typeToEdit}
            del={deleteField}
            pointer={pointer}
            edit={editField}
          />
        )}
        {showFieldMenu === "upload" && (
          <MenuUpload type={typeToEdit} del={deleteField} pointer={pointer} />
        )}

        {showEditMenu && (
          <EditField
            field={sections[indexToEdit[0]][indexToEdit[1]]}
            setField={setField}
          />
        )}
      </main>
    </div>
  );
};

export default FormPaper;
