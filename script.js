const quoteDisplay = document.getElementById("quote");
const authorDisplay = document.getElementById("author");
const btn = document.getElementById("quote_btn");

btn.addEventListener("click", generateQuote);

function generateQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber][0];
  let randomAuthor = quotes[randomNumber][1];

  quoteDisplay.innerHTML = randomQuote;
  authorDisplay.innerHTML = randomAuthor;

  return randomQuote;
}
