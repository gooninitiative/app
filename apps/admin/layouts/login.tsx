import React, { PropsWithChildren } from "react";
import logo from "../assets/logo.svg";
import backLogin from "../assets/backLogin.svg";
import Image from "next/image";

const LoginLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-full w-full">
      <div className="relative flex h-full w-2/3 flex-col justify-between  p-4">
        <div className="flex  h-full items-center justify-center  ">
          <div className="flex h-1/2 w-1/3 justify-center ">
            <div className=" flex flex-col items-center justify-center ">
              <div
                className=" h-full
              rounded-full bg-orange-100 p-2 "
              >
                <Image
                  className="px-1 py-3"
                  src={logo}
                  alt="Logo"
                  width="50"
                  height="50"
                />
              </div>
              <h4 className="mt-6 text-center text-gray-500">
                Use your username in order to get logged in to your account.
              </h4>
              <div className=" mt-6 ">{children}</div>
            </div>
          </div>
        </div>
        <div className=" flex w-full  content-end justify-between text-sm">
          <h6>&#169; 2022 Goon Initiative Opensource MIT Licensed.</h6>

          <div className="flex">
            <h6>Terms & conditions</h6>
            <h6 className="ml-4">Privacy Policy</h6>
          </div>
        </div>
      </div>
      <div className=" relative h-full w-1/3 bg-gray-300 p-24">
        <Image
          className=" absolute top-0 right-0 bottom-0 -mt-16 "
          src={backLogin}
          alt="back"
        />
        <Image
          className=" absolute top-0 right-0 bottom-0 mt-40 "
          src={backLogin}
          alt="back"
        />

        <Image
          className=" absolute top-0 right-0 bottom-0 mt-96 pt-24 "
          src={backLogin}
          alt="back"
        />
        <h3 className=" my-2 mt-4 text-center text-xl font-semibold">
          Login to your account to get access to more functionalities.
        </h3>
        <h6 className="pt-5 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the since the 1500s
        </h6>
      </div>
    </div>
  );
};

export default LoginLayout;
