const register = () => {
  event.preventDefault();
  console.log("testing");
};
let registration = document.getElementById("register");
registration.addEventListener("click", register);
