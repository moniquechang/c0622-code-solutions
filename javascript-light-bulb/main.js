var $container = document.querySelector('.container');
var $button = document.querySelector('button');
var lightOn = true;

function handleClick(event) {
  if (lightOn === true) {
    $container.className = 'container on';
    $button.className = 'button-on';
    lightOn = false;
  } else {
    $container.className = 'container off';
    $button.className = 'button-off';
    lightOn = true;
  }
}

$button.addEventListener('click', handleClick);
