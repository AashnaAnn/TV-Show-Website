fetch('http://localhost:5000/api/episodes')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));