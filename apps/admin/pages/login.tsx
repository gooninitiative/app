import { Button } from "@/../ui";
import { useForm, SubmitHandler } from "react-hook-form";
import LoginLayout from "../layouts/login";
import InputField from "../../../packages/ui/components/Input";
import { FiUser } from "react-icons/fi";
import { CgDanger } from "react-icons/cg";
import { AiOutlineLock } from "react-icons/ai";
import Link from "next/link";

type Inputs = {
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

  console.log(watch("username", "password"));
  return (
    <LoginLayout>
      {/* React hook form login */}

      <form className="mb-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative block">
          <InputField
            name="username"
            placeholder="Username"
            values={register("username", { required: true })}
          />

          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <FiUser className=" text-lg font-semibold text-orange-400" />
          </span>
        </div>{" "}
        {errors.username && (
          <span className="flex items-center text-sm text-red-600">
            <CgDanger /> <p className="ml-2">Ce champ est obligatoire</p>
          </span>
        )}
        <div className="relative block">
          <InputField
            name="password"
            type="password"
            placeholder="Password"
            values={register("password", { required: true })}
          />

          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <AiOutlineLock className=" text-lg font-semibold text-orange-400" />
          </span>
        </div>
        {errors.password && (
          <span className="flex items-center text-sm text-red-600">
            <CgDanger /> <p className="ml-2">Ce champ est obligatoire</p>
          </span>
        )}
        <div className=" pt-4 font-medium text-orange-500">
          <Link href="/">Password forgot ?</Link>
        </div>
        {/* Button groups*/}
        <div className="mt-8">
          <Button type="primary">Sign In</Button>
          <div className="mt-4 flex items-center justify-center">
            <div className="left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="10"
                version="1.1"
              >
                <rect
                  opacity={0.1}
                  width="100%"
                  height="1"
                  stroke="black"
                  stroke-width="0"
                  fill="black"
                />
              </svg>
            </div>
            <div className=" px-4 pb-4">or</div>
            <div className="right">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="10"
                version="1.1"
              >
                <rect
                  opacity={0.1}
                  width="100%"
                  height="1"
                  stroke="black"
                  stroke-width="0"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <Link href="/register">
            <Button type="secondary">Create account</Button>
          </Link>
        </div>
      </form>
    </LoginLayout>
  );
};

export default Login;
