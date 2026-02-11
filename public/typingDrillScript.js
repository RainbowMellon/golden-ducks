const inputField = document.querySelector('input[name="drillInput"]');
let inputValue = '';
let correctValue = "hello world"
inputField.addEventListener('input', (event) => {
    inputValue = event.target.value;
  });

const submitButton = document.querySelector('button[name="submit"]');
submitButton.addEventListener('click', () => {
    for(let i = 0; i < inputValue.length; i++){
        if(inputValue.at(i) == correctValue.at(i))
            console.log("You did it!");
        else{
            console.log("Yikes");
        }
    }
});


