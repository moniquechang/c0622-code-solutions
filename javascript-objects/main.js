var student = {
  firstName: 'Monique',
  lastName: 'Chang',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'QC Analyst';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: 2005
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Kreme',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
