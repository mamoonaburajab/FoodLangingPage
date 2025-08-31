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

// Contact form handling
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  
  // Basic validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields");
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }
  
  // In a real application, you would send this data to a server
  // For this example, we'll just show a success message
  alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
  
  // Reset form
  contactForm.reset();
});