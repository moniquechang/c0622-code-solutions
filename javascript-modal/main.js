var $backdrop = document.querySelector('.backdrop');
var $modalRow = document.querySelector('.modal-row');
var $noButton = document.querySelector('.no-button');
var $modalButton = document.querySelector('.modal-button');

function handleClickNoButton(event) {
  $backdrop.className = 'display-none';
  $modalRow.className = 'display-none';
}

function handleClickOpenModalButton(event) {
  $backdrop.className = 'backdrop overlay';
  $modalRow.className = 'row modal-row';
}

$noButton.addEventListener('click', handleClickNoButton);
$modalButton.addEventListener('click', handleClickOpenModalButton);
