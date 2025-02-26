import React, { useEffect } from "react";
import "./Hero.css";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";

function Hero() {
  useEffect(() => {
    ScrollReveal().reveal(".home-content", {
      origin: "left",
      reset: true,
      distance: "80px",
      duration: 1600,
      delay: 100,
    });

    ScrollReveal().reveal(".profile img", {
      origin: "top",
      reset: true,
      distance: "80px",
      duration: 1500,
      delay: 150,
    });

    const typed = new Typed(".texts", {
      strings: ["Web Developer", "ML Enthusiast"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div class="home">
      <div class="home-content">
        <h3>Hello,I'm</h3>
        <h1>Vismita</h1>
        <h3>
          And I'm a <span class="texts"></span>
        </h3>
        <div class="resume-btn">
          <button onClick={() => window.open("./assets/resume_vismita.pdf")}>
            Resume
          </button>
        </div>
        <div id="socials">
          <a
            href="https://linkedin.com/in/vismita-a-312232274"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn Profile"
              className="icon"
            />
          </a>
          <a
            href="https://github.com/Vismita099"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/github.png"
              alt="GitHub Profile"
              className="icon"
            />
          </a>
        </div>
      </div>
      <div class="profile">
        <img src="./assets/prof.png"></img>
      </div>
    </div>
  );
}
export default Hero;
