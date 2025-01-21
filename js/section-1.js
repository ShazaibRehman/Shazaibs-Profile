
const textContainer = document.querySelector('.section-1 article h1');

function toggleAnimation() {
  textContainer.classList.add('text-container-active');

  setTimeout(() => {
    textContainer.classList.remove('text-container-active');
  }, 4000);
}

toggleAnimation(); 

setInterval(toggleAnimation, 8000); 

//-----------------------------------------------GSAP--------------------------------------------
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

if (window.innerWidth > 834){
    gsap.to('.section-1 .s1-text-container', {
      delay: 3.5,
      opacity: 1,
      ease: "power2.Inout",             
    });

    gsap.to('.section-1 .scroll-down', {
      opacity: 0,
      scrollTrigger: {
        trigger: '.section-1',
        start: 'top+=20% top',
        end: 'bottom-=80%',
        scrub: 1,
        once: false,
      }
    });
  }
else {
  gsap.to('.section-1 .s1-intro-after span', {
    delay: .5,
    opacity: 1,
    stagger: 0.1,
    ease: "power2.Inout",             
  });

  // gsap.to('.section-1 .s1-text-container', {
  //   opacity: 1,
  // });

  gsap.to('.section-1 .s1-text-container h1', {
    opacity: 1,
    y: 0,
    ease: "power2.out",   
    delay: 1.2,          
  });

//------------------------------------------SCROLL DOWN TEXT ANIMATION----------------------------------
gsap.to('.section-1 .scroll-down', {
    opacity: 0,
    scrollTrigger: {
      trigger: '.section-1',
      start: 'top+=10% top',
      end: 'bottom-=90%',
      scrub: 1,
      once: false
    }
  });
}
});


