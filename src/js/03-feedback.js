import throttle from 'lodash.throttle';
const formInput = document.querySelector('.feedback-form');
const emailField = document.querySelector('input');
const messageField = document.querySelector('textarea');
if (localStorage.getItem('feedback-form-state') !== null) {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  emailField.value = savedData.email;
  messageField.value = savedData.message;
}
formInput.addEventListener('input', throttle(saveForm, 500));
formInput.addEventListener('submit', submitData);
function submitData(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  emailField.value = '';
  messageField.value = '';
}
function saveForm() {
  const email = emailField.value;
  const message = messageField.value;
  const data = { email, message };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}
