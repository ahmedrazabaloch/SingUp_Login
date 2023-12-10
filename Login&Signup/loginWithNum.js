import { country } from "./countryCode.js";

let select = document.getElementById("select");

country.forEach((countryData) => {
  select.innerHTML += `
  <option value="${countryData.dial_code}">${countryData.code} ${countryData.dial_code}</option>
  `;
});

const loginnumber = document.getElementById("login_number");
const numberPass = document.getElementById("number_password");
// let optionValue = document.getElementById("optionValue");

const numberRegister = (e) => {
  e.preventDefault();
  let selectedOption = select.options[select.selectedIndex];
  console.log("optionValue ==> ", selectedOption.value);
};

const numLogin = document
  .getElementById("num_login")
  .addEventListener("click", numberRegister);