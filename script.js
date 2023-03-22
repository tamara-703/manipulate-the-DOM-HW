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

  // Part 1
  //change main title to a shorter title
  let mainTitle = document.querySelector("#main-title");
  mainTitle.textContent = "Hi! Welcome to my webpage."

  // Part 2
  //change the body to a different background color
  let bodyElement = document.querySelector("body");
  bodyElement.style.backgroundColor = 'lightpink';

  // Part 3
  //select the favorite things list and remove last item on list
  let favoriteThingsList = document.querySelector("#favorite-things");
  let lastChild = favoriteThingsList.lastElementChild;

  lastChild.remove();

  // Part 4
  //select all .special-title class elements and change the font-size to 2rem
  let specialTitles = document.getElementsByClassName('special-title');

  for(let i = 0; i < specialTitles.length; i++)
  {
    specialTitles[i].style.fontSize = '2rem';
  }

  // Part 5
  //access the past races list and erase Chicago
  let pastRaces = document.getElementById('past-races');

  if(pastRaces.hasChildNodes()) //check if element has children
  {
    for(let i = 0; i < pastRaces.childElementCount; i++)
    {
      if(pastRaces.children[i].textContent === 'Chicago')
      {
        pastRaces.removeChild(pastRaces.children[i]);
      }

    }
  }

  // Part 6
  //add elements to pastRaces
  let addedCity = document.createElement('li');
  addedCity.textContent = 'Dallas';

  pastRaces.appendChild(addedCity);

  // Part 7
  //add new div, h2 and p for the element in part 6
  let classMain = document.querySelector('.main');

  let newDiv = document.createElement('div'); //create a new div element
  newDiv.classList.add('blog-post');
  newDiv.classList.add('purple');

  classMain.appendChild(newDiv); //added first child to the parent

  let newH1 = document.createElement('h1'); //create new h1 element
  newH1.textContent = 'Dallas';

  newDiv.appendChild(newH1);

  let newPar = document.createElement('p');
  newPar.textContent = 'We raced in Dallas! It was really hot';

  newDiv.appendChild(newPar);

  // Part 8

  let quoteOfTheDay = document.querySelector('#quote-title');

  quoteOfTheDay.addEventListener('click',randomQuote);


  // Part 9
  let blogPosts = document.querySelectorAll('.blog-post');

  for(let i = 0; i < blogPosts.length; i++)
  {
      blogPosts[i].addEventListener('mouseover',function(event)
      {
        blogPosts[i].classList.toggle('purple');

      });

      blogPosts[i].addEventListener('mouseenter',function(event)
      {
        blogPosts[i].classList.toggle('red');
      });

  }


});
