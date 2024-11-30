import { FC } from "react";
import LoginContainer from "../../container/LoginContainer";
import { ToastContainer } from "react-toastify";

const LoginPage: FC = () => {
  return (
    <div>
      <LoginContainer />
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
