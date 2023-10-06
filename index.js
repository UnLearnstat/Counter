let value = 0;
let increment = document.getElementById('btn-i');
let decrement = document.getElementById('btn-d');
let displayValue = document.querySelector('.value');

increment.addEventListener('click', () => {
  value++;
  displayValue.textContent = value;
});

decrement.addEventListener('click', () => {
  value--;
  displayValue.textContent = value;
});
