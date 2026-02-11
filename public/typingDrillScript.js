const inputField = document.querySelector('input[name="drillInput"]');
const correctInput = document.querySelector('p[name="correctInput"]');
let inputValue = '';
inputField.addEventListener('input', (event) => {
    inputValue = event.target.value;
  });

const submitButton = document.querySelector('button[name="submit"]');
submitButton.addEventListener('click', () => {
    for(const char of inputValue){
        console.log(char);
    }
    console.log(correctInput.textContent);
});


