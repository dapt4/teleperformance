"use strict";
//variables
const contentMenuList = document.querySelector(".content_menu--list");
const contentMainAside = document.querySelector(".content_main--aside");
const userInput = document.querySelector("#user");
const passInput = document.querySelector("#pass");
const loginButton = document.querySelector("#loginButton");
const logedUser = document.querySelector("#logedUser");
const userLabel = document.querySelector("#userLabel");
const passLabel = document.querySelector("#passLabel");

//functions
function gotopage(item) {
  location.href = `page.html?content=${item}`;
}
function showMenu() {
  let last = document.querySelector(".activ");
  last?.classList.remove("activ");
  contentMenuList.classList.toggle("active");
}
function showAside() {
  let last = document.querySelector(".active");
  last?.classList.remove("active");
  contentMainAside.classList.toggle("activ");
}
async function login() {
  if (userInput.value && passInput.value) {
    if (
      userInput.value === "teleperformance" &&
      passInput.value === "qwerty987654*"
    ) {
      sessionStorage.setItem("user", userInput.value);
      await init();
      location.reload();
    }else {
      alert("Usuario y contraseña invalidos");
    }
  } else {
    alert("Please fill the inputs");
  }
}
function logOut() {
  sessionStorage.removeItem("user");
  userInput.style.display = "";
  passInput.style.display = "";
  loginButton.style.display = "";
  userLabel.style.display = "";
  passLabel.style.display = "";
  logedUser.innerHTML = "<i class='fas fa-user'></i>";
}
//init
function init() {
  let login = sessionStorage.getItem("user");
  if (login) {
    userInput.style.display = "none";
    passInput.style.display = "none";
    loginButton.style.display = "none";
    userLabel.style.display = "none";
    passLabel.style.display = "none";
    logedUser.innerHTML = login + " <i class='fas fa-sign-out-alt'></i>";
  }
}
init();
