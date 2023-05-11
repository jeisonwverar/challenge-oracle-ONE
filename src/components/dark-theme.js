const darkTheme=(btn,classDark)=>{

    const $themeBtn=document.querySelector(btn);
    const $selectors=document.querySelectorAll('[data-dark]');

    
    
    let light='🌓',
        dark='🌗';


        const lightMode=()=>{
            $selectors.forEach(el=>el.classList.remove(classDark));

                $themeBtn.textContent=light;
                localStorage.setItem('theme','light')
            }
            const darkMode=()=>{
                $selectors.forEach(el=>el.classList.add(classDark));
                
                $themeBtn.textContent=dark;
                localStorage.setItem('theme','dark')
        }
    document.addEventListener('click',e=>{
        
         if(e.target.matches(btn)){
            if($themeBtn.textContent===light){
                darkMode()
            }else{
                lightMode()
            }

        }
    });

    document.addEventListener('DOMContentLoaded',(e)=>{
        //console.log(localStorage.getItem('theme'))
          if(localStorage.getItem('theme')===null) {
            localStorage.setItem('theme','light');
          }

          if(localStorage.getItem('theme')==='light'){
            lightMode();
          }

          if(localStorage.getItem('theme')==='dark'){
            darkMode();
          }

    })

}

export default darkTheme;
