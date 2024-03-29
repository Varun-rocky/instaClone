import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../firebase/firebase";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import useShowToast from "./useShowToast";
import { useState } from "react";
import useAuthStore from "../store/authStore";
export default function useSignUpWithEmailAndPassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);

  const signup = async (inputs) => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.userName ||
      !inputs.fullName
    ) {
      showToast("Error", "Please fill all the fields", "error");
      return;
    }

    const usersRef = collection(firestore,"users");
    const q =query(usersRef,where("username","==",inputs.userName))

    const querySnapshot = await getDocs(q);
    if(!querySnapshot.empty){
      showToast("Error","Username already exists","error")
      return ;
    }


    try {
      setLoading(true);
      const newUser = await createUserWithEmailAndPassword(
        auth,
        inputs.email,
        inputs.password
      );

      if (!newUser && error) {
        setLoading(false);
        showToast("Error", error.message, "error");
        setError(error.message);
        return;
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.userName,
          fullname: inputs.fullName,
          bio: "",
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };

        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
      
        loginUser(userDoc);
        setLoading(false);

      }
    } catch (error) {
      setLoading(false);
      showToast("Error", error.message, "error");
      setError(error.message);
    }
  };
  return { loading, error, signup };
}
