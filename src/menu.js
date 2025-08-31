// Hamburger menu functionality (same as home page)
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

// Menu filtering functionality
const categoryButtons = document.querySelectorAll(".category-btn");
const menuItems = document.querySelectorAll(".menu-item");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    categoryButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    button.classList.add("active");

    // Get category to filter by
    const category = button.getAttribute("data-category");

    // Show/hide menu items based on category
    menuItems.forEach((item) => {
      if (
        category === "all" ||
        item.getAttribute("data-category") === category
      ) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Add to cart functionality
const addButtons = document.querySelectorAll(".add-btn");
addButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const menuItem = this.closest(".menu-item");
    const itemName = menuItem
      .querySelector("h3")
      .textContent.split("$")[0]
      .trim();
    const itemPrice = menuItem.querySelector(".price").textContent;

    // Animation effect
    this.style.transform = "scale(0.8)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 100);

    // Show notification (you can replace this with your cart logic)
    alert(`Added to cart: ${itemName} - ${itemPrice}`);
  });
});
