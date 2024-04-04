


// import { gsap } from "gsap/dist/gsap";
    
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


// gsap.registerPlugin(ScrollTrigger);

// let tl = gsap.timeline({
//   ScrollTrigger: {
//     trigger: ".hero-text",
//     start: "top center",
//     end: "bottom center",
//     scrub: true,
//     markers: ture,
//   },
// });

// tl.to(".hero-text ", {
//   x: 500,
// });

// toggleActions: onenter onleave onenterback onleaveback


 // use a script tag or an external JS file

 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.header-cont',
      start: 'top -800px',
      end: 'bottom top',
      scrub: false,
      markers: false,
      toggleActions: 'play play reverse reverse',
    }
  
  })
  
  
  tl.to ('.header-cont',{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10000,
    duration: .5,
    height: 80,
    backgroundColor: '#111827'
  })
  
  let tsa = gsap.timeline({
    scrollTrigger: {
      trigger: '.box-3',
      start: '-100px center',
      end: 'bottom 600px',
      scrub: true,
      markers: false
    }
  })
  
  tsa.from ('.box-3',{
    x: -740,
  })

  let tsb = gsap.timeline({
    scrollTrigger: {
      trigger: '.box-2',
      start: '-100px center',
      end: 'bottom 600px',
      scrub: true,
      markers: false
    }
  })
  
  
  tsb.from ('.box-2',{
    x: -370,
  })

  let tsc = gsap.timeline({
    scrollTrigger: {
      trigger: '.box-4',
      start: '-470px center',
    end: 'top 600px',
      scrub: true,
      markers: false
    }
  })

  tsc.from ('.box-4', {
    x: 740,
  })

  let tsd = gsap.timeline({
    scrollTrigger: {
      trigger: '.box-5',
      start: '-470px 400px',
      end: 'top 600px',
      scrub: true,
      markers: false,
    }
  })
  
  
  tsd.from ('.box-5',{
    x: 370,
  })

  let reva = gsap.timeline({
    scrollTrigger: {
      trigger: '.r-box2',
      start: 'center 800px',
      end: 'bottom 700px',
      scrub: true,
      markers: true,
    }
  })

  reva.from('.r-box2', {
    y: -180,
  })


  let revb = gsap.timeline({
    scrollTrigger: {
      trigger: '.r-box3',
      start: 'top 700px',
      end: 'bottom 600px',
      scrub: true,
      markers: true,
    }
  })

  revb.from('.r-box3', {
    y: -360,
  })

  // let revc = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.r-box4',
  //     start: '-200px center',
  //     end: 'center center',
  //     scrub: true,
  //     markers: false,
  //   }
  // })

  // revc.from('.r-box4', {
  //   y: -480,
  // })
  
 });

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.whatsapp',
//     start: 'top center',
//     end: 'bottom center',
//     scrub: true,
//     markers: true,
//   },
//   scrollTrigger: {
//     trigger: '.header-cont',
//     start: 'top -800px',
//     end: 'bottom top',
//     scrub: false,
//     markers: false,
//     toggleActions: 'play play reverse reverse',
//   }

// })

// tl.to ('.whatsapp',{
//   x: 0,
//   duration: 1,
//   ease: "Power2.easeOut",

// })


// tl.to ('.header-cont',{
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   zIndex: 10000,
//   duration: .5,
//   height: 80,
//   backgroundColor: '#111827'
// })

// let ts = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.box-1',
//     start: 'top center', // Adjust according to your needs
//     end: 'bottom center', // Adjust according to your needs
//     scrub: true,
//     markers: true, // Set to false when you're done debugging
//   }
// });

// ts.to('.box-1', {
//   x: 0
// });




