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

// accordion
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;


    headers.forEach(h => {
      if (h !== header) {
        h.classList.remove('active');
        const c = h.nextElementSibling;
        c.style.maxHeight = null;
        c.classList.remove('open');
      }
    });


    header.classList.toggle('active');

    if (header.classList.contains('active')) {
      content.classList.add('open');
      content.style.maxHeight = content.scrollHeight + "px";

 
      content.addEventListener('transitionend', function setNone() {
        if (header.classList.contains('active')) {
          content.style.maxHeight = "none";
        }
        content.removeEventListener('transitionend', setNone);
      });

    } else {

      content.style.maxHeight = content.scrollHeight + "px";
      setTimeout(() => {
        content.style.maxHeight = null;
        content.classList.remove('open');
      }, 10);
    }
  });
});
