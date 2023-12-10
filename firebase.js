import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAaFutbhrOO-fAhn5vOVKPBpopsFDmi5RQ",
  authDomain: "smit-login-singup.firebaseapp.com",
  projectId: "smit-login-singup",
  storageBucket: "smit-login-singup.appspot.com",
  messagingSenderId: "1026913677402",
  appId: "1:1026913677402:web:e3756ad2d54d262d4c2863",
  measurementId: "G-KV22D76WX3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };
