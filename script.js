let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1 Write a JavaScript statement that selects the #main-title ID element. Change the text of the title to something shorter.
    const mainTitle = document.querySelector("#main-title");
    mainTitle.textContent = "Welcome to DOM Toretto's homepage.";
  
    // Part 2 Write a JavaScript statement that selects the #main-titleID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.
    const body = document.querySelector("body"); 
    body.style.backgroundColor = "red";
    // Part 3 Select DOM's Favorite Things list and remove the last list item.
    const favThings = document.getElementById("favorite-things");
    const lastFavThing = favThings.lastElementChild;
    favThings.removeChild(lastFavThing); 
    console.log(lastFavThing); 

    // Part 4 Select all .special-title class elements and change their font-size to 2rem.
    const specialTitle = document.querySelectorAll(".special-title");
    specialTitle.foreach(title => {
    title.style.fontSize ='2rem'; });

   // Part 5
    const pastRacesList = document.querySelector("past-races");
    const chicagoListItem = pastRacesList.querySelector('li:last-child'); 
    pastRacesList.removeChild(chicagoListItem);

    // Part 6
  
  
    // Part 7
  
  
    // Part 8
  
  
    // Part 9
  
  
  
  
  });