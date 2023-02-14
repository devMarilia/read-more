import React from "react";
import { InputGeral, LabelGeral } from "./styled";
function Input({ type, text, name, id, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <LabelGeral htmlFor={name}>{text}</LabelGeral>

      <InputGeral
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
