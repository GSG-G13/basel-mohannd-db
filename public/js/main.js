// Main Variables
const popUp = document.querySelector(".pup-up");
const closeIcon = document.querySelector(".pup-up .close");
const popUpForm = document.querySelector(".pup-up form");
const addPost = document.querySelector(".add-post .content-box");
const postTextInput = document.querySelector(".pup-up textarea");
const postImgUrlInput = document.querySelector(".pup-up input");
const postAddBtn = document.querySelector(".pup-up button");

// Show & Hide Add Post Pop Up
addPost.addEventListener("click", () => {
  popUp.classList.add("show");
});
const hidePopUp = (e) => {
  popUp.classList.remove("show");
  postTextInput.value = "";
  postImgUrlInput.value = "";
};
closeIcon.addEventListener("click", hidePopUp);

// Handle Active Link
// const menu = document.querySelector("header");
// const links = document.querySelectorAll("header .menu .link");

// links.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     links.forEach((link) => {
//       link.classList.remove("active");
//     });
//     e.target.classList.add("active");
//   });
// });
