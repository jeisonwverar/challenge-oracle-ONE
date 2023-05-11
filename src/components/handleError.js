

const encrypter = document.querySelector('.main-encrypt-text');

const text=document.querySelector('.main-encrypt-p');
const img=document.querySelector('.main-encrypt-p-img');


export let walks=(err=null)=>{
     
    return err;
}

 function errorMessage(textValue,success,imgSuccess,error,imgError){
  

   if(textValue){
   text.classList.add(success);
   img.classList.add(imgSuccess);
       walks=(false)
   }
   //error regular expressions
   const regexp=/^[a-z ]+$/g;
   if(!regexp.test(textValue)){
       text.classList.add(error)
       img.classList.add(imgError)
       walks=(true)
   }else{
       text.classList.remove(error)
       img.classList.remove(imgError)
   }
   

   return walks;
};

export const handleKeyup=()=>{


encrypter.addEventListener('keyup',(e)=>{

  errorMessage(e.target.value,"success","img-success","error","img-error")
  
})




}






