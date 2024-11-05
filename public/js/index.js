// script.js
// Rotate the wheels

// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  // gsap code here!
  gsap.to("#back-wheel", {
    duration: 1,
    transformOrigin: "50% 50%",
    rotation: 900,
    repeat: -1,
  });
});

function rotateWheels() {
  const frontWheel = document.getElementById("front-wheel");
  const testwheel = document.getElementById("rectwheel");
  const backWheel = document.getElementById("back-wheel");

  frontWheel.style.animation = "spin 2s linear infinite";
  testwheel.style.animation = "spin 2s linear infinite";
  backWheel.style.animation = "spin 2s linear infinite";
}
console.log("rotate wheel should be called");
