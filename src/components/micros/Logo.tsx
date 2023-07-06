import React from "react";
import { Link } from "react-router-dom";

interface Props {
  color: boolean;
}

const Logo = ({ color }: Props) => {
  let logoColor = "";
  if (color) {
    logoColor = "text-[#842A3A]";
  }
  return (
    <div className={`flex items-center ${logoColor}`}>
      {logoColor ? (
        <img src="/logoB.svg" width={25} alt="" />
      ) : (
        <img src="/logoC.svg" width={25} alt="" />
      )}
      <div className="text-center font-serif tracking-[0.1rem] ms-4">
        <Link to={'/'}>
          <h1 className="text-sm">PURE BEAUTY</h1>
          <p className="text-[0.4rem]">SKIN CARE</p>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
