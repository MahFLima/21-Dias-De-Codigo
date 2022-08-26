tsParticles.load("tsparticles", {
  particles: {
    shape: {
      type: ["circle", "star", "edge"]
    },
    number: {
      value: 200
    },
    move: {
      enable: true
    },
    color: {
      value: "random"
    },
    links: {
      enable: true,
      distance: 100,
      color: "random",
      opacity: 0.4,
      width: 1
    }
  }
});
