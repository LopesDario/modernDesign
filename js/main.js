var tl = new TimelineMax();

tl.staggerFrom(
  "section",
  2,
  {
    opacity: 0,
    scale: 0.5,
    ease: Power2.easeOut
  },
  0.2
);
