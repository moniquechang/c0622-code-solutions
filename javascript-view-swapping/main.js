var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleClick);

function handleClick(event) {
  for (var i = 0; i < $tab.length; i++) {
    if (event.target.matches('.tab') && event.target === $tab[i]) {
      $tab[i].className = 'tab active';
    } else {
      $tab[i].className = 'tab';
    }
  }
  for (var u = 0; u < $view.length; u++) {
    var dataViewValue = event.target.getAttribute('data-view');
    if (event.target.matches('.tab') && dataViewValue === $view[u].getAttribute('data-view')) {
      $view[u].className = 'view';
    } else {
      $view[u].className = 'view hidden';
    }
  }
}
