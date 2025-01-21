document.addEventListener("DOMContentLoaded", () => {
  // Check if the screen width is greater than or equal to 768px
  if (window.innerWidth >= 768) {
      gsap.registerPlugin(ScrollTrigger);
    
      gsap.to(".section-2 .s2-heading-border", {
          height: 200,
          top: '-50%',
          duration: 1,
          ease: "power2.out",             
          scrollTrigger: {
              trigger: ".section-2",          
              start: "top top",         
              end: "bottom top",        
              scrub: 1
          }
      });

      // Pinning the section and scrolling the text
      gsap.to(".section-2 .s2-scrolling-text", {
          yPercent: -100, // Move the content upwards by 100%
          ease: "none",
          scrollTrigger: {
              trigger: ".section-2",
              start: "top top",
              end: "bottom top", // Triggers for the full scroll height
              scrub: 1, // Smooth scrubbing
              pin: true, // Pin the section
              pinSpacing: false, // No additional spacing
          }
      });

      ScrollTrigger.create({
        trigger: ".section-2", // section-2 trigger
        start: "top-=5% top", // When section-2 reaches the top
        onEnter: () => {
          document.querySelector('.s2-heading').classList.add('active-heading-anm');
        },
        once: true 
      });
  }
  else {
    ScrollTrigger.create({
      trigger: ".section-2", // section-2 trigger
      start: "top-=40% top", // When section-2 reaches the top
      onEnter: () => {
        document.querySelector('.s2-heading').classList.add('active-heading-anm');
      },
      once: true 
    });

    gsap.to(".section-2 .s2-heading-border", {
      height: 200,
      top: '-50%',
      duration: 15,
      ease: "power2.out",             
      scrollTrigger: {
          trigger: ".section-2",          
          start: "top-=40% top",         
          end: "bottom-=80% bottom",        
          scrub: 2
      }
  });
  }
});
