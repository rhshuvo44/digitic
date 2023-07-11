import React from "react";

const CustomInput = ({ type, name, placeholder, classname, id }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      id={id}
      className={`form-control ${classname}`}
    />
  );
};

export default CustomInput;
