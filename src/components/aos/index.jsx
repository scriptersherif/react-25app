import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Animation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div>
      <h1 data-aos="fade-up">Hello, World!</h1>
      <p data-aos="fade-in">This is a paragraph with fade-in animation.</p>
      <div data-aos="zoom-in" data-aos-delay="300">
        This element will zoom in with a delay of 300ms.
      </div>
    </div>
  );
};

export default Animation;
