import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAI-4gjcRT4K_4fd6cmLi5OVzfgDXLLVoo",
  authDomain: "instafire-d12bd.firebaseapp.com",
  projectId: "instafire-d12bd",
  storageBucket: "instafire-d12bd.appspot.com",
  messagingSenderId: "399811546189",
  appId: "1:399811546189:web:3aae707d8217a149b6e004"
};

const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const firestore =getFirestore(app);
const storage =getStorage(app);

export {app,auth,firestore,storage};