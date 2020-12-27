let screen = document.getElementById("screen");

const buttons = document.querySelectorAll("button");

let screenValue = '';

for(item of buttons){
    item.addEventListener("click", (e)=>{
        let buttonText = e.target.innerText;
        console.log(buttonText);

        if(buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue ='';
            screen.value = screenValue;
        }
        else if(buttonText == 'CE'){
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}