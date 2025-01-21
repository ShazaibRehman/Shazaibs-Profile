// Select the cursor element
const cursor = document.querySelector('.cursor');

// Track mouse movement to update cursor position
document.addEventListener('mousemove', e => {
  // Calculate the new position based on the viewport (client) position
  const mouseX = e.clientX - 25; // Subtract half of the cursor width (50px / 2)
  const mouseY = e.clientY - 25; // Subtract half of the cursor height (50px / 2)

  // Move the cursor smoothly with a translate3d transformation
  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
});

// Add click event to trigger expand animation
document.addEventListener('click', () => {
  cursor.classList.add('expand');

  // Remove the animation class after it finishes
  setTimeout(() => {
    cursor.classList.remove('expand');
  }, 500); // Match the animation duration in the CSS
});


//_______________________________________________PROGRESS BAR__________________________________________________
// Function to update the progress bar width based on scroll position
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progressPercentage = (scrollTop / scrollHeight) * 100;

  document.querySelector('.progress-bar').style.width = progressPercentage + "%";
});
