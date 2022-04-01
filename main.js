saludoBtn.addEventListener('click', saludo);

// saludoBtn.removeEventListener('click', saludo);

function saludo(event){
    console.log(event.target.innerHTML);
}

userInput.addEventListener('keypress', (event)=>{
    if(event.key === "Enter"){
        console.log(event.target.value);
    }
});