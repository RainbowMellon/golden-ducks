const inputField = document.querySelector('input[name="drillInput"]');
let inputValue = '';
let correctValue = "hello world"
inputField.addEventListener('input', (event) => {
    inputValue = event.target.value;
  });

const submitButton = document.querySelector('button[name="submit"]');
submitButton.addEventListener('click', () => {
    let results = '';
    for(let i = 0; i < correctValue.length; i++){
        if(inputValue.at(i) == undefined)
            results += `<span class="untyped"> ${correctValue.at(i)} </span>`;
        else if(inputValue.at(i) == correctValue.at(i))
            results += `<span class="correct"> ${inputValue.at(i)} </span>`;
        else{
            results += `<span class="incorrect"> ${inputValue.at(i)} </span>`;
        }
    }
    document.querySelector('div[name="results"]').innerHTML = results;
});


