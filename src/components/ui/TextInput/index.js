import React from "react";
import classNames from "classnames/bind";
import classes from "./index.module.css";
import { Field } from "formik";

const cn = classNames.bind(classes);

const TextInput = ({ type = "text", name, placeholder, className }) => {
  return (
    <Field
      type={type}
      className={cn("text-field", className)}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
