const navMenu = document.getElementById("nav-menu");
const navGrid = document.getElementById("nav-grid");
const navClose = document.getElementById("nav-close");
const mode = document.querySelector('#hero-button');
const logo = document.querySelector('#hero-logo');
const style = document.querySelector('#stylesheet');

if(navGrid){
    navGrid.addEventListener('click',()=>{
        navMenu.classList.add('show-nav-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-nav-menu')
    })
}

function emailCopy() {
    const copyText = "ihsananto.anggit@gmail.com";
    navigator.clipboard.writeText(copyText);    
    alert("Email disalin: " + copyText);
}

function comingSoon(){
    alert("Coming Soon!");
}


function changeMode(){
    
    if(mode.innerText==='Dark Mode'){
        mode.innerHTML='Light Mode';
        logo.setAttribute('src','./assets/img/logo-white.png');
        style.setAttribute('href','./assets/style-dark.css');
        localStorage.setItem(cacheKey,false);
    }

    else if(mode.innerText==='Light Mode'){
        mode.innerHTML='Dark Mode';
        logo.setAttribute('src','./assets/img/logo.png');
        style.setAttribute('href','./assets/style.css');
        localStorage.setItem(cacheKey,true);
    }
}


