const flameContainer = document.getElementById('flameContainer');

// Create flame-like flakes dynamically
function createFlame() {
  const flame = document.createElement('div');
  flame.classList.add('flame');

  // Random positioning across the width
  flame.style.left = Math.random() * window.innerWidth + 'px';

  // Random duration for each flame's animation
  const duration = 4 + Math.random() * 3;
  flame.style.animationDuration = `${duration}s`;

  // Random size scaling for variety
  const size = 5 + Math.random() * 7; // Smaller size variation
  flame.style.width = size + 'px';
  flame.style.height = size + 'px';

  flameContainer.appendChild(flame);

  // Remove flame after animation ends to free up memory
  setTimeout(() => {
    flame.remove();
  }, duration * 1000);
}

// Create multiple flames over time
setInterval(createFlame, 200); // Creates a new flame every 200ms