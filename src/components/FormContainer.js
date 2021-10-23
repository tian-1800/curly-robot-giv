import React from "react";
import FormPaper from "./form/FormPaper";
import RightSidebar from "./right_sidebar/RightSidebar";

const FormContainer = () => {
  // const [userDrag, setUserDrag] = useState(false);
  // const [draggedLabel, setDraggedLabel] = useState(null);
  console.log("hi");
  return (
    <div className="form-container">
      <FormPaper />
      <RightSidebar />
    </div>
  );
};

export default FormContainer;
