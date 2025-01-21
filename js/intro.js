if (window.innerWidth > 834) {
  document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll('.intro span');
    const intro = document.querySelector('.intro');
    const mainContent = document.querySelector('main');
    var introTop = document.querySelector('.intro-top-section');
    var introBottom = document.querySelector('.intro-bottom-section');
    var letterH = document.querySelector('.letterH');
    var letterZ = document.querySelector('.letterZ')
    var letterI = document.querySelector('.letterI')
    const tl = gsap.timeline();

        gsap.timeline()
      .to(letters, {
        delay: 1,
        translateY: 0, // Move to original position
        duration: 1.2, // Duration of the animation
        ease: "power4.out", // Easing function for smoothness
        stagger: 0.099, // Delay each letter's animation
      });
  
      gsap.timeline()
      .to(letterH, {
        delay: 2.8,
        translateY: 0, // Move to original position
      });
      gsap.timeline()
      .to(letterZ, {
        delay: 2.8,
        translateY: 0, // Move to original position
      });
      gsap.timeline()
      .to(letterI, {
        delay: 2.8,
        translateY: 0, // Move to original position
      });
  
    // After 5 seconds, fade out the intro and show the main content
    tl.to(intro, {
      delay: 2.5,
      translateY: '-100%', // Slide the intro out of view
      duration: .8, // Duration of the slide-out
      ease: "power4.inOut", // Easing for smoothness
      onComplete: () => {
        intro.style.display = 'none'; // Hide the intro section
        mainContent.style.visibility = 'visible'; // Show the main content 
      }
    },); // Add a 1 second delay before the slide out
  });
}
