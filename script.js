// Fetching the JSON data
fetch('flower-data.json')
  .then(response => response.json())
  .then(data => {
    const flowerContainer = document.getElementById('flower-container');

// Loop through each flower object in the JSON data
    data.flowers.forEach(flower => {
// Create a div element for each flower
      const flowerDiv = document.createElement('div');
      flowerDiv.classList.add('flower');

// Logs the div with flower information
      flowerDiv.innerHTML = `
    <div class="slidetxt">
      <h2>${flower.name}</h2>
      <p>Color: ${flower.color}</p>
      <p>Price: $${flower.price}</p>
      <img src="${flower.img}" alt="${flower.name}" class="img">
    </div>
  `;

// Append the flower div to the flower container
      flowerContainer.appendChild(flowerDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });


  
// JavaScript for form validation
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact');

  form.addEventListener('submit', function(event) {
// Prevent the form from submitting if validation fails
  if (!validateForm()) {
    event.preventDefault();
  }
});

function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const comment = document.getElementById('comment').value.trim();

  let isValid = true;

// Checking if name is empty
  if (name === '') {
    isValid = false;
    setErrorFor(document.getElementById('name'), 'Enter name');
  } else {
    setSuccessFor(document.getElementById('name'));
  }

// Check if email is empty and valid email
  if (email === '') {
    isValid = false;
    setErrorFor(document.getElementById('email'), 'Email empty');
  } else if (!isEmailValid(email)) {
    isValid = false;
    setErrorFor(document.getElementById('email'), 'Enter a valid email address');
  } else {
    setSuccessFor(document.getElementById('email'));
  }

// Additional validation for comment, if needed
    return isValid;
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('small');

// Add error message and class
    errorMessage.innerText = message;
    formControl.classList.add('error');
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
  }

// Implemented regex for the email validation
  function isEmailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});



// Hamburger Menu
function clickMenu() {
  var menu = document.getElementById("nav-links");
  console.log("menu:" + menu.outerHTML);
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

