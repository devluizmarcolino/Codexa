document.addEventListener("DOMContentLoaded", () => {
  const missionIcon = document.getElementById("mission-icon");
  const visionIcon = document.getElementById("vision-icon");
  const valuesIcon = document.getElementById("values-icon");

  const icons = [missionIcon, visionIcon, valuesIcon];

  icons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.classList.add("animate");
    });

    icon.addEventListener("mouseleave", () => {
      icon.classList.remove("animate");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const serviceItems = document.querySelectorAll(".service-item");
  const benefitCards = document.querySelectorAll(".benefits-card");
  const aboutIcons = document.querySelectorAll(".about-icon");

  ScrollReveal().reveal(".home-content h1", {
    duration: 1000,
    origin: "left",
    distance: "50px",
    easing: "ease-in-out",
    reset: true,
  });

  ScrollReveal().reveal("#learn-more-btn", {
    duration: 1000,
    origin: "right",
    distance: "50px",
    easing: "ease-in-out",
    delay: 500,
    reset: true,
  });

  ScrollReveal().reveal(".about-content h2", {
    duration: 1000,
    origin: "bottom",
    distance: "50px",
    easing: "ease-in-out",
    reset: true,
  });

  ScrollReveal().reveal(".about-description", {
    duration: 1000,
    origin: "bottom",
    distance: "50px",
    easing: "ease-in-out",
    delay: 500,
    reset: true,
  });

  ScrollReveal().reveal(".about-card-icon", {
    duration: 1000,
    origin: "bottom",
    distance: "50px",
    easing: "ease-in-out",
    interval: 200,
    reset: true,
  });

  ScrollReveal().reveal(".services-description", {
    duration: 1000,
    origin: "bottom",
    distance: "50px",
    easing: "ease-in-out",
    reset: true,
  });

  ScrollReveal().reveal(".service-item", {
    duration: 1000,
    origin: "left",
    distance: "50px",
    easing: "ease-in-out",
    interval: 200,
    reset: true,
  });

  ScrollReveal().reveal(".benefits-subsection", {
    duration: 1000,
    origin: "bottom",
    distance: "50px",
    easing: "ease-in-out",
    reset: true,
  });

  ScrollReveal().reveal(".benefits-card", {
    duration: 1000,
    origin: "right",
    distance: "50px",
    easing: "ease-in-out",
    interval: 200,
    reset: true,
  });
});