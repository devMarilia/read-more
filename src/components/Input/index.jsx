import React from "react";

function Input({ type, text, name, id, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2" htmlFor={name}>
        {text}
      </label>
      <input
        className="border border-gray-400 p-2 w-full"
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
