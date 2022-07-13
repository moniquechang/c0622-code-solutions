var $contactForm = document.querySelector('form');

function handleSubmit(event) {
  event.preventDefault();
  var formData = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log('formData:', formData);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleSubmit);
