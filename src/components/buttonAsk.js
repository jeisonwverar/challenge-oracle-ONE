
const buttonAsk=document.querySelector('.header-nav-ask')
const closed=document.querySelector('.closed')
const mainAsk= document.querySelector('.header-nav-ask-container')


const handleModal=()=>{
    buttonAsk.addEventListener('click',(e)=>{
        mainAsk.classList.remove('is-visibility');
        
    })
    
    mainAsk.addEventListener('click',(e)=>{

        if(e.target===mainAsk){
            mainAsk.classList.add('is-visibility');
        }

        if(e.target===closed){
            mainAsk.classList.add('is-visibility');
        }
    })
};

export default handleModal;