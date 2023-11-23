document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Perform login logic here

  // For demonstration purposes, redirect to another page after login
  window.location.href = 'welcome.html';
});

