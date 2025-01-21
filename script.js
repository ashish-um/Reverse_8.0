    // const lenis = new Lenis({
    //     duration: 1,
    //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)), // https://www.desmos.com/calculator/brs54l4xou
    //     direction: 'vertical', // vertical, horizontal
    //     gestureDirection: 'vertical', // vertical, horizontal, both
    //     smooth: true,
    //     mouseMultiplier: 1,
    //     smoothTouch: false,
    //     touchMultiplier: 1,
    //     infinite: false,
    // })

    // function raf(time) {
    //     lenis.raf(time)
    //     requestAnimationFrame(raf)
    // }

    // requestAnimationFrame(raf)


    gsap.registerPlugin(ScrollTrigger);
    
    // gsap.to(".video-section", {
    //     yPercent: -90, 
    //     ease: "none",
    //     scrollTrigger: {
    //     trigger: ".orange-bg",
    //     start: "bottom top",
    //     end: () => window.innerWidth < 768 ? "+=40%" : "+=80%",
    //     pinSpacing:false,
    //     // scrub: true,
    //     scrub: 0.5, // Add a slight delay to the scrub for smoothness
    //     invalidateOnRefresh: true, // Recalculate on resize
    //     fastScrollEnd: true, 
    //     // pin: true,
    //     //  markers:true
    // }});
    
    // gsap.to(".sticky-section", {
    //     yPercent:-100,
    //     scrollTrigger: {
    //     trigger: ".sticky-section",
    //     start: "top bottom", // Start when the top of the section hits the bottom of the viewport
    //     end: "", // End when the bottom of the section hits the bottom of the viewport
    //     pin: true, // Stick the section
    //     scrub: true, // Smooth scrolling
    //     pinSpacing:true,
    //     // markers:true
    // }
    // });

    new FlipDown(1742515485).start();


    var init = function() {
      var isMobile = navigator.userAgent &&
        navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
      var isSmall = window.innerWidth < 1000;
    
      var ps = new ParticleSlider({
        ptlGap: isMobile || isSmall ? 3 : 0,
        ptlSize: isMobile || isSmall ? 2 : 1,
        width: 1e9,
        height: 1e9,
        // color: '#000000', // Set the default color of particles to black
        // monochrome: true, // Enable monochrome mode
        // ptlSize:5,
      });
    
      // var gui = new dat.GUI();
      // gui.add(ps, 'ptlGap').min(0).max(5).step(1).onChange(function() {
      //   ps.init(true);
      // });
      // gui.add(ps, 'ptlSize').min(1).max(5).step(1).onChange(function() {
      //   ps.init(true);
      // });
      // gui.add(ps, 'restless');
      // gui.addColor(ps, 'color').onChange(function(value) {
      //   ps.monochrome = true;
      //   ps.setColor(value);
      //   ps.init(true);
      // });
      
      (window.addEventListener
        ? window.addEventListener('click', function() {
          ps.init(true);
        }, false)
        : window.onclick = function() {
          ps.init(true);
        });
    }
    
    var initParticleSlider = function() {
      var psScript = document.createElement('script');
      (psScript.addEventListener
        ? psScript.addEventListener('load', init, false)
        : psScript.onload = init);
      psScript.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js';
      psScript.setAttribute('type', 'text/javascript');
      document.body.appendChild(psScript);
    }
    
    (window.addEventListener
      ? window.addEventListener('load', initParticleSlider, false)
      : window.onload = initParticleSlider);
    

        let open = document.querySelector('.navbar--container');
        let menu = document.querySelector('.nav--open');
        let close = document.querySelector('.nav--open-icon');
        
        open.addEventListener('click', function() {
          menu.classList.toggle('close');
        });
        
        
        close.addEventListener('click', function() {
          menu.classList.toggle('close');
        })
        