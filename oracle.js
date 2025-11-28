const button = document.getElementById("askBtn");
const prophecyBox = document.getElementById("prophecy");
const cheese = document.getElementById("cheese");
const input = document.getElementById("questionInput");

const prophecies = [
  "THE CHEESE SEES ALL.",
  "YOUR PATH IS MELTING… SLOWLY.",
  "THE MOLD WILL GUIDE YOU.",
  "YOU ARE DESTINED FOR GOUDA.",
  "A GREAT WHEEL TURNS IN YOUR FAVOR.",
  "THE CULT ACCEPTS YOUR OFFERING.",
  "THE SWISS HOLES SPEAK TRUTH TODAY.",
  "FEAR NOT THE BLUE CHEESE.",
  "SOON YOU WILL ASCEND TO CHEDDAR WISDOM.",
  "THE ANSWER IS… EXTRA FETA."
];

button.addEventListener("click", () => {
  const question = input.value.trim();

  if (question === "") {
    prophecyBox.textContent = "Ask a real question, disciple.";
    return;
  }

  // Spin animation
  cheese.style.transition = "transform 1.2s ease-out";
  cheese.style.transform = `rotate(${Math.floor(Math.random() * 720 + 360)}deg)`;

  // Reveal prophecy after delay
  setTimeout(() => {
    const message = prophecies[Math.floor(Math.random() * prophecies.length)];
    prophecyBox.textContent = message;
  }, 1200);
});
