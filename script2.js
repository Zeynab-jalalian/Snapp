const filterButtons = document.querySelectorAll(".category-of-join li");
const jobBoxes = document.querySelectorAll(".join-box");

function handleFilter(button) {
 
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
}


filterButtons.forEach((button) => {
  ["click", "touchstart"].forEach((evt) => {
    button.addEventListener(evt, (e) => {
      e.preventDefault(); 
      handleFilter(button);
    });
  });
});
