/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

const ModalContainer = ({ onClick, pointer, children, id }) => (
  <div
    className="modal-container"
    id={id}
    onClick={onClick}
    style={{
      left: `${pointer ? pointer[0] + 32 : null}px`,
      top: `${pointer ? pointer[1] - 9 : null}px`,
    }}
  >
    {children}
  </div>
);

export default ModalContainer;
