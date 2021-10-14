gsap.registerPlugin(ScrollTrigger);

/* Lav en variabel, der henviser til alle sections */
const sections = document.querySelectorAll("#section1, #section4_billeder2");

/* Brug forEach() til at loope henover den */
sections.forEach((section) => {
  /* Inde i forEach()-loopet skal vi kave en henvisning til h2 og alle p'er */
  const h2 = section.querySelector("h2");
  const p = section.querySelectorAll("p");

  /* Lav animation for hhv. h2'eren og p'erne i en timeline */
  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 55%",
        end: "+=200",
        scrub: true,
        // markers: true,
        /*pin: true,*/
      },
    })
    .from(h2, {
      duration: 1,
      opacity: 0,
    })
    .from(p, {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
    });
});

// gsap.to("", {
//   // yPercent: 50,
//   //rotation: 360,
//   scrollTrigger: {
//     trigger: "",
//     start: "top top",
//     end: "bottom 90%",
//     pin: ".forsidetekst",
//     pinSpacing: false,
//     scrub: true,
//     markers: true,
//   },
// });

const showAnim = gsap
  .from(".navbar", {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  },
});

gsap.to("#hero", {
  yPercent: 0,
  ease: "none",
  scrollTrigger: {
    //trigger: ".navbar",
    start: "top 45%", // the default values
    end: "bottom 90%",
    scrub: true,
  },
});

gsap.to(".forsidetekst", {
  yPercent: -70,
  ease: "none",
  scrollTrigger: {
    trigger: "#hero",
    start: "top 10%",
    end: "bottom top",
    markers: true,
    scrub: true,
  },
});
