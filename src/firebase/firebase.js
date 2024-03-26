import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCPNw7ImovfbKj8xiDLuf6M4DAOBAs5nio",
  authDomain: "insta-clone-fe646.firebaseapp.com",
  projectId: "insta-clone-fe646",
  storageBucket: "insta-clone-fe646.appspot.com",
  messagingSenderId: "903371436489",
  appId: "1:903371436489:web:d049ad34a0924116f4b818"
};

const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const firestore =getFirestore(app);
const storage =getStorage(app);

export {app,auth,firestore,storage};