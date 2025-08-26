// Hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // Change icon based on menu state
  const icon = hamburger.querySelector("i");
  if (navMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Close menu when clicking on a link
const navItems = navMenu.querySelectorAll("div");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.querySelector("i").classList.remove("fa-times");
    hamburger.querySelector("i").classList.add("fa-bars");
  });
});

// Add to cart functionality
const addButtons = document.querySelectorAll(".add-btn");
addButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const foodItem = this.closest(".food-card > div");
    const itemName = foodItem.querySelector("h5").textContent;
    const itemPrice = foodItem.querySelector(".price").textContent;

    // Animation effect
    this.style.transform = "scale(0.8)";
    setTimeout(() => {
      this.style.transform = "scale(1.1)";
    }, 100);

    // Show notification (you can replace this with your cart logic)
    alert(`Added to cart: ${itemName} - ${itemPrice}`);
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll(".item div").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.textContent.toLowerCase();
    let targetElement;

    if (targetId === "home") {
      targetElement = document.querySelector(".header");
    } else if (targetId === "menu") {
      targetElement = document.querySelector(".food-card");
    }

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
