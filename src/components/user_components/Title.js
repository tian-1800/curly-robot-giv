import React from "react";

const Title = ({ data }) => {
  const title = data ? data.fieldTitle : "Title";
  const subtitle = data ? data.fieldSubtitle : "Subtitle";

  return (
    <div className="title flex-center">
      <div className="title__flex">
        <h4 className="title__title">{title}</h4>
        <p className="title__text">{subtitle}</p>
      </div>
    </div>
  );
};

export default Title;
