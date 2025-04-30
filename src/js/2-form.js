const storageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

populateForm();

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', saveFormData);

function handleFormSubmit(e) {
  e.preventDefault();
  const { email, message } = form.elements;
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (!emailValue || !messageValue) {
    alert('Fill please all fields');
    return;
  }

  const userData = { email: emailValue, message: messageValue };
  console.log(userData);
  localStorage.removeItem(storageKey);

  form.reset();
}

function saveFormData() {
  const { email, message } = form.elements;
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

function populateForm() {
  const localMessage = JSON.parse(localStorage.getItem(storageKey)) ?? {};

  form.elements.email.value = localMessage.email || '';
  form.elements.message.value = localMessage.message || '';
}
