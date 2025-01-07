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
