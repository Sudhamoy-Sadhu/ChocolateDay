const loveQuotes = [
    "<h1>You are my sunshine!</h1>",
    "<h1>I love you more than words can express.</h1>",
    "<h1>Life is like a chocolate box, and you're the most delicious piece in it.🍫❤️</h1>",
    "<h1>Wish You Happy Chocolate day.</h1>",
    "<h1>Click the Chocolate</h1>"
  ];
  
  function showLoveQuote() {
    const quoteContainer = document.getElementById('quoteContainer');
    quoteContainer.innerHTML = '';
  
    for (let i = 0; i < loveQuotes.length; i++) {
      setTimeout(() => {
        quoteContainer.innerHTML = loveQuotes[i];
      }, (i + 1) * 3000);
    }
  }
  
  function startGif() {
    const kitkatImg = document.getElementById('kitkatImg');
    kitkatImg.src = "kitkat.gif";
  }
  
  
  
  
  