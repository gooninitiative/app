import { Button } from "@/../ui";
import { useForm, SubmitHandler } from "react-hook-form";
import RegisterLayout from "../layouts/register";
import InputField from "../../../packages/ui/components/Input";
import { FiUser } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import { BiShow } from "react-icons/bi";

type Inputs = {
  name: string;
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("name", "username", "password"));
  return (
    <RegisterLayout>
      {/* React hook form login */}

      <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Name field */}
        <div className="relative block">
          <InputField
            name="name"
            placeholder="Type your name"
            values={register("name", { required: true })}
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <FiUser className=" text-lg font-semibold text-orange-400" />
          </span>
        </div>
        {/* Handling errors */}
        {errors.name && (
          <span className="flex items-center text-sm text-red-600">
            <CgDanger /> <p className="ml-2">Ce champ est obligatoire</p>
          </span>
        )}
        {/* Username field */}
        <div className="relative block">
          <InputField
            name="username"
            placeholder="Username"
            values={register("username", { required: true })}
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <FiUser className=" text-lg font-semibold text-orange-400" />
          </span>
        </div>
        {/* Handling errors */}
        {errors.username && (
          <span className="flex items-center text-sm text-red-600">
            <CgDanger /> <p className="ml-2">Ce champ est obligatoire</p>
          </span>
        )}
        {/* Password field */}
        <div className="relative block">
          <InputField
            name="password"
            type="password"
            placeholder="Type your password"
            values={register("password", { required: true })}
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <AiOutlineLock className=" text-lg font-semibold text-orange-400" />
          </span>
        </div>
        {/* Handling errors */}
        {errors.password && (
          <span className="flex items-center text-sm text-red-600">
            <CgDanger /> <p className="ml-2">Ce champ est obligatoire</p>
          </span>
        )}
        <div className="mt-8">
          <Button type="primary">Sign up</Button>
        </div>
      </form>

      <h6 className=" text-center text-sm text-gray-400">
        By signing up on Goon, you agree to our Privacy Policy and Terms of
        Service
      </h6>
    </RegisterLayout>
  );
};

export default Login;
