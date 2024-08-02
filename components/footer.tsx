"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";
import Container from "./common/container";

const Footer: React.FC = () => {
  useEffect(() => {
    const initializeParticles = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
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

      window.particlesJS("particles-js-f", {
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
    };

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    script.onload = initializeParticles;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <footer id="particles-js-f" className="pt-4 pb-4">
      <Container>
        <div className="footerFormWrap">
          <h2>Are You Ready For A Quality Service?</h2>
          <p>Hire A Dedicated Team Now!</p>
          <form className="footerForm" method="post" name="cta_footer">
            <div className="row">
              <div className="col-md-4 ">
                <label>Enter your full name</label>
                <input type="text" name="name" placeholder="Name*" />
              </div>
              <div className="col-md-4 ">
                <label>Enter your email</label>
                <input type="email" name="email" placeholder="Email*" />
              </div>
              <div className="col-md-4">
                <label>Enter your phone number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="submitWrap mt-4">
                <input type="submit" value="Get Started" className="buttonLink buttonClass" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="mainFooter">
          <svg
            xmlns="https://www.w3.org/2000/svg"
            width="340.866"
            height="71.583"
            viewBox="0 0 317.866 71.583"
          >
            <defs>
              <linearGradient
                id="wr7e468fta"
                x1="0.883"
                x2="0.36"
                y1="0.016"
                y2="0.962"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#8cc52d"></stop>
                <stop offset="1" stopColor="#8cd437"></stop>
              </linearGradient>
              <linearGradient
                id="9v14tylvsb"
                x1="0.001"
                x2="1"
                y1="0.5"
                y2="0.5"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#09a2cc"></stop>
                <stop offset="1" stopColor="#09bcd0"></stop>
              </linearGradient>
              <linearGradient
                id="8q4q35kzbc"
                x1="0.001"
                x2="1"
                y1="0.5"
                y2="0.5"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#ffc30c"></stop>
                <stop offset="1" stopColor="#ffb215"></stop>
              </linearGradient>
            </defs>
            <g data-name="TF Logo Gradient">
              <g fill="#fff" data-name="Group 1985">
                <g data-name="Group 1983">
                  <path
                    d="M109.822 3.944v5.013h-8.021v21.342h-5.944V9.029h-8.021V4.016h21.986z"
                    data-name="Path 17517"
                  ></path>
                  <path
                    d="M132.381 17.622v12.676h-5.8v-11.03c0-2.578-1.5-4.154-4.01-4.154-2.865.072-4.655 2.22-4.655 5.228v9.956h-5.8V2.368h5.8v11.244a7.583 7.583 0 017.018-3.8c4.58.004 7.447 3.012 7.447 7.81z"
                    data-name="Path 17518"
                  ></path>
                  <path
                    d="M158.163 20.201c0 6.159-4.369 10.313-10.814 10.313-6.517 0-10.886-4.154-10.886-10.313 0-6.231 4.369-10.313 10.886-10.313 6.445 0 10.814 4.082 10.814 10.313zm-15.9.072c0 3.294 2.077 5.586 5.085 5.586s5.013-2.292 5.013-5.586-2.077-5.586-5.013-5.586c-3.007.001-5.085 2.291-5.085 5.585z"
                    data-name="Path 17519"
                  ></path>
                  <path
                    d="M182.083 10.031v20.267h-5.729v-3.581c-1.361 2.578-3.724 3.8-6.8 3.8-4.512 0-7.3-3.008-7.3-7.734V10.031h5.8v11.028c0 2.578 1.432 4.082 3.8 4.082 2.793-.072 4.512-2.22 4.512-5.156V9.959h5.729z"
                    data-name="Path 17520"
                  ></path>
                  <path
                    d="M207.434 10.031v18.334c0 5.729-4.3 9.382-10.814 9.382a15.821 15.821 0 01-8.809-2.65l2.148-4.082a10.985 10.985 0 006.3 2.005c3.294 0 5.443-1.79 5.443-4.512v-2.292a7.216 7.216 0 01-6.087 2.936c-5.228 0-8.809-3.939-8.809-9.811 0-5.729 3.509-9.6 8.665-9.6a7.215 7.215 0 016.231 2.936V9.96h5.729zm-5.729 9.6c0-3.151-1.934-5.3-4.727-5.3s-4.727 2.148-4.8 5.3c.072 3.079 1.934 5.228 4.8 5.228 2.793-.003 4.731-2.152 4.731-5.231z"
                    data-name="Path 17521"
                  ></path>
                  <path
                    d="M234.003 17.622v12.676h-5.8v-11.03c0-2.578-1.5-4.154-4.01-4.154-2.865.072-4.655 2.22-4.655 5.228v9.956h-5.8V2.368h5.8v11.244a7.583 7.583 0 017.018-3.8c4.58.004 7.447 3.012 7.447 7.81z"
                    data-name="Path 17522"
                  ></path>
                  <path
                    d="M252.337 29.152a10.792 10.792 0 01-5.3 1.361c-3.581 0-6.374-2.077-6.374-6.231v-9.306h-2.792v-4.01h2.793v-5.59h5.729v5.586h5.514v4.014h-5.443v8.379c0 1.719.716 2.363 1.934 2.363a6.654 6.654 0 002.721-.788z"
                    data-name="Path 17523"
                  ></path>
                </g>
                <g data-name="Group 1984">
                  <path
                    d="M108.246 42.687v2.793h-13.75v9.453h12.318v2.721H94.496V68.97h-3.008V42.687z"
                    data-name="Path 17524"
                  ></path>
                  <path
                    d="M123.142 49.133v2.865c-4.154-.072-6.8 2.507-7.09 6.517v10.456h-2.936V49.205h2.936v4.368a7.267 7.267 0 017.09-4.44z"
                    data-name="Path 17525"
                  ></path>
                  <path
                    d="M139.256 68.971v-3.08c-1.576 2.148-4.082 3.223-7.233 3.223-4.082 0-6.732-2.578-6.732-6.016s2.721-5.658 7.376-5.658h6.517v-1.217c0-2.865-1.79-4.655-5.3-4.655a11.171 11.171 0 00-6.3 2.292l-1.217-2.077a13.214 13.214 0 018.093-2.65c4.87 0 7.591 2.578 7.663 6.8l.072 13.106h-2.936zm0-6.8v-2.438h-6.159c-3.294 0-5.013 1-5.013 3.223 0 2.148 1.79 3.652 4.583 3.652 3.224.071 5.801-1.575 6.589-4.441z"
                    data-name="Path 17526"
                  ></path>
                  <path
                    d="M182.296 56.796v12.175h-2.936V57.512c0-3.581-2.077-5.658-5.514-5.658-4.082.143-6.445 3.079-6.445 7.376v9.74h-2.933V57.512c0-3.581-2.005-5.658-5.514-5.658-4.082.143-6.517 3.079-6.517 7.376v9.74h-2.869V49.205h2.865v4.512c1.289-3.079 4.01-4.583 7.591-4.583 3.724 0 6.3 1.862 7.09 5.156 1.217-3.438 4.01-5.085 7.806-5.156 4.583-.001 7.376 2.864 7.376 7.662z"
                    data-name="Path 17527"
                  ></path>
                  <path
                    d="M206.646 60.161h-16.185a6.945 6.945 0 007.162 6.445 8.6 8.6 0 006.159-2.507l1.647 1.719a10.448 10.448 0 01-7.949 3.294c-5.8 0-9.883-4.082-9.883-10.026a9.575 9.575 0 019.81-10.025c6.446.072 9.597 4.44 9.239 11.1zm-2.578-2.292c-.215-3.867-2.721-6.3-6.589-6.3a6.732 6.732 0 00-6.947 6.3z"
                    data-name="Path 17528"
                  ></path>
                  <path
                    d="M211.587 49.204l5.872 16.83 5.729-16.83h3.079l5.8 16.83 5.8-16.83h3.079l-7.3 19.766h-3.079l-5.8-16.185-5.8 16.185h-3.079l-7.38-19.766z"
                    data-name="Path 17529"
                  ></path>
                  <path
                    d="M262.72 59.088a10.026 10.026 0 01-20.052 0c0-5.872 4.154-9.955 10.026-9.955a9.609 9.609 0 0110.026 9.955zm-17.188 0c0 4.44 2.936 7.448 7.09 7.448s7.09-3.008 7.09-7.448c0-4.369-3.008-7.376-7.09-7.376-4.154-.001-7.089 3.007-7.089 7.376z"
                    data-name="Path 17530"
                  ></path>
                  <path
                    d="M278.691 49.133v2.865c-4.154-.072-6.8 2.507-7.09 6.517v10.456h-2.936V49.205h2.936v4.368a7.4 7.4 0 017.09-4.44z"
                    data-name="Path 17531"
                  ></path>
                  <path
                    d="M290.794 58.94l-4.154 4.3v5.73h-2.936V41.04h2.936v18.405l10.169-10.241h3.438l-7.376 7.663 8.233 12.173h-3.509z"
                    data-name="Path 17532"
                  ></path>
                  <path
                    d="M310.774 51.568c-2.22 0-3.939.788-3.939 2.65 0 4.512 11.029 2.148 11.029 9.31 0 3.867-3.438 5.586-7.233 5.586a11.265 11.265 0 01-7.591-2.794l1.146-2.148a10.053 10.053 0 006.589 2.507c2.363 0 4.225-.931 4.225-2.865.14-4.798-10.96-2.364-10.96-9.382 0-3.8 3.294-5.371 6.875-5.371a11.849 11.849 0 016.3 1.79l-1.146 2.292a9.968 9.968 0 00-5.295-1.575z"
                    data-name="Path 17533"
                  ></path>
                </g>
              </g>
              <g className="rlogo" data-name="Group 1986">
                <path
                  fill="url(#wr7e468fta)"
                  d="M70.493 60.849c0-6.3-.072-12.6 0-18.907a2.122 2.122 0 00-1.146-2.148c-1.289-.645-2.507-1.432-3.8-2.148L63.833 36.5l-.215.143-8.594 5.228.788.5 4.512 2.65a2.016 2.016 0 011.146 2.005c-.286 3.867.072 7.734 0 11.6-.143 5.3.072 10.6.072 15.9a5.033 5.033 0 01-2.721 4.655A13.433 13.433 0 0147 79.469c-2.148-.859-2.865-2.721-2.936-4.87 0-.716 0-1.432.072-2.148v-.072l.215-4.082-7.806-4.082a4.223 4.223 0 00-.573-.286l-1.072-.573V78.4a8.281 8.281 0 00.573 3.223 12.9 12.9 0 005.443 6.517c.072.072.143.072.286.143.573.358 1.074.645 1.647.931l.43.215a21.2 21.2 0 0020.554-.645c.716-.43 1.432-.788 2.148-1.289 2.936-2.22 4.727-5.013 4.655-8.88-.286-6.021-.143-11.893-.143-17.766z"
                  data-name="Path 17534"
                  transform="translate(-14.096 -20.167)"
                ></path>
                <path
                  fill="url(#9v14tylvsb)"
                  d="M51.648 51.313v-1.146a65.158 65.158 0 00-6.3 3.223c-1.217.859-2.22.573-3.438-.143-3.079-1.862-6.231-3.652-9.382-5.514-4.512-2.578-9.024-5.156-13.464-7.806a4.849 4.849 0 01-2.435-4.512c.072-4.44 2.435-7.734 5.729-10.384a4.51 4.51 0 015.228-.286 4 4 0 01.573.358l5.586 3.366 8.88-5.371-.716-.5-13.32-7.663c-4.512-2.363-8.737-.859-12.676 1.719a1.562 1.562 0 00-.358.286 21.074 21.074 0 00-9.526 16.111.541.541 0 01-.072.286 16.191 16.191 0 000 3.724 10.7 10.7 0 003.8 7.949c2.435 2.005 5.3 3.294 7.949 4.87 7.734 4.583 15.612 8.88 23.275 13.464 1.79 1.074 3.366 1.5 5.013.716v.072l5.872-3.366z"
                  data-name="Path 17535"
                  transform="translate(-5.85 -13.71)"
                ></path>
                <path
                  fill="url(#8q4q35kzbc)"
                  d="M90.479 33.464a24.535 24.535 0 00-6.8-14.18 23.71 23.71 0 00-4.3-3.151 23.2 23.2 0 00-2.292-1.217 10.806 10.806 0 00-8.809-.5c-2.936 1.217-5.443 3.079-8.164 4.655-7.734 4.512-15.326 9.31-23.06 13.822-1.647 1-2.793 2.077-3.008 3.652L32.9 41.556s10.671 6.3 10.742 6.374c0 0 .072-.859.072-.931 0-1 .072-1.934.072-2.936 0-.859.072-1.647 0-2.507-.143-1.5.573-2.22 1.719-2.936 3.151-1.79 6.231-3.724 9.382-5.586 4.44-2.65 8.88-5.371 13.32-8.021a4.946 4.946 0 015.156 0c3.867 2.22 5.586 5.872 6.3 10.026a4.32 4.32 0 01-2.292 4.655c-.788.5-1.576.931-2.363 1.361a15.087 15.087 0 00-2.22 1.432L71.5 43.2v10.6l.286-.143 1-.5v-.072a.07.07 0 00.072-.072c4.225-2.507 8.522-4.941 12.6-7.663 4.305-2.65 5.522-7.231 5.021-11.886z"
                  data-name="Path 17536"
                  transform="translate(-13.528 -13.693)"
                ></path>
              </g>
            </g>
          </svg>
          <ul
            id="footerMenu"
            className="d-flex justify-content-center list-unstyled mt-4 mb-4"
          >
            <li className="menu-item p-2">
              <Link href="https://www.thoughtframeworks.com/about-us/">
                About Us
              </Link>
            </li>
            <li className="menu-item p-2">
              <Link href="https://www.thoughtframeworks.com/careers/">
                Careers
              </Link>
            </li>
            <li className="menu-item p-2">
              <Link href="https://www.thoughtframeworks.com/contact-us/">
                Contact Us
              </Link>
            </li>
            <li className="menu-item p-2">
              <Link href="https://www.thoughtframeworks.com/sitemap/">
                Sitemap
              </Link>
            </li>
            <li className="menu-item p-2">
              <Link href="https://www.thoughtframeworks.com/terms-condition/">
                Terms & Conditions
              </Link>
            </li>
            <li className="menu-item p-2">
              <Link href="https://www.thoughtframeworks.com/privacy/">
                Privacy
              </Link>
            </li>
          </ul>
          <div className="social-icons">
            <Link
              href="https://www.facebook.com/ThoughtFrameworks"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51.074"
                height="51.074"
                viewBox="0 0 51.074 51.074"
              >
                <g data-name="Group 17514">
                  <path
                    fill="#3b5998"
                    d="M25.537 0A25.537 25.537 0 110 25.537 25.537 25.537 0 0125.537 0z"
                    data-name="Path 12801"
                  ></path>
                  <path
                    fill="#fff"
                    d="M28.646 17.581h3.291v-4.862h-3.869v.018c-4.688.166-5.648 2.8-5.733 5.569h-.01v2.428h-3.192v4.761h3.192v12.761h4.811V25.494h3.941l.761-4.761h-4.7v-1.467a1.568 1.568 0 011.508-1.685z"
                    data-name="Path 12802"
                  ></path>
                </g>
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/thoughtframeworks/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52.997"
                height="51.524"
                data-name="18265738341599780000"
                viewBox="0 0 52.997 51.524"
              >
                <defs>
                  <linearGradient
                    id="bwx95hnana"
                    x1="0.074"
                    x2="1.154"
                    y1="0.926"
                    y2="-0.154"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0.001" stopColor="#fbe18a"></stop>
                    <stop offset="0.209" stopColor="#fcbb45"></stop>
                    <stop offset="0.377" stopColor="#f75274"></stop>
                    <stop offset="0.524" stopColor="#d53692"></stop>
                    <stop offset="0.739" stopColor="#8f39ce"></stop>
                    <stop offset="1" stopColor="#5b4fe9"></stop>
                  </linearGradient>
                </defs>
                <ellipse
                  cx="26.498"
                  cy="25.762"
                  fill="url(#bwx95hnana)"
                  data-name="Ellipse 417"
                  rx="26.498"
                  ry="25.762"
                ></ellipse>
                <g data-name="Group 17513" transform="translate(11.719 10.564)">
                  <circle
                    cx="1.756"
                    cy="1.756"
                    r="1.756"
                    fill="#fff"
                    data-name="Ellipse 418"
                    transform="translate(21.146 5.347)"
                  ></circle>
                  <path
                    fill="#fff"
                    d="M15.096 7.598a7.375 7.375 0 107.375 7.375 7.383 7.383 0 00-7.375-7.375zm0 12.1a4.724 4.724 0 114.724-4.724 4.73 4.73 0 01-4.724 4.723z"
                    data-name="Path 12799"
                  ></path>
                  <g data-name="Group 17512">
                    <path
                      fill="#fff"
                      d="M20.951 29.951H8.995A9.005 9.005 0 010 20.956V8.995A9 9 0 018.995 0h11.956a9.005 9.005 0 019 8.995v11.956a9.005 9.005 0 01-9 9zM8.995 2.817a6.184 6.184 0 00-6.178 6.178v11.956a6.184 6.184 0 006.178 6.178h11.956a6.185 6.185 0 006.178-6.178V8.995a6.185 6.185 0 00-6.178-6.178H8.995z"
                      data-name="Path 12800"
                    ></path>
                  </g>
                </g>
              </svg>
            </Link>
            <Link href="#" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51.074"
                height="51.074"
                data-name="17998766861556105000"
                viewBox="0 0 51.074 51.074"
              >
                <path
                  fill="#55acee"
                  d="M0 25.537a25.537 25.537 0 1125.537 25.537A25.537 25.537 0 010 25.537z"
                  data-name="Path 12797"
                ></path>
                <path
                  fill="#fff"
                  d="M25.484 19.867l.058.964-.974-.118a15.849 15.849 0 01-9.279-4.565l-1.286-1.279-.331.944a5.677 5.677 0 001.211 5.825c.779.826.6.944-.74.453a2.3 2.3 0 00-.916-.216 7.051 7.051 0 00.7 2.636 6.293 6.293 0 002.67 2.518l.955.452-1.13.02c-1.091 0-1.13.02-1.013.433a5.89 5.89 0 003.644 3.226l1.208.413-1.052.629a10.97 10.97 0 01-5.22 1.455 5.769 5.769 0 00-1.6.157 14.822 14.822 0 003.761 1.731 16.46 16.46 0 0012.783-1.456 17.108 17.108 0 006.489-7.633 20.291 20.291 0 001.325-5.9c0-.9.058-1.023 1.15-2.1a12.871 12.871 0 001.364-1.518c.195-.374.175-.374-.818-.039-1.656.59-1.89.511-1.072-.374a5.723 5.723 0 001.325-2.105c0-.059-.292.039-.624.216a10.869 10.869 0 01-1.715.669l-1.052.334-.955-.649a7.93 7.93 0 00-1.656-.866 6.656 6.656 0 00-3.41.079 5.632 5.632 0 00-3.8 5.664z"
                  data-name="Path 12798"
                ></path>
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/company/thought-frameworks"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51.06"
                height="51.06"
                viewBox="0 0 51.06 51.06"
              >
                <g data-name="Group 19200">
                  <g data-name="Group 19199">
                    <path
                      fill="#0078b5"
                      fillRule="evenodd"
                      d="M39.866 37.568V27.6c0-5.341-2.851-7.826-6.653-7.826a5.736 5.736 0 00-5.208 2.872v-2.465h-5.779c.077 1.632 0 17.387 0 17.387h5.779v-9.71a3.941 3.941 0 01.191-1.409 3.161 3.161 0 012.964-2.113c2.092 0 2.928 1.594 2.928 3.931v9.3h5.779zm-23.729-19.76a3.014 3.014 0 10.038-6.008 3.012 3.012 0 10-.075 6.008zm9.4 33.262A25.535 25.535 0 1151.07 25.535 25.536 25.536 0 0125.535 51.07zm-6.508-13.5V20.181h-5.781v17.387z"
                      data-name="107159_circle_linkedin_icon"
                    ></path>
                  </g>
                </g>
              </svg>
            </Link>
          </div>
          <p className="mb-0">© 2024 Thought Frameworks Reserve All Rights</p>
        </div>
      </Container>
      {/* Particles.js script loaded dynamically */}
      <Script
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        strategy="afterInteractive"
      />
    </footer>
  );
};

export default Footer;
