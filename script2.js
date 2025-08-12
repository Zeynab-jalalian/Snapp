
const filterButtons = document.querySelectorAll(".category-of-join li ");
const jobBoxes = document.querySelectorAll(".join-box");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
   
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    const category = button.dataset.category;


    jobBoxes.forEach((box) => {
      if (category === "all" || box.dataset.category === category) {
        box.style.display = "flex"; 
      } else {
        box.style.display = "none";
      }
    });
  });
});
