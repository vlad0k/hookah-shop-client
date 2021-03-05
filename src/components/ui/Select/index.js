import React from "react";
import classNames from "classnames/bind";
import classes from "./index.module.css";
import { Field } from "formik";

const cn = classNames.bind(classes);

const Select = ({ name, className, children }) => {
  return (
    <Field as="select" className={cn("select", className)} name={name}>
      {children}
    </Field>
  );
};

export default Select;
