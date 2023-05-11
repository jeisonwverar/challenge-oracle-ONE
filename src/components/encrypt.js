import { codeMatrix } from "./logic.js";
import { walks } from "./handleError.js";

const textEncrypter = document.querySelector('.main-encrypt-text');
const textDesecripter = document.querySelector('.main-decrypt-text');
const paragraph = document.querySelector('.main-decrypt-p');

export default function handleEncrypt(){
 

    const button=document.querySelector('.main-encrypt-container-e');
    

    button.addEventListener('click',(e)=>{
        //validate error
        if (walks){

            alert(`el texto ${textEncrypter.value} no cumple con las condiciones no se puede enviar`);

            return;
        }else{

            const text= encript(textEncrypter.value);
            textDesecripter.value=text;
            textEncrypter.value='';
           textDesecripter.style.backgroundImage='none'
           paragraph.classList.add('is-visibility')

          
        }

        
    });
    



};





function encript(textEncrypt){
    textEncrypt.toLowerCase()
    
    for(let i=0;i<codeMatrix.length;i++){
        if(textEncrypt.includes(codeMatrix[i][0])){
            textEncrypt=textEncrypt.replaceAll(codeMatrix[i][0],codeMatrix[i][1])
    
        }
    }
    return textEncrypt;
    }
    

 