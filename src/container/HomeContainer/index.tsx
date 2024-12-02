import { FC, useEffect, useState } from "react";
import { Todo } from "../../components/model";
import Cookies from "js-cookie";
import HomeView from "../../views/HomeView";
import { auth, db } from "../../utils/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const HomeContainer: FC = () => {
  const navigate = useNavigate();
  const [allTask, setAllTask] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>("");
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setAllTask([...allTask, { id: Date.now(), name: todo, isFinish: false }]);
    }
    setTodo("");
  };
  useEffect(() => {
    try {
      const token = Cookies.get("access_token");
      if (!token) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchDetails: () => void = async () => {
    auth.onAuthStateChanged(async (user: any) => {
      console.log(user);
      const docRef = doc(db, "Users", user?.uid);
      const docsnap = await getDoc(docRef);
      if (docsnap.exists()) {
        console.log(docsnap.data());
      } else {
        console.log("User is not loggin");
      }
    });
  };

  const handleLogout: () => void = async () => {
    try {
      await auth.signOut();
      Cookies.remove("access_token");
      toast.success("Logout Successfully");
      navigate("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <div className="w-full h-full">
      <HomeView
        todo={todo}
        handleAdd={handleAdd}
        setTodo={setTodo}
        handleLogout={handleLogout}
        allTask={allTask}
        setAllTask={setAllTask}
      />
    </div>
  );
};

export default HomeContainer;
