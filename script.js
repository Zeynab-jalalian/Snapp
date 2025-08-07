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


  document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll("header .dropdown");

    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector("a");

      trigger.addEventListener("click", function (e) {
       
        if (window.innerWidth <= 870) {
          e.preventDefault();
          dropdown.classList.toggle("open");
        }
      });
    });
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
