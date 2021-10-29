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
import AddField from "./components/AddField";
import ModalContainer from "./components/ModalContainer";

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
  const [showAddMenu, setShowAddMenu] = useState(false);
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

  const handleModal = (index, type, [y, x]) => {
    setPointer([x, y]);
    if (["short-text", "long-text", "drop-down"].includes(type)) {
      setShowFieldMenu("text");
      setTypeToEdit(type === "drop-down" ? "Dropdown" : "Text Field");
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
    setShowEditMenu(true);
  };

  const setField = (newField, mode) => {
    if (mode === "edit") {
      const [i, j] = indexToEdit;
      const newSections = [...sections];
      const tempArr = sections[i];
      tempArr.splice(j, 1, newField);
      newSections.splice(i, 1, tempArr);
      setShowEditMenu(false);
    } else if (mode === "pre") {
      const [i, j] = indexToEdit;
      const newSections = [...sections];
      const tempArr = sections[i];
      tempArr.splice(j, 0, newField);
      newSections.splice(i, 1, tempArr);
      setShowAddMenu(false);
    } else if (mode === "post") {
      const [i, j] = indexToEdit;
      const newSections = [...sections];
      const tempArr = sections[i];
      tempArr.splice(j + 1, 0, newField);
      newSections.splice(i, 1, tempArr);
      setShowAddMenu(false);
    }
  };

  const showAdd = () => {
    // setShowFieldMenu(false);
    setShowAddMenu(true);
  };

  const hideModal = (e) => {
    if (e.target.id === "field-menu-modal") {
      setShowFieldMenu(false);
    } else if (e.target.id === "add-menu-modal") {
      setShowAddMenu(false);
    } else if (e.target.id === "edit-menu-modal") {
      setShowEditMenu(false);
    }
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
          <ModalContainer
            onClick={hideModal}
            pointer={pointer}
            id="field-menu-modal"
          >
            <MenuTextDropdown
              type={typeToEdit}
              del={deleteField}
              edit={editField}
              add={showAdd}
            />
          </ModalContainer>
        )}
        {showFieldMenu === "upload" && (
          <ModalContainer
            onClick={hideModal}
            pointer={pointer}
            id="field-menu-modal"
          >
            <MenuUpload type={typeToEdit} del={deleteField} />
          </ModalContainer>
        )}
        {showEditMenu && (
          <ModalContainer
            onClick={hideModal}
            pointer={pointer}
            id="edit-menu-modal"
          >
            <EditField
              field={sections[indexToEdit[0]][indexToEdit[1]]}
              setField={setField}
            />
          </ModalContainer>
        )}

        {showAddMenu && (
          <ModalContainer
            onClick={hideModal}
            pointer={pointer}
            id="add-menu-modal"
          >
            <AddField setField={setField} />
          </ModalContainer>
        )}
      </main>
    </div>
  );
};

export default FormPaper;
