document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Perform form validation and registration logic here

  // For demonstration purposes, let's log the form data to the console
  const formData = new FormData(event.target);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.log('Form Data:', data);
});

