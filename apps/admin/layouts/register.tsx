import React, { PropsWithChildren } from "react";
import logo from "../assets/logo.svg";
import goon from "../assets/goon.svg";
import { TfiWorld } from "react-icons/tfi";
import { BsFillCaretDownFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const RegisterLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex justify-between px-8 py-4">
        <Image src={goon} alt="Logo" width="90" height="90" />

        <div className="flex cursor-pointer items-center text-gray-600 hover:text-gray-800">
          <span>
            <TfiWorld className="text-sm" />
          </span>
          <h6 className="mx-2">Français</h6>
          <span>
            <BsFillCaretDownFill className="text-sm" />
          </span>
        </div>
      </div>
      <div className="relative flex h-full w-full flex-col justify-between  p-8">
        <div className="flex  h-full items-center justify-center  ">
          <div className="flex h-1/2 w-3/12 justify-center">
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
                Already have an account ?{" "}
                <u>
                  <Link
                    className="font-medium text-gray-700 hover:text-orange-600"
                    href="/login"
                  >
                    Login
                  </Link>
                </u>
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
    </div>
  );
};

export default RegisterLayout;
