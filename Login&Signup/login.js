import { auth, signInWithEmailAndPassword } from "/firebase.js";

let loginEmail = document.getElementById("login_email");
let loginPass = document.getElementById("login_password");
console.log("Connected");

const login = () => {
  event.preventDefault();

  signInWithEmailAndPassword(auth, loginEmail.value, loginPass.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.message);
    });
};

let loginBtn = document.getElementById("login_btn");
loginBtn.addEventListener("click", login);
