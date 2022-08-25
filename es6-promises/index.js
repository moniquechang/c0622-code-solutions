const takeAChance = require('./take-a-chance');

const promiseObj = takeAChance('Monique');

promiseObj.then(value => {
  console.log(value);
});

promiseObj.catch(Error => {
  console.log(Error.message);
});
