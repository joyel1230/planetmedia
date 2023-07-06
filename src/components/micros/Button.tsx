import React from "react";
interface Props{
    title:string
}
const Button = ({title}:Props) => {
  return (
    <button className="border rounded-2xl py-1 text-center w-full text-sm font-semibold">
      {title}
    </button>
  );
};

export default Button;
