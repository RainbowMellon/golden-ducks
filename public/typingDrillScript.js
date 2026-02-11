const inputField = document.querySelector('input[name="drillInput"]');
let inputValue = '';
inputField.addEventListener('input', (event) => {
    inputValue = event.target.value;
  });

const myButton = document.querySelector('button[name="submit"]');
myButton.addEventListener('click', () => {
    console.log(inputValue);
    alert('Button was clicked!');
});