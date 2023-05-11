const textDesecripter = document.querySelector('.main-decrypt-text');
const containerMain= document.querySelector('.main-decrypt')
const copyButton = document.querySelector('.main-decrypt-copy');
 
const createMessage=(text,state)=>{
   const fragmentMessage=document.createDocumentFragment();
   const divMessage=document.createElement('div')
   divMessage.textContent=text;
   divMessage.classList.add('message',state)

   fragmentMessage.appendChild(divMessage);

   containerMain.appendChild(fragmentMessage);

   setTimeout(()=>{

      divMessage.classList.remove('message',state)
      divMessage.classList.add('is-visibility')
   },1000)

}
 const copy=()=>{
 
    navigator.clipboard.writeText(textDesecripter.value).then(()=>{
         createMessage('Mensaje copiado','success')
         
         
         


    }).catch((error)=>{

       console.error(error)
       createMessage('error al copiar', 'error')
    })
}

 const  handleCopy=()=>{

    copyButton.addEventListener('click',(e)=>copy())
    

};


export default handleCopy;
