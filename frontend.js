fetch('http://localhost:3000/generate-text')
  .then(response => response.json())
  .then(data => {
    console.log(data.generatedText);
    // Display the generated text on your website
    document.getElementById('generated-text').innerText = data.generatedText;
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle error
  });
