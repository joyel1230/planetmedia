import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <>
      <div className="fixed bg-white opacity-30 top-0 left-0 right-0 bottom-0 z-10"></div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="loadingspinner">
          <div id="square1"></div>
          <div id="square2"></div>
          <div id="square3"></div>
          <div id="square4"></div>
          <div id="square5"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
