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

