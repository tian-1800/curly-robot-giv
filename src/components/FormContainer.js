import React, { useState } from "react";
import FormPaper from "./form/FormPaper";
import RightSidebar from "./right_sidebar/RightSidebar";

const FormContainer = () => {
  const [userDrag, setUserDrag] = useState(false);
  const [draggedLabel, setDraggedLabel] = useState(null);
  console.log(draggedLabel);
  return (
    <div className="form-container">
      <FormPaper userDrag={userDrag} setUserDrag={setUserDrag} />
      <RightSidebar
        setUserDrag={setUserDrag}
        setActiveLabel={setDraggedLabel}
      />
    </div>
  );
};

export default FormContainer;
