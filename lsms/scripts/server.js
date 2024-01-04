// server.js

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (e.g., HTML, CSS, and client-side JavaScript)
app.use(express.static('public'));

// Mock user data (in a real application, this would be stored in a database)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

// Endpoint for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    // Return success response
    res.json({ success: true, message: 'Login successful' });
  } else {
    // Return error response
    res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
});

// Endpoint for retrieving exam content
app.get('/exam-content', (req, res) => {
  // In a real application, you would retrieve the exam content from a database or another source
  const examContent = {
    // Provide the exam content here
  };
  res.json(examContent);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
