import React from "react";
import MaterialButton, { ButtonProps } from "@material-ui/core/Button";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <p>{props.title}</p>
      <MaterialButton variant={props.variant} color={props.color}>
        {props.title}
      </MaterialButton>
    </>
  );
};

export default Button;
