import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA-LkmA8ziWQT7jxTD9nMvIZH4UuNBcrQ0",
  authDomain: "myaap-e9eb3.firebaseapp.com",
  projectId: "myaap-e9eb3",
  storageBucket: "myaap-e9eb3.firebasestorage.app",
  messagingSenderId: "755579257240",
  appId: "1:755579257240:web:87f8183f3ccbabdab32bed"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;