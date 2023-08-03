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

    // Select the #quote-title element by its ID
const quoteTitle = document.querySelector("#quote-title");

// Add a click event listener to the #quote-title element
quoteTitle.addEventListener("click", randomQuote); //part 8

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
    specialTitle.forEach(title => {
    title.style.fontSize = '2rem';
    });
    
   // Part 5 remove Chicago from the ul
   const pastRacesList = document.getElementById("past-races"); //select the list by id
   const chicagoListItem = pastRacesList.querySelector('li:nth-child(4)');//to select the fourth <li> element
   pastRacesList.removeChild(chicagoListItem);//removes the selected "chicagoListItem" from the "pastRacesList"
   

  // Part 6 add new city to list
  const addItemtoList = document.createElement("li");//  creates an empty <li>
  addItemtoList.textContent = "Detroit"; // the text added to <li>
  pastRacesList.appendChild(addItemtoList); // appendChild() method is called on the "pastRacesList"

  // Part 7 Create a new .blog-post corresponding to the new city added in Part 6.
  const blogs = document.querySelector(".blog-post.purple"); // selecting blog-post.purple, use querySelector
  const newBlog = document.createElement("div"); // creating a space
  const newBlogTitle = document.createElement("h2"); // creating a title
  newBlogTitle.textContent = "Detroit Grand Prix"; // input content
  const newBlogContent = document.createElement("p");
  newBlogContent.textContent = "I took Vin Diesel on 7 mile, we both driving a lambo, and we had buffs on"; // corrected content
  newBlog.appendChild(newBlogTitle);
  newBlog.appendChild(newBlogContent);
  blogs.appendChild(newBlog);
  
  // Part 9
// Select all .blog-post class elements
const blogPosts = document.querySelectorAll(".blog-post");

// Iterate through the list of .blog-post class elements
blogPosts.forEach(blogPost => {
  // Add a mouseleave event listener to each .blog-post element
  blogPost.addEventListener("mouseleave", function() {
    // Toggle the class .purple on mouseleave
    blogPost.classList.toggle("purple");
  });

  // Add a mouseenter event listener to each .blog-post element
  blogPost.addEventListener("mouseenter", function() {
    // Toggle the class .red on mouseenter
    blogPost.classList.toggle("red");
  });
});


})
