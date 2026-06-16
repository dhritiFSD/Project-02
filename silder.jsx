import React, { useState, useEffect } from "react";

function Slider() {
  const slides = [
    {
      id: 1,
      title: "Hello, I'm Dhriti Gajjar",
      subtitle: "Cybersecurity Intern & Web Developer",
      description:
        "Passionate about cybersecurity, ethical hacking, and building modern web applications using React JS.",
      button: "View Portfolio",
    },
    {
      id: 2,
      title: "My Skills",
      subtitle: "Cybersecurity & Development",
      description:
        "Cybersecurity, Networking, HTML, CSS, JavaScript, React JS, MySQL, Git & GitHub.",
      button: "Explore Skills",
    },
    {
      id: 3,
      title: "Current Journey",
      subtitle: "Cybersecurity Internship",
      description:
        "Learning Ethical Hacking, VAPT, SOC Analysis, Digital Forensics, OSINT, and Malware Analysis through hands-on practical training.",
      button: "Learn More",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="slider-section" id="home">
      <button
        className="slider-btn prev-btn"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        ❮
      </button>

      <div className="slide-content">
        <h1 className="slide-title">
          {slides[currentSlide].title}
        </h1>

        <h2 className="slide-subtitle">
          {slides[currentSlide].subtitle}
        </h2>

        <p className="slide-description">
          {slides[currentSlide].description}
        </p>

        <button className="slide-action-btn">
          {slides[currentSlide].button}
        </button>
      </div>

      <button
        className="slider-btn next-btn"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        ❯
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={
              currentSlide === index
                ? "dot active-dot"
                : "dot"
            }
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Slider;