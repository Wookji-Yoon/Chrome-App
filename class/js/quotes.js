const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");
advice();

function advice() {
  fetch("https://api.adviceslip.com/advice").then((response) =>
    response.json().then((data) => {
      quote.innerText = data.slip.advice;
      author.innerText = "Anonymous(I use Anonymous API haha)";
    })
  );
}
