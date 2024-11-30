import { FC } from "react";
import FormInput from "../../components/base/FormInput";
import { Card } from "flowbite-react";
import Button from "../../components/base/FormButton";

interface LoginViewProps {
  email: string | null;
  password: string | null;
  loading?: boolean;
  setEmail: React.Dispatch<React.SetStateAction<string | null>>;
  setPassword: React.Dispatch<React.SetStateAction<string | null>>;
  onSubmit: (e: React.FormEvent) => void;
}
const LoginView: FC<LoginViewProps> = ({
  email,
  password,
  onSubmit,
  setEmail,
  setPassword,
  loading,
}) => {
  return (
    <div className="w-full h-full flex justify-around items-center">
      <Card className="w-fit flex-col items-center ">
        <h1 className="text-center font-medium  text-2xl">Login Page</h1>
        <hr />
        <form className="p-4" action="">
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
          <div className="mt-3 py-2">
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
          <div>
            <Button
              type="submit"
              className="bg-blue-500 text-stone-50 w-full"
              name={loading ? "Loading" : "Login"}
              onClick={onSubmit}
              disabled={loading}
            />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginView;
