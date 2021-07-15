const images = ["3.jpg","5.jpg","6.jpg","7.jpg","9.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src= `img/${chosenImage}`;
bgImage.classList.add("bgImage");

document.body.appendChild(bgImage);