document.getElementById('infoForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect and process the submitted information

  // For demonstration purposes, log the form data to the console
  const formData = new FormData(event.target);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.log('Form Data:', data);
});

