import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmitForm);

function createPromise(state, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else if (state === 'rejected') {
        reject(delay);
      }
    }, delay);
  });
}
function onSubmitForm(event) {
  event.preventDefault();

  const delay = document.querySelector('input[name="delay"]').value;
  const checkBox = document.querySelector('input[name="state"]:checked').value;

  createPromise(checkBox, delay)
    .then(result =>
      iziToast.show({
        message: `✅ Fulfilled promise in ${result}ms`,
        position: 'topRight',
        color: 'green',
      })
    )
    .catch(error =>
      iziToast.show({
        message: `❌ Rejected promise in ${error}ms`,
        position: 'topRight',
        color: 'red',
      })
    );
}