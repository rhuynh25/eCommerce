// Fetching the JSON data
fetch("flower-data.json")
  .then((response) => response.json()) // Parse JSON converts to data
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



// JavaScript for form validation
window.addEventListener("load", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    // Prevent the form from submitting if validation fails
    if (!validateForm()) {
      event.preventDefault(); // Prevent default form submission behavior
    }
  });

  // Function to validate form inputs
  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    let isValid = true;

    // Checking if name is empty
    if (name === "") {
      isValid = false;
      setErrorFor(document.getElementById("name"), "Enter valid name");
    }

    // Check if email is empty and valid email format
    if (email === "") {
      isValid = false;
      setErrorFor(document.getElementById("email"), "Enter valid email");
    } else if (!isEmailValid(email)) {
      isValid = false;
      setErrorFor(
        document.getElementById("email"),
        "Enter a valid email address"
      ); 
    }

    return isValid; // Return whether form is valid or not
  }

  // Function to set error message for form inputs
  function setErrorFor(input, message) {
    alert(message); 
  }

  // Validating email format using regex
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
