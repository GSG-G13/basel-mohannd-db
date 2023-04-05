// Fetch Data
// fetch("/ahmed-mo")
//   .then((data) => console.log(data))
//   .catch(console.log);

// Handle Active Link
const menu = document.querySelector("header");
const links = document.querySelectorAll("header .menu .link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
