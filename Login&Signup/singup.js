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

// Show & Hide Password
const showPass = () => {
  if (singupConfPass.type == "password") {
    singupConfPass.type = "text";
    singupPassword.type = "text";
    passShowHide.classList.remove("bx-hide");
    passShowHide.classList.add("bx-show");
  } else {
    singupConfPass.type = "password";
    singupPassword.type = "password";
    passShowHide.classList.remove("bx-show");
    passShowHide.classList.add("bx-hide");
  }
};

const passShowHide = document.querySelector(".bx");
passShowHide.addEventListener("click", showPass);
