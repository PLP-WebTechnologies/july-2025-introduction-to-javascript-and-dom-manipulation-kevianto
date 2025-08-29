// 🚀 Mastering JavaScript Fundamentals

// ==================
// Part 1: Basics
// ==================

// Variable declaration & conditionals
document.getElementById("check-age-btn").addEventListener("click", function () {
  let age = prompt("Enter your age:");
  age = Number(age);

  let message;
  if (age >= 18) {
    message = "✅ You are an adult.";
  } else {
    message = "❌ You are under 18.";
  }

  document.getElementById("age-result").textContent = message;
});

// ==================
// Part 2: Functions
// ==================

// Function to calculate total
function calculateTotal(a, b) {
  return a + b;
}

// Function to format message
function formatMessage(total) {
  return `The total is: ${total}`;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const total = calculateTotal(10, 20);
  document.getElementById("total-result").textContent = formatMessage(total);
});

// ==================
// Part 3: Loops
// ==================

// Example 1: Countdown using for loop
document.getElementById("countdown-btn").addEventListener("click", function () {
  const list = document.getElementById("countdown-list");
  list.innerHTML = ""; // Clear previous items

  for (let i = 5; i >= 1; i--) {
    const li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
});

// Example 2: Iterating through array with forEach
const fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];
fruits.forEach(fruit => console.log("Fruit:", fruit));

// ==================
// Part 4: DOM
// ==================

// Example 1: Toggle class on click
document.getElementById("toggle-btn").addEventListener("click", function () {
  const text = document.getElementById("toggle-text");
  text.classList.toggle("highlight");
});

// Example 2: Change content dynamically
document.getElementById("toggle-text").addEventListener("mouseover", function () {
  this.textContent = "You hovered over me!";
});

// Example 3: Create element dynamically
document.getElementById("toggle-text").addEventListener("mouseout", function () {
  this.textContent = "Click the button to toggle my style!";
});
