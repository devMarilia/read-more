import React from "react";

function Button({ text, submit }) {
  return (
    <button
      className="border bg-black w-full p-4 my-2 text-white"
      type={submit}
    >
      {text}
    </button>
  );
}

export default Button;
