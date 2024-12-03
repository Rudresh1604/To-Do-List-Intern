import { FC, useEffect, useState } from "react";
import { Todo } from "../../components/model";
import Cookies from "js-cookie";
import HomeView from "../../views/HomeView";
import "react-toastify/dist/ReactToastify.css";
import { auth, db } from "../../utils/Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const HomeContainer: FC = () => {
  const navigate = useNavigate();
  const [allTask, setAllTask] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>("");
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(todo);
    if (todo.trim() !== "") {
      setAllTask([...allTask, { id: Date.now(), name: todo, isFinish: false }]);
      setTodo("");
    }
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

  useEffect(() => {
    addTaskinDB();
  }, [allTask]);

  const addTaskinDB: () => Promise<void> = async () => {
    try {
      const user = auth.currentUser;

      if (user) {
        // console.log(allTask);
        await setDoc(doc(db, "Users", user.uid), {
          allTask: allTask,
        });
      }
    } catch (error) {
      console.log(error);
      toast("Cannot add task permanently");
    }
  };

  const fetchDetails: () => void = async () => {
    auth.onAuthStateChanged(async (user: any) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docsnap = await getDoc(docRef);

        if (docsnap.exists()) {
          const data: any = docsnap.data();
          // console.log("Document data:", data);

          if (Array.isArray(data.allTask)) {
            // console.log("All Tasks:", data.allTask);
            setAllTask(data.allTask);
          }
        } else {
          toast("No tasks to display ");
          console.log("User document does not exist.");
        }
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
