import React from "react";

const CustomInput = ({
  type,
  name,
  placeholder,
  classname,
  id,
  onChange,
  onBlur,
  value,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      className={`form-control ${classname}`}
    />
  );
};

export default CustomInput;
