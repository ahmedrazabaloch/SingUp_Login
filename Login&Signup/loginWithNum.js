import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebase.js";

const input = document.querySelector("#phone"); //input value
const iti = window.intlTelInput(input, {
  // country code library
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
  initialCountry: "pk", // default country set
});

// Firebase recaptcha
window.recaptchaVerifier = new RecaptchaVerifier(
  auth,
  "recaptcha-container",
  {}
);
let otpInput = document.getElementById("otp_input"); // otp input
let otpDiv = document.querySelector(".otpDiv"); // otp input

let confirmation; // otp register in this varibale
// refister number
const numberRegister = (e) => {
  e.preventDefault(); // form reloading stop
  const phoneNumber = iti.getNumber(); // getting number from input
  const appVerifier = window.recaptchaVerifier; // recaptcha call
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    //number registeration
    .then((confirmationResult) => {
      console.log("OTP sent");
      confirmation = confirmationResult;
      otpDiv.classList.remove("otpDiv");
    })
    .catch((error) => {
      console.log(error);
    });
};
const numLogin = document
  .getElementById("num_login")
  .addEventListener("click", numberRegister);
//Verify OTP
const verifyOtp = (e) => {
  e.preventDefault();
  console.log(otpInput.value);
  confirmation
    .confirm(otpInput.value)
    .then((result) => {
      const user = result.user;
      console.log("user", user);
    })
    .catch((error) => {
      console.log(error);
    });
};

const confirmotp = document
  .getElementById("confirm_otp")
  .addEventListener("click", verifyOtp);
