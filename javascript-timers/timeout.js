var $h1 = document.querySelector('h1');
function changeMessage() {
  $h1.textContent = 'Hello There';
}

setTimeout(changeMessage, 2000);
