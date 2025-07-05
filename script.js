document.addEventListener("DOMContentLoaded", function () {
  const dobInput = document.getElementById("dob");
  const liveAge = document.getElementById("liveAge");
  const funMessage = document.getElementById("funMessage");
  const themeToggle = document.getElementById("themeToggle");

  // Dark mode toggle
  themeToggle.addEventListener("change", function () {
    document.body.classList.toggle("dark", this.checked);
  });

  // Fun messages list
  const messages = [
    "You’re aging like fine wine 🍷",
    "Another second wiser! 🎓",
    "Keep glowing, age is just a number ✨",
    "You’re timeless ⏳",
    "Born to shine, always on time ☀️"
  ];

  // Live age calculator
  function updateAge() {
    const dob = new Date(dobInput.value);
    if (isNaN(dob)) return;

    const now = new Date();
    const diff = now - dob;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365.25);

    const display = `${years} years, ${days % 365} days, ${hours % 24} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;
    liveAge.textContent = `Your age: ${display}`;
    funMessage.textContent = messages[Math.floor(Math.random() * messages.length)];
  }

  setInterval(updateAge, 1000);
  dobInput.addEventListener("input", updateAge);
});