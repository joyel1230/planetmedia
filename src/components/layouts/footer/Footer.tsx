import React from "react";
import Logo from "../../micros/Logo";
import { BiLogoInstagram, BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#842A3A] h-72 sm:h-56 py-10 px-5 sm:px-12 flex flex-col justify-between">
        <div className="sm:flex sm:justify-between">
          <Logo color={false} />
          <div className="flex sm:gap-20 gap-20 sm:pr-10 sm:text-sm text-xs mt-5 sm:mt-0">
            <div >
              <h1 className="mb-5">ADDRESS</h1>
              <p>13 Brinkley Circuit Palmerston</p>
            </div>
            <div>
              <h1 className="mb-5">SOCIAL MEDIA</h1>
              <span className="flex gap-3">
                <BiLogoInstagram />
                <BiLogoFacebook />
              </span>
            </div>
          </div>
        </div>
        <div className="sm:flex justify-between text-xs mt-5 sm:mt-0">
          <p>
            © 2022 PURE BEAUTY. POWERED BY{" "}
            <span className="font-semibold text-sm">planetmedia</span>
          </p>
          <p className="mt-5 sm:mt-0">ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
