
import  darkTheme  from "./components/dark-theme.js";
import handleEncrypt from "./components/encrypt.js";
import handleDecrypt from "./components/decrypt.js";
import { handleKeyup } from "./components/handleError.js";
import  handleCopy  from "./components/buttonCopy.js";
import handleModal from "./components/buttonAsk.js";





document.addEventListener("DOMContentLoaded",()=>{
 
  //function encrypter 

  handleEncrypt();

//function decrypter 
  handleDecrypt();

  //validate error

  handleKeyup();
 ///
  //function button copy
  handleCopy();

   
   //ask modal

   handleModal();
})

//ThemeDark();
darkTheme('.header-nav-theme','dark-mode');