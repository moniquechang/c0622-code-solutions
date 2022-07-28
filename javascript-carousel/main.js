var images = document.querySelectorAll('img');
var leftArrow = document.querySelector('.fa-angle-left');
var rightArrow = document.querySelector('.fa-angle-right');
var entryId = 1;

var intervalId = setInterval(RightArrow, 3000);

function RightArrow(event) {
  if (entryId === images.length) {
    entryId = 0;
  }
  entryId++;
  for (var i = 0; i < images.length; i++) {
    if (entryId === parseInt(images[i].getAttribute('data-id'))) {
      images[i].className = '';
      progressCircles[i].className = 'fas fa-circle';
    } else {
      images[i].className = 'hidden';
      progressCircles[i].className = 'far fa-circle';
    }
  }
  clearInterval(intervalId);
  intervalId = null;
  intervalId = setInterval(RightArrow, 3000);
}

function LeftArrow(event) {
  entryId--;
  if (entryId === 0) {
    entryId = images.length;
  }
  for (var i = 0; i < images.length; i++) {
    if (entryId === parseInt(images[i].getAttribute('data-id'))) {
      images[i].className = '';
      progressCircles[i].className = 'fas fa-circle';
    } else {
      images[i].className = 'hidden';
      progressCircles[i].className = 'far fa-circle';
    }
  }
  clearInterval(intervalId);
  intervalId = null;
  intervalId = setInterval(RightArrow, 3000);
}

var progressCirclesRow = document.querySelector('.progress-circles');
var progressCircles = document.querySelectorAll('.fa-circle');

function clickProgressCircle(event) {
  if (event.target.matches('.fa-circle') === false) {
    return;
  }
  for (var i = 0; i < images.length; i++) {
    if (event.target.getAttribute('data-id') === images[i].getAttribute('data-id')) {
      images[i].className = '';
      progressCircles[i].className = 'fas fa-circle';
      entryId = parseInt(event.target.getAttribute('data-id'));
    } else {
      images[i].className = 'hidden';
      progressCircles[i].className = 'far fa-circle';
    }
  }
  clearInterval(intervalId);
  intervalId = null;
  intervalId = setInterval(RightArrow, 3000);
}

rightArrow.addEventListener('click', RightArrow);
leftArrow.addEventListener('click', LeftArrow);
progressCirclesRow.addEventListener('click', clickProgressCircle);
