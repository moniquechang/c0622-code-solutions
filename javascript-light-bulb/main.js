var $container = document.querySelector('.container');
var $button = document.querySelector('button');
var count = 0;

function handleClick(event) {
  count++;
  if (count % 2 === 0) {
    $container.className = 'container on';
    $button.className = 'button-on';
  } else {
    $container.className = 'container off';
    $button.className = 'button-off';
  }
}

$button.addEventListener('click', handleClick);
