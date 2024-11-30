import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginView from "../../views/LoginView";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/Firebase";
import { useNavigate } from "react-router";

const LoginContainer: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast("All fields are required !");
      setEmail(null);
      setPassword(null);
      return;
    }
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        console.log("User login successfully !");
      }
      toast.success("User login successfully !", { position: "top-center" });
      setLoading(false);
      navigate("/");
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      toast.error(error.message, { position: "top-center" });
    }
  };
  return (
    <div className="w-full h-[100vh]">
      <LoginView
        email={email}
        password={password}
        loading={loading}
        onSubmit={handleSubmit}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
};

export default LoginContainer;
