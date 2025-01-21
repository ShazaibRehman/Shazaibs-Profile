document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    const baseScale = 440;  // Maximum scale at base width
    const maxWidth = 1940;  // Reference width for the base scale
    const currentWidth = window.innerWidth;  // Current window width

    let scaleFactor;
    if (currentWidth <= maxWidth) {
        scaleFactor = baseScale * (currentWidth / maxWidth);
    } else {
        scaleFactor = baseScale + ((currentWidth - maxWidth) * (baseScale / maxWidth));
    }

    const scalePerScroll = 50;
    const totalScrollDistance = scaleFactor / scalePerScroll * 100;

    gsap.to(".section-3 .zoom-class", {
        scale: scaleFactor, // Dynamic scaling based on screen width
        transformOrigin: 'center center',
        ease: "power4.easeOut",
        scrollTrigger: {
            trigger: ".section-3",
            start: "top top",
            end: `+=${totalScrollDistance}%`,
            scrub: 1,
            pin: true,
        }
    });

    gsap.to(".section-3 .quote-1", {
        x: '-100%',
        y: '-100%',
        ease: "power4.easeOut",
        scrollTrigger: {
            trigger: ".section-3",
            start: "top top",
            end: `+=${totalScrollDistance / 8}%`,
            scrub: 1
        }
    });

    gsap.to(".section-3 .quote-2", {
        x: '-100%',
        y: '-100%',
        ease: "power4.easeOut",
        scrollTrigger: {
            trigger: ".section-3",
            start: "top top",
            end: `+=${totalScrollDistance / 8}%`,
            scrub: 1
        }
    });
});




  