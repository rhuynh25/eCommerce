// Fetching the JSON data
fetch("flower-data.json")
  .then((response) => response.json()) // Parse JSON
  .then((data) => {
    const flowerContainer = document.getElementById("flower-container");

    // Check if flower container exists
    if (flowerContainer == null) {
      return; // Returns if flower container doesn't exist
    }

    // Loop through each flower object in the JSON data
    data.flowers.forEach((flower) => {
      const flowerDiv = document.createElement("div");
      flowerDiv.classList.add("flower");

      // Flower div information
      flowerDiv.innerHTML = `
        <div class="slidetxt">
          <h2>${flower.name}</h2>
          <p>Color: ${flower.color}</p>
          <p>Price: $${flower.price}</p>
          <p>${flower.description}</p>
          <img src="${flower.img}" alt="${flower.name}" class="img">
        </div>
      `;

      // Append the flower div to the flower container
      flowerContainer.appendChild(flowerDiv);
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error); 
  });



  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('comment').value; 
    var formMessages = document.getElementById('formMessage');
    formMessages.textContent = '';
    if (!name || !email || !message) {
        formMessages.textContent = 'Fill out all respected fields';
        return;
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMessages.textContent = 'Please enter a valid email address.';
        return;
    }
      formMessages.textContent = 'You have submitted your contact form!';
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
