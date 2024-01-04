// JavaScript code for CBT exam

// Get elements
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginForm').querySelector('button');
const subjectSelect = document.getElementById('subjectSelect');
const classSelect = document.getElementById('classSelect');
const startExamButton = document.getElementById('examSection').querySelector('button');
const timeDisplay = document.querySelector('#time');

// Initialize variables
let timeLeft = 30;

// Update time display
function updateTime() {
  timeLeft--;
  timeDisplay.textContent = `Time left: ${timeLeft}`.toLowerCase();
  if (timeLeft === 0) {
    // Redirect to results page or show results on the same page
  }
}

// Timer function
function startTimer() {
  const timer = setInterval(updateTime, 1000);
  return timer;
}

// Login function
function login() {
  // Validate input and call server-side login function
  // If login is successful, show exam section and start timer
  if (usernameInput.value === 'correctUsername' && passwordInput.value === 'correctPassword') {
    subjectSelect.style.display = 'block';
    classSelect.style.display = 'block';
    startExamButton.style.display = 'block';
    timeLeft = 30;
    const timer = startTimer();
  } else {
    // Show an error message or prompt the user to enter the correct credentials
  }
}

// Event listeners
loginButton.addEventListener('click', login);
startExamButton.addEventListener('click', () => {
  // Call server-side function to load exam content
  // If the content is loaded, update the display property of the exam section
});

// Start the timer
const timer = startTimer();
