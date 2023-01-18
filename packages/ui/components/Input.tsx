import React from "react";

type Props = {
  placeholder: string;
  values: any;
  type?: string;
  name: string;
};

const InputField: React.FC<Props> = ({ placeholder, values, name, type }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="focus:outline-3  relative my-2 w-full rounded-sm  border border-gray-200 p-2 text-center focus:outline-orange-500
        "
      {...values}
    />
  );
};

export default InputField;
