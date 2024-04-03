gsap.from('.logo',{opacity: 0, duration: 1, delay:2, y:10})
gsap.from('.navbar a',{opacity: 0, duration: 1, delay:2.1, y:30, stagger:0.2})
gsap.from('.left',{opacity: 0, duration: 1, delay:2, y:20, stagger:0.2})
gsap.from('.right',{opacity: 0, duration: 1, delay:2, y:10})
gsap.from('.left-2',{opacity: 0, duration: 1, delay:2, y:10})
gsap.from('.right-2',{opacity: 0, duration: 1, delay:1.5, y:30, stagger:0.3})
gsap.from('.cards', {
    opacity: 0,
    duration: 1,
    delay: 2,
    stagger: 1, 
    onComplete: function() {
      gsap.to('.cards', {
        x: '0%', // Reset cards' position after animation completes
        duration: 2,
        delay: 1
      });
    }
  });
  

