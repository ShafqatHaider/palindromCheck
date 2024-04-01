const response=document.querySelector('#result');
const textField= document.querySelector('#text-input');
const btnAction=document.querySelector('#check-btn');


btnAction.addEventListener('click',()=>{
    let value= textField.value;
    if(value){
        const str = value.replace(/[^a-z0-9A-Z]/g,'').toLowerCase();

        const reversedText= str.split('').reverse().join('');
        if(str===reversedText){
            response.classList.add('success');
            response.classList.remove('failed');
            response.innerText=value+' is a palindrome'
        }
        else{
            response.classList.add('failed');
            response.classList.remove('success');
            response.innerText=value+' is not a palindrome'
        }
    }
    else{
        alert("Please input a value")
        
    }
  
})