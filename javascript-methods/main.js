var firstNumber = 5;
var secondNumber = 3;
var thirdNumber = 10;

var maximumValue = Math.max(firstNumber, secondNumber, thirdNumber);
console.log('value of maximumValue:', maximumValue);

var heroes = ['spiderman', 'thor', 'hulk', 'ironman'];

var randomNumber = Math.random();

randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    title: 'Catcher in the Rye',
    author: 'J. D. Salinger'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('value of library:', library);

var fullName = 'Monique Chang';

var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
