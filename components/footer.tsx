"use client";

import React, { useEffect } from "react";
import Script from "next/script";

const Footer: React.FC = () => {
  useEffect(() => {
    const initializeParticles = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 4000,
              },
            },
            color: {
              value: ["#09a6cc", "#ffbc0f", "#7fd42b"],
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "transparent",
              },
              polygon: {
                nb_sides: 1,
              },
              image: {
                src: "img/github.svg",
                width: 150,
                height: 150,
              },
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 2,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: false,
                speed: 10,
                size_min: 1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 200,
              color: "#09A2CC",
              opacity: 0.5,
              width: 2.2,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 80,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 1,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        });
      }
    };

    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    script.onload = initializeParticles;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer>
      <p>© 2024 Your Company. All rights reserved.</p>
      {/* Particles.js script loaded dynamically */}
      <Script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" strategy="afterInteractive" />
    </footer>
  );
};

export default Footer;