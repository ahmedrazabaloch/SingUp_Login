import {
  onAuthStateChanged,
  auth,
  signOut,
  sendEmailVerification,
} from "/firebase.js";

let userName = document.getElementById("user_name");
let userEmail = document.getElementById("user_email");
let logout = document.getElementById("logout_btn");

//User Confirmation if they login
onAuthStateChanged(auth, (user) => {
  if (user) {
    // sendEmailVerification(auth.currentUser).then(() => {
    //   console.log("Email verification sent!");
    // });
    location.pathname !== "/profile.html"
      ? (location = "/profile.html")
      : console.log("Welcome");

    userEmail ? (userEmail.innerHTML = user.email) : userEmail;

    userName
      ? (userName.innerHTML = user.email.slice(0, user.email.indexOf("@")))
      : userName;
  } else {
    location.pathname !== "/Login&Signup/login.html" &&
    location.pathname !== "/Login&Signup/signup.html" &&
    location.pathname !== "/Login&Signup/loginWithNum.html"
      ? (location = "/Login&Signup/login.html")
      : console.log("Can't access without login");
  }
});

//User SignOut
const userLogout = () => {
  signOut(auth)
    .then(() => {
      console.log("User signOut -->");
      location = "/Login&Signup/login.html";
    })
    .catch((error) => {
      console.log("error-->", error);
    });
};

logout && logout.addEventListener("click", userLogout);

const showProfile = () => {
  let showHide = document.getElementById("showHide");
  if (showHide.style.display === "none") {
    showHide.style.display = "block";
  } else {
    showHide.style.display = "none";
  }
};

const dropdownProfile = document.getElementById("dropdown");
dropdownProfile && dropdownProfile.addEventListener("click", showProfile);

const navProfile = () => {
  let mobileNav = document.getElementById("mobile-menu");
  if (mobileNav.style.display === "none") {
    mobileNav.style.display = "block";
  } else {
    mobileNav.style.display = "none";
  }
};

const navShowHide = document.getElementById("navShowHide");
navShowHide && navShowHide.addEventListener("click", navProfile);
