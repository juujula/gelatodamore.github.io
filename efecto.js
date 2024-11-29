const target = document.querySelector(".target");
const links = document.querySelectorAll(".mynav a");
const colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];

// Add event listeners for click and hover events
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => e.preventDefault());
  links[i].addEventListener("mouseenter", mouseenterFunc);
}

function mouseenterFunc() {
  // Reset opacity for all links and remove "active" class
  for (let i = 0; i < links.length; i++) {
    links[i].style.opacity = "0.25";  // Dim all links
    links[i].parentNode.classList.remove("active");  // Remove 'active' class from parent
  }

  // Set opacity and "active" class for the hovered link
  this.style.opacity = "1";  // Highlight the hovered link
  this.parentNode.classList.add("active");  // Add 'active' class to parent

  // Get the bounding rectangle for the hovered link
  const rect = this.getBoundingClientRect();
  const color = colors[Math.floor(Math.random() * colors.length)];

  // Update the target styles
  target.style.width = `${rect.width}px`;
  target.style.height = `${rect.height}px`;
  target.style.left = `${rect.left + window.pageXOffset}px`;
  target.style.top = `${rect.top + window.pageYOffset}px`;
  target.style.borderColor = color;
  target.style.transform = "none";  // Ensure no transform scale/rotate
}

// Handle window resize event
window.addEventListener("resize", resizeFunc);

function resizeFunc() {
  const active = document.querySelector(".mynav li.active");
  if (active) {
    const rect = active.getBoundingClientRect();
    target.style.left = `${rect.left + window.pageXOffset}px`;
    target.style.top = `${rect.top + window.pageYOffset}px`;
  }
}