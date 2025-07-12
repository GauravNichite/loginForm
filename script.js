document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (!username || !password) {
    showMessage('Please enter both username and password.');
    return;
  }

  // Simulate a login check (replace with server-side logic or API call)
  // Example placeholder credential
  const validUser = 'user@example.com';
  const validPass = 'password123';

  if (username === validUser && password === validPass) {
    showMessage('Login successful!', 'green');
    // For real apps, redirect or store token
    // window.location.href = 'dashboard.html';
  } else {
    showMessage('Invalid username or password.');
  }
});

function showMessage(msg, color = 'red') {
  const el = document.getElementById('message');
  el.textContent = msg;
  el.style.color = color;
}
