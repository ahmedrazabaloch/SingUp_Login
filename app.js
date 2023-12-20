import {
  onAuthStateChanged,
  auth,
  signOut,
  sendEmailVerification,
} from "/firebase.js";

let userDisplayName = document.getElementById("user_name");
let userEmail = document.getElementById("user_email");
let logoutButton = document.getElementById("logout_btn");

const notLoginPages = [
  "/Login&Signup/login.html",
  "/Login&Signup/signup.html",
  "/Login&Signup/loginWithNum.html",
];
const loginPages = ["/profile.html", "/index.html"];

//User Confirmation if they login
onAuthStateChanged(auth, (user) => {
  if (user) {
    // sendEmailVerification(auth.currentUser).then(() => {
    //   console.log("Email verification sent!");
    // });

    if (!loginPages.includes(location.pathname)) {
      location = "/profile.html";
    }
    if (userEmail) {
      userEmail.innerHTML = user.email;
    }
    if (userDisplayName) {
      userDisplayName.innerHTML = user.email.slice(0, user.email.indexOf("@"));
    }
  } else {
    if (!notLoginPages.includes(location.pathname)) {
      location = "/Login&Signup/login.html";
    }
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

logoutButton && logoutButton.addEventListener("click", userLogout);

// Show & Hide mobile navbar
const toggleDisplay = (element) => {
  element.style.display = element.style.display === "none" ? "block" : "none";
};

const dropdownProfile = document.getElementById("dropdown");
dropdownProfile &&
  dropdownProfile.addEventListener("click", () => {
    const showHide = document.getElementById("showHide");
    toggleDisplay(showHide);
  });

const navShowHide = document.getElementById("navShowHide");
navShowHide &&
  navShowHide.addEventListener("click", () => {
    const mobileNav = document.getElementById("mobile-menu");
    toggleDisplay(mobileNav);
  });
