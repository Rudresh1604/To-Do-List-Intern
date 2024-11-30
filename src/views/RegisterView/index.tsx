import { FC } from "react";
import FormInput from "../../components/base/FormInput";
import { Card } from "flowbite-react";
import Button from "../../components/base/FormButton";

interface RegisterViewProps {
  name: string | null;
  email: string | null;
  password: string | null;
  loading?: boolean;
  setEmail: React.Dispatch<React.SetStateAction<string | null>>;
  setName: React.Dispatch<React.SetStateAction<string | null>>;
  setPassword: React.Dispatch<React.SetStateAction<string | null>>;
  onSubmit: (e: React.FormEvent) => void;
}
const RegisterView: FC<RegisterViewProps> = ({
  email,
  password,
  onSubmit,
  name,
  loading,
  setName,
  setEmail,
  setPassword,
}) => {
  return (
    <div className="w-full h-full flex justify-around items-center">
      <Card className="w-fit flex-col items-center ">
        <h1 className="text-center font-medium  text-2xl">Register Page</h1>
        <hr />
        <form className="p-4" action="">
          <div className="py-2">
            <span className="mb-2">Enter Your Name : </span>
            <FormInput
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="rounded-lg mt-1"
              placeholder="Enter your name"
              name="name"
            />
          </div>
          <div className="py-2">
            <span className="mb-2">Enter Your Email : </span>
            <FormInput
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-lg mt-1"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div className="mt-3">
            <span className="mb-2">Enter Your Password : </span>
            <FormInput
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-lg mt-1"
              placeholder="Enter your password"
              name="password"
            />
          </div>
          <div className="py-2">
            <Button
              type="submit"
              className="bg-blue-500 text-stone-50 w-full"
              name={loading ? "Loading" : "Register"}
              disabled={loading}
              onClick={onSubmit}
            />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default RegisterView;
