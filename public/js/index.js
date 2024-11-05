// index.js
// Control the wheel rotation speed

// Initial player speed
let playerSpeed = 1; // Adjust this value based on your game logic

// Function to update the wheel rotation
function updateWheelRotation(speed) {
  // Stop any existing animations on the wheel
  gsap.killTweensOf("#back-wheel");

  // Calculate the duration inversely proportional to the speed
  // Higher speed means faster rotation (shorter duration)
  const duration = 1 / speed;

  // Apply the new animation with updated duration
  gsap.to("#back-wheel", {
    duration: duration,
    rotation: 360,
    repeat: -1,
    ease: "linear",
    transformOrigin: "50% 50%",
  });
}

// When the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the wheel rotation
  updateWheelRotation(playerSpeed);

  // Example: Update the speed after 5 seconds
  setTimeout(() => {
    playerSpeed = 2; // New player speed
    updateWheelRotation(playerSpeed);
  }, 5000);
});

function countNegativeSeconds(startSeconds = 100) {
  let result = null;
  const thisTime = new Date();
  const targetTime = new Date(thisTime.getTime() + startSeconds * 1000);
  /*   while (result >= 0 || result === null) {
    result = Math.floor((targetTime - thisTime) / 1000);
    console.log(result);
  } */
  console.log("targetTime", targetTime);
  console.log("thisTime", thisTime);
  console.log(result);
}

countNegativeSeconds();
