document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    const nav = document.querySelector(".nav");
  
    menuIcon.addEventListener("click", () => {
      nav.classList.add("active");
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    });
  
    closeIcon.addEventListener("click", () => {
      nav.classList.remove("active");
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    });
  });
  



new Splide(".splide", {
  arrow:(boolean = false),
}).mount();

