import React from "react";
import Breadcrumb from "./breadcrumb/Breadcrumb";
import FormPaper from "./form/FormPaper";
import PageThumbnail from "./page_thumbnail/PageThumbnail";
import RightSidebar from "./right_sidebar/RightSidebar";

const FormContainer = () => (
  <div className="form-container">
    <Breadcrumb />
    <PageThumbnail />
    <FormPaper />
    <RightSidebar />
  </div>
);

export default FormContainer;
