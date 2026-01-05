const btn = document.querySelector(".btn primary");

btn.addEventListener("click", () => {
 window.location.href = "create.html";
});
const community = document.querySelector(".community");

window.addEventListener("scroll", () => {
  const rect = community.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    community.classList.add("show");
  }
});
