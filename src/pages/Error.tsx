import React from "react";
import { useRouteError } from "react-router-dom";
import Logo from "../components/micros/Logo";

interface RouteError {
  status: number;
  statusText: string;
  data: string;
}

const Error = () => {
  const err = useRouteError() as RouteError;
  return (
    <>
    <div className="m-5">

      <Logo color={true} />
    </div>
      <div className="mt-56 w-full flex flex-col justify-center items-center">
        <div className="text-3xl text-black">
          {err.status + ":" + err.statusText}
        </div>
        <p className="text-red-600">{err.data}</p>
      </div>
    </>
  );
};

export default Error;
