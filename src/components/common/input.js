import React, { Fragment } from "react";

const Input = ({
  name,
  id,
  label,
  text,
  className,
  placeholder,
  value,
  onChange
}) => {
  return (
    <Fragment>
      <input
        type={text}
        className={className}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </Fragment>
  );
};

export default Input;
