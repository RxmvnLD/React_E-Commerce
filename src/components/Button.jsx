import React from "react";

const Button = ({ text, textColor, bgColor, width, extras, todo }) => {
  return (
    <button
      onClick={() => {
        todo;
      }}
      className={`${textColor ? textColor : "text-white"} ${
        bgColor ? bgColor : "bg-blue-500"
      } ${width ? width : "w-5/6"} ${extras} font-semibold rounded-md p-2`}
    >
      {text}
    </button>
  );
};

export default Button;
