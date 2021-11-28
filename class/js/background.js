const images = ["0.jpg", "1.jpg", "2.jpg"];

const randomNumber = Math.floor(Math.random() * images.length);
const randomImage = images[randomNumber];

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImage}`;
document.body.appendChild(bgImage);
