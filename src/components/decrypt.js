import { codeMatrix } from "./logic.js";

const desencrypter = document.querySelector('.main-decrypt-text');


export default function handleDecrypt(){

    const button=document.querySelector('.main-encrypt-container-d');
    button.addEventListener('click',(e)=>{
        const textD= decrypt(desencrypter.value);
        desencrypter.value=textD

        

    })
   
}



function decrypt(textEncrypt){
textEncrypt.toLowerCase()

for(let i=0;i<codeMatrix.length;i++){
    if(textEncrypt.includes(codeMatrix[i][1])){
        textEncrypt=textEncrypt.replaceAll(codeMatrix[i][1],codeMatrix[i][0]);

    }
}
return textEncrypt;
}
