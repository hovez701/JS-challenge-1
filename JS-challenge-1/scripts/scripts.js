/* Problem statement - 
Create -
    1. input text Box
    2. Whenever user input a text in the input box, show the reversed text on the page
    3. Change color of vowels when user hover the shown reversed text.
    4. Create a reset button that sets everythink back to initial screen.
*/


const input = document.querySelector('input');
input.addEventListener('keyup', display);

const displayArea = document.querySelector('.display')
let reversedText = '';
let reversedTextArray = [];

function display(){
    if (input.value ==''){
        return;
    }
    const text = input.value;
    const textArray = text.split("");
    reversedText = '';
    textArray.forEach(x => reversedText = x.concat(reversedText))
    displayArea.innerHTML = reversedText;
    
}


displayArea.addEventListener('mouseover', vowelColouring);
displayArea.addEventListener('mouseleave', vowelBlack);

function vowelColouring(){
    if (input.value ==''){
        return;
    }
    let colorText = '';
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i<reversedText.length; i++){
        let letter = reversedText[i];
        if(vowels.includes(letter) === true){
            colorText = colorText.concat(`<span class="color">${letter}</span>`)
        } else {
            colorText = colorText.concat(letter)
        }
    }
    displayArea.innerHTML = colorText;
    
}

function vowelBlack(){
    if (input.value ==''){
        return;
    }
    displayArea.innerHTML = reversedText;
}

const reset = document.querySelector('.reset');
reset.addEventListener('click', resetFields);

function resetFields(){
    input.value = ''
    displayArea.innerHTML = ''
}