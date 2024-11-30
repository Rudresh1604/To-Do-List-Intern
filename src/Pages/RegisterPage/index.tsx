import { FC } from "react";
import { ToastContainer } from "react-toastify";
import RegisterContainer from "../../container/RegisterContainer";

const RegisterPage: FC = () => {
  return (
    <div>
      <RegisterContainer />
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
