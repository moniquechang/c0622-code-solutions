function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('convertMinutesToSeconds result:', convertMinutesToSeconds(4));

function greet(name) {
  return 'Hello, ' + name;
}

console.log('greet result:', greet('Monique'));

function getArea(width, height) {
  return width * height;
}

console.log('getArea result:', getArea(5, 4));

function getFirstName(person) {
  return person.firstName;
}

console.log('getFirstName result:', getFirstName({ firstName: 'Monique', lastName: 'Chang' }));

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('getLastElement result:', getLastElement(['red', 'orange', 'yellow', 'green']));
