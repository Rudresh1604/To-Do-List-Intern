import axios from "axios";
import React, { FC, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterView from "../../views/RegisterView";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../utils/Firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";

const RegisterContainer: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
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
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      console.log("User registered succesfully !");
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: name,
        });
      }
      setName(null);
      setEmail(null);
      setPassword(null);
      setLoading(false);
      toast.success("Registered successfully !", { position: "top-center" });
      navigate("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message, { position: "top-center" });
      setLoading(false);
      setEmail(null);
      setPassword(null);
      setName(null);
    }
  };
  return (
    <div className="w-full h-[100vh]">
      <RegisterView
        name={name}
        setName={setName}
        email={email}
        loading={loading}
        password={password}
        onSubmit={handleSubmit}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
};

export default RegisterContainer;
