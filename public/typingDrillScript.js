const inputField = document.querySelector('input[name="drillInput"]');
let inputValue = '';
inputField.addEventListener('input', (event) => {
    inputValue = event.target.value;
    console.log(inputValue);
  }
);