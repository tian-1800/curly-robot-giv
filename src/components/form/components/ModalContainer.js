/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

const ModalContainer = ({ onClick, children }) => (
  <div className="modal-container" onClick={onClick}>
    {children}
  </div>
);

export default ModalContainer;
