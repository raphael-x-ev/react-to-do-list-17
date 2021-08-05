import React from "react";

export const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <div className="alert alert-danger" role="alert" key={i}>
            {formErrors[fieldName]} {fieldName}.
          </div>
        );
      } else {
        return "";
      }
    })}
  </div>
);
