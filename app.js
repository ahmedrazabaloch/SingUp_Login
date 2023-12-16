const showProfile = () => {
  let showHide = document.getElementById("showHide");
  if (showHide.style.display === "none") {
    showHide.style.display = "block";
  } else {
    showHide.style.display = "none";
  }
};

const dropdownProfile = document.getElementById("dropdown");
dropdownProfile.addEventListener("click", showProfile);

const navProfile = () => {
  let mobileNav = document.getElementById("mobile-menu");
  if (mobileNav.style.display === "none") {
    mobileNav.style.display = "block";
  } else {
    mobileNav.style.display = "none";
  }
};

const navShowHide = document.getElementById("navShowHide");
navShowHide.addEventListener("click", navProfile);
