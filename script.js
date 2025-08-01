/* menu */
const menuToggle = document.getElementById("menu-toggle");
const menuUl = document.querySelector(".menu-ul");

const closeBtn = document.createElement("div");
closeBtn.classList.add("close-btn");
closeBtn.innerHTML = '<i class="fas fa-times"></i>';
menuUl.prepend(closeBtn);

menuToggle.addEventListener("click", () => {
  menuUl.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menuUl.classList.remove("active");
});
/* slider */
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
