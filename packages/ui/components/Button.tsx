import * as React from "react";

interface Props {
  type: string;

  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({ type, children, onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={
        type === "primary"
          ? " radius-2 w-full rounded-sm border-orange-500 bg-orange-500 px-4 py-2 font-medium  text-white hover:bg-orange-600"
          : "  w-full rounded-sm border border-gray-300 bg-white px-4 py-2 font-medium hover:bg-gray-100 "
      }
    >
      {children}
    </button>
  );
};
