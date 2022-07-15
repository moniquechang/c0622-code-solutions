var characters = document.querySelectorAll('span');

function handleKeydown(event) {
  for (var i = 0; i < characters.length; i++) {
    if (characters[i].textContent === event.key && (characters[i].className === 'standby' || characters[i].className === 'incorrect')) {
      characters[i].className = 'correct';
      characters[i + 1].className = 'standby';
      return;
    } else if (characters[i].textContent !== event.key && (characters[i].className === 'standby' || characters[i].className === 'incorrect')) {
      characters[i].className = 'incorrect';
    }
  }
}

document.addEventListener('keydown', handleKeydown);
