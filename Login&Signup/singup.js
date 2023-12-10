import { auth, createUserWithEmailAndPassword } from "/firebase.js";

const singupEmail = document.getElementById("singup_email");
const singupPassword = document.getElementById("singup_password");
const singupConfPass = document.getElementById("singup_conf_pass");
let errorMsg = document.querySelector(".error_Pass");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])[A-Za-z\d@$!%*?&]{8,}$/;

console.log("conneted");

const register = (e) => {
  e.preventDefault();

  if (emailRegex.test(singupEmail.value)) {
    if (singupPassword.value !== singupConfPass.value) {
      errorMsg.innerHTML = `
        <i class="bx bxs-error"></i> Passowrd Not Match
        `;
      setTimeout(() => {
        errorMsg.innerHTML = "";
      }, 1500);
    } else {
      errorMsg.innerHTML = "";
      if (passwordRegex.test(singupPassword.value)) {
        createUserWithEmailAndPassword(
          auth,
          singupEmail.value,
          singupPassword.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorMessage = error.message;
            const errorCode = error.code;
            console.log(error.message);
          });
      } else {
        alert("weak password");
      }
    }
  } else {
    alert("invilid email");
  }
};

const singupBtn = document
  .getElementById("singup_btn")
  .addEventListener("click", register);
