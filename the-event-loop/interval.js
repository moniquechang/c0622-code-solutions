let count = 3;

const intervalId = setInterval(() => {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalId);
  } else if (count > 0) {
    console.log(count);
    count--;
  }
}, 1000);
