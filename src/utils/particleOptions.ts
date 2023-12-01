import type { ISourceOptions } from "tsparticles-engine";

export const options: ISourceOptions = {
  fps_limit: 120,
  fullScreen: {
    zIndex: -100,
  },

  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#fff",
    },
    links: {
      color: "#fff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  themes: [
    {
      name: "light",
      default: {
        value: true,
        mode: "light",
      },
      options: {
        background: {
          color: "#f1f5f9",
        },
        particles: {
          color: {
            value: "#4e9ae3",
          },
          links: {
            color: "#1e3050",
          },
        },
      },
    },
    {
      name: "dark",
      default: {
        value: false,
        mode: "dark",
      },
      options: {
        background: {
          color: "#1e3050",
        },
        particles: {
          color: {
            value: "#fff",
          },
        },
      },
    },
  ],
  detectRetina: true,
};
