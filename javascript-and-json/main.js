var arr = [
  {
    isbn: '001',
    title: 'Hunger Games',
    author: 'Suzanne Collins'
  },
  {
    isbn: '002',
    title: 'Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    isbn: '003',
    title: 'Catcher in the Rye',
    author: 'J. D. Salinger'
  }
];

console.log('arr:', arr);
console.log('type of arr:', typeof arr);

console.log('JSON stringify arr:', JSON.stringify(arr));
console.log('typeof JSON stringify arr:', typeof JSON.stringify(arr));

var myString = '{"id": "001", "name": "Monique"}';

console.log('myString:', myString);
console.log('typeof myString:', typeof myString);

console.log('JSON parsed string:', JSON.parse(myString));
console.log('typeof JSON parsed string:', typeof JSON.parse(myString));
