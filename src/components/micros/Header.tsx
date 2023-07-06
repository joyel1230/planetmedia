import React from "react";
interface Props {
  title: string | undefined;
}
const Header = ({title}:Props) => {
  return (
    <div className="bg-[#842A3A] rounded-b-xl h-20 font-serif flex px-5 sm:px-10 items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
};

export default Header;
