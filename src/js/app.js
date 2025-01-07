document.addEventListener("DOMContentLoaded", () => {
  const serviceItems = document.querySelectorAll(".service");
  const benefitCards = document.querySelectorAll(".benefits-card");
  const contactItems = document.querySelectorAll(".contact-item");
  const contactForm = document.querySelector(".contact-form");

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

  ScrollReveal().reveal(".about-icon", {
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

  ScrollReveal().reveal(".service", {
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

  ScrollReveal().reveal(".contact-description", {
    duration: 1000,
    origin: "bottom",
    distance: "50px",
    easing: "ease-in-out",
    reset: true,
  });

  ScrollReveal().reveal(".contact-item", {
    duration: 1000,
    origin: "left",
    distance: "50px",
    easing: "ease-in-out",
    interval: 200,
    reset: true,
  });

  ScrollReveal().reveal(".contact-form", {
    duration: 1000,
    origin: "bottom",
    distance: "50px",
    easing: "ease-in-out",
    delay: 500,
    reset: true,
  });

  // Form validation and data capture
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Por favor, insira um endereço de email válido.");
      return;
    }

    // Enviar email usando EmailJS
    emailjs
      .send("service_wlfv16d", "template_qkmtx1s", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Mensagem enviada com sucesso!");
          form.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Falha ao enviar a mensagem. Por favor, tente novamente.");
        }
      );
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
