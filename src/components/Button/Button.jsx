import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-5 py-2 rounded-full ${bgColor} ${textColor} ${className}`}
      
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
