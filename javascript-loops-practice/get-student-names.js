/* exported getStudentNames */

/* purpose of function: get name property of each object in an array and make new array with just the values of name
function declaration with parameter: students (an array of objects that all have a name property/value)
variable declaration containing empty array
for loop (i = 0, i < students.length, i++)  (i is index numbers of students array)
access each object of array using index numbers(i), get the name value of each object(dot notation), and then push value of name in empty array
return empty array */

function getStudentNames(students) {
  var newArray = [];
  for (var i = 0; i < students.length; i++) {
    newArray.push(students[i].name);
  }
  return newArray;
}
