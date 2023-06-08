import React from "react";
import "./css/style.css";
import Typewriter from "typewriter-effect";
import Vijayan  from "../assets/Vijayan.png"
import { hero } from "../constants";
import { Resume } from "../assets";


const Hero = () => {
  return (
    <div className=" w-full">
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Vijayan R</h1>
          <h3>
            And I'm a<span>
              <Typewriter
                options={{
                  strings: ["Full Stack Developer", "Ethical Hacker", "Content Creator"],
                  autoStart: true,
                  loop: true,

                }}
              />
            </span>
          </h3>
          <p>
            {hero.summary}
          </p>
          <div className="social-media">
            <a href="https://codepen.io/vijayan108" target="_blank">
              <i className="bx bxl-codepen"></i>
            </a>
            <a href="https://medium.com/@vijayynot108" target="_blank">
              <i className="bx bxl-medium"></i>
            </a>
            <a href="https://www.linkedin.com/in/vijayanr108/" target="_blank">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com/vijayan108" target="_blank">
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <a href={Resume} download={"Resume"} className="btn1">
            Download CV
          </a>
        </div>
        <div className="home-img">
          <img className="image" style={{ maxWidth: 500 }} src={Vijayan} alt="" />
        </div>
        
      </section>
      
    </div>
  );
};

export default Hero;
