import { gsap } from "../node_modules/gsap/index.js";
import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

// HERO SECTION BY DEFAULT ANIMATION
gsap.from("#HeaderCard h4", {
  opacity: 0,
  y: 100,
  duration: 1.4,
  ease: "power3.out",
});

gsap.from("#HeaderCard h1", {
  opacity: 0,
  y: 100,
  duration: 1.4,
  delay: 0.5,
  ease: "power3.out",
});

gsap.from("#HeaderCard p", {
  opacity: 0,
  y: 100,
  duration: 1.4,
  delay: 1,
  ease: "power3.out",
});
gsap.from("#HeaderCard img", {
  opacity: 0,
  scale: 0.5,
  duration: 1.4,
  delay: 1.5,
  ease: "power3.out",
});

// HERO SECTION SLIDER AND ALSO RUN TEXT ANIMATION ON EVERY LOOP
$(document).ready(function () {
  $(".fade").slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 5000,
  });

  let lastSlideIndex = 0;

  function triggerAnimation() {
    gsap.from("#HeaderCard h4", {
      opacity: 0,
      y: 100,
      duration: 1.4,
      ease: "power3.out",
    });

    gsap.from("#HeaderCard h1", {
      opacity: 0,
      y: 100,
      duration: 1.4,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.from("#HeaderCard p", {
      opacity: 0,
      y: 100,
      duration: 1.4,
      delay: 1,
      ease: "power3.out",
    });
    gsap.from("#HeaderCard img", {
      opacity: 0,
      scale: 0.5,
      duration: 1.4,
      delay: 1.5,
      ease: "power3.out",
    });
  }

  // Check for slide change using setInterval
  setInterval(function () {
    let currentSlideIndex = $(".fade").slick("slickCurrentSlide");

    if (currentSlideIndex !== lastSlideIndex) {
      triggerAnimation();
      lastSlideIndex = currentSlideIndex;
    }
  }, 100);
});

// ABOUT SECTION START
gsap.from("#AboutContent h1", {
  opacity: 0,
  y: 50,
  duration: 1.4,
  delay: 0.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#AboutSection",
    start: "start 100%",
    toggleActions: "restart none none none",
  },
});

const Paragraphs = document.querySelector("#AboutPara22");
if(Paragraphs){
  console.log(Paragraphs.target);
  
}
// function AboutGetText() {
//   // FIND SINGLE WORD FROM THIS ANIMATION
//   let NewPara = "";
//   let Paragraph = Paragraphs.textContent;
//   // SPLIT SINGLE WORD IN ARRAY
//   let words = Paragraph.split(" ");

//   // RUN LOOP TO ADD WORDS IN VARAIBLE
//   for (let i = 0; i < words.length; i++) {
//     NewPara += `<span style="display: inline-block;" id="AboutSectionParaGraph">${words[i]}</span>`;
//     // ADD SPACE ON EVERY WORDS
//     if (i < words.length - 1) {
//       NewPara += " "; // Simple space between words
//     }
//   }

//   Paragraphs.innerHTML = NewPara;
//   // SET INITIAL VALUE
//   gsap.set("#AboutSectionParaGraph", {
//     opacity: 0,
//     x: 50,
//     rotationX: 90, // 3D rotation
//     transformPerspective: 500,
//   });
//   // RUN ANIMATION
//   gsap.to("#AboutSectionParaGraph", {
//     opacity: 1,
//     x: 0,
//     delay: 1,
//     rotationX: 0,
//     duration: 0.8,
//     ease: "easeOut",
//     stagger: 0.04,
//     scrollTrigger: {
//       //   scroller: '.container',
//       trigger: "#AboutSection",
//       toggleActions: "restart none none none",
//       start: "top 100%",
//     },
//   });
// }
// AboutGetText();
gsap.from("#AboutSection #AboutImage", {
  opacity: 0,
  scale: 0.7,
  duration: 1.9,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#AboutSection",
    start: "start 100%",
    toggleActions: "restart none none none",
  },
});

// FOR COUNTER BOTTOM TEXT
gsap.from("#AboutContent p", {
  opacity: 0,
  y: 70,
  duration: 2,
  delay: 0.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#AboutSection",
    start: "start 100%",
    toggleActions: "restart none none none",
  },
});
gsap.to("#Counter", {
  textContent: "100%",
  duration: 5,
  ease: "power1.out",
  snap: { textContent: 1 },
  scrollTrigger: {
    trigger: "#AboutSection",
    start: "start 100%",
    toggleActions: "restart none none none",
  },
});
// ABOUT SECTION END

// SERVICES START
gsap.from("#ServiceHeading", {
  opacity: 0,
  y: 50,
  duration: 1.4,
  delay: 0.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#ServiceBgImage",
    start: "start 70%",
    toggleActions: "restart none none none",
  },
});
gsap.from("#ServicesCard", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  delay: 0.5,
  ease: "power3.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#ServiceBgImage",
    start: "start 50%",
    toggleActions: "restart none none none",
  },
});

// PORTFOLIO SECTION START
gsap.from("#PortfolioHeader", {
  opacity: 0,
  y: 50,
  duration: 1.4,
  delay: 0.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#SliderBgImage",
    start: "start 90%",
    toggleActions: "restart none none none",
  },
});

const PortfolioPara = document.querySelector("#PortfolioPara");

// function PortfolioSection() {
//   // FIND SINGLE WORD FROM THIS ANIMATION
//   let NewPara = "";
//   let Paragraph = PortfolioPara.textContent;
//   // SPLIT SINGLE WORD IN ARRAY
//   let words = Paragraph.split(" ");

//   // RUN LOOP TO ADD WORDS IN VARAIBLE
//   for (let i = 0; i < words.length; i++) {
//     NewPara += `<span style="display: inline-block;" id="PortFolioPARA">${words[i]}</span>`;
//     // ADD SPACE ON EVERY WORDS
//     if (i < words.length - 1) {
//       NewPara += " "; // Simple space between words
//     }
//   }

//   PortfolioPara.innerHTML = NewPara;
//   // SET INITIAL VALUE
//   gsap.set("#PortFolioPARA", {
//     opacity: 0,
//     x: 50,
//     rotationX: 90, // 3D rotation
//     transformPerspective: 500,
//   });
//   // RUN ANIMATION
//   gsap.to("#PortFolioPARA", {
//     opacity: 1,
//     x: 0,
//     delay: 1,
//     rotationX: 0,
//     duration: 0.8,
//     ease: "easeOut",
//     stagger: 0.04,
//     scrollTrigger: {
//       trigger: "#PortfolioPara",
//       toggleActions: "restart none none none",
//       start: "top 100%",
//     },
//   });
// }
// PortfolioSection();

// PORTFOLIO SECTION END

// FAQS
gsap.from("#FaqsImage", {
  opacity: 0,
  scale: 0.7,
  duration: 1.9,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#FaqsSection",
    start: "start 80%",
    toggleActions: "restart none none none",
  },
});

gsap.from("#FaqsHeading", {
  opacity: 0,
  y: 50,
  duration: 1.4,
  delay: 0.5,
  ease: "power3.out",
  stagger: 0.6,
  scrollTrigger: {
    trigger: "#FaqsSection",
    start: "start 80%",
    toggleActions: "restart none none none",
  },
});

gsap.from("#TestimonialHeading", {
  opacity: 0,
  y: 50,
  duration: 1.4,
  delay: 0.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#Testimonials",
    start: "start 80%",
    toggleActions: "restart none none none",
  },
});

// INNER PAGES HEADER
document.addEventListener('DOMContentLoaded', function() {
  gsap.from("#InnerPagesHeader", {
    opacity: 0,
    y: 100,
    duration: 1.5,
    delay: 0.6,
    ease: "power3.out",
  });
});

// ABOUT PAGE
gsap.from("#AboutPageImage", {
  opacity: 0,
  scale: 0.7,
  duration: 1.9,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#AboutPage",
    start: "start 50%",
    toggleActions: "restart none none none",
  },
});
gsap.to("#AboutPageImage", {
  y: 100,
  duration: 1,
  scrub: 1,
  scrollTrigger: {
    scrub: 1,
    trigger: "#AboutPageImage",
  },
});
gsap.from("#AboutPageHeading", {
  opacity: 0,
  y: 50,
  duration: 1.4,
  delay: 0.5,
  ease: "power3.out",
  stagger: 0.6,
  scrollTrigger: {
    trigger: "#AboutPage",
    start: "start 50%",
    toggleActions: "restart none none none",
  },
});
const AboutParagrph = document.querySelector("#AboutParagrph");

// function AboutPageSections() {
//   // FIND SINGLE WORD FROM THIS ANIMATION
//   let NewPara = "";
//   let Paragraph = AboutParagrph.textContent;
//   // SPLIT SINGLE WORD IN ARRAY
//   let words = Paragraph.split(" ");

//   // RUN LOOP TO ADD WORDS IN VARAIBLE
//   for (let i = 0; i < words.length; i++) {
//     NewPara += `<span style="display: inline-block;" id="AboutParagrph1">${words[i]}</span>`;
//     // ADD SPACE ON EVERY WORDS
//     if (i < words.length - 1) {
//       NewPara += " "; // Simple space between words
//     }
//   }

//   AboutParagrph.innerHTML = NewPara;
//   // SET INITIAL VALUE
//   gsap.set("#AboutParagrph1", {
//     opacity: 0,
//     x: 50,
//     rotationX: 90, // 3D rotation
//     transformPerspective: 500,
//   });
//   // RUN ANIMATION
//   gsap.to("#AboutParagrph1", {
//     opacity: 1,
//     x: 0,
//     delay: 0.3,
//     rotationX: 0,
//     duration: 0.6,
//     ease: "easeOut",
//     stagger: 0.01,
//     scrollTrigger: {
//       trigger: "#AboutPage",
//       toggleActions: "restart none none none",
//       start: "top 50%",
//     },
//   });
// }
// AboutPageSections();
