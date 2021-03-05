import React, { useState, useCallback } from "react";
import classNames from "classnames/bind";
import classes from "./index.module.css";

const cn = classNames.bind(classes);

const Button = ({
  type = "default",
  icon: Icon,
  children,
  onClick,
  className,
  size = "medium",
  formType,
}) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const mouseDownHandler = useCallback(
    (state) => () => {
      setIsMouseDown(state);
      console.log("+");
    },
    []
  );

  return (
    <button
      className={cn("button", type, size, { clicked: isMouseDown }, className)}
      onMouseDown={mouseDownHandler(true)}
      onMouseUp={mouseDownHandler(false)}
      onMouseOut={mouseDownHandler(false)}
      onClick={onClick}
      type={formType}
    >
      {Icon && <Icon />}
      {type !== "icon" && <div>{children}</div>}
    </button>
  );
};

export default Button;
