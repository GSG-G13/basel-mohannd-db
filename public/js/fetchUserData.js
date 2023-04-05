const userName = window.location.href.split("http://localhost:3000/")[1];
const bgImg = document.querySelector(".profile-info .bg-img");
// const userImg = document.querySelector(".profile-info .user-img");
// const userNameElement = document.querySelector(".profile-info .user-name");
// const userBio = document.querySelector(".profile-info .user-bio");
// const skillsContainer = document.querySelector(".profile-info .user-skills");

fetch(`/${userName}/data`)
  .then((response) => response.json())
  .then((data) => renderUserData(data[0]))
  .catch((err) => console.log(err));

const renderUserData = (data) => {
  console.log(data);
  bgImg.src = data.bg_img_url;
  // userImg.src = data.img_url;
  // userNameElement.textContent = data.name;
  // userBio.textContent = data.bio_content;
  // console.log(data.skills);
};
