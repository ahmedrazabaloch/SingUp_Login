import { auth, signInWithEmailAndPassword } from "/firebase.js";

let loginEmail = document.getElementById("login_email");
let loginPass = document.getElementById("login_password");

const login = () => {
  event.preventDefault();

  signInWithEmailAndPassword(auth, loginEmail.value, loginPass.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location = "../profile.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.message);
    });
};

let loginBtn = document.getElementById("login_btn");
loginBtn.addEventListener("click", login);

// Show & Hide Password
const showPass = () => {
  if (loginPass.type == "password") {
    loginPass.type = "text";
    passShowHide.classList.remove("bx-hide");
    passShowHide.classList.add("bx-show");
  } else {
    loginPass.type = "password";
    passShowHide.classList.remove("bx-show");
    passShowHide.classList.add("bx-hide");
  }
};

const passShowHide = document.querySelector(".bx");
passShowHide.addEventListener("click", showPass);
