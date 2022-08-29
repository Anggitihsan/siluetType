const navMenu = document.getElementById("nav-menu");
const navGrid = document.getElementById("nav-grid");
const navClose = document.getElementById("nav-close");
const mode = document.querySelector('#mode-button');
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

function changeMode(){

    if(mode.innerText==='Dark Mode'){
        mode.innerHTML='Light Mode';
        style.setAttribute('href','./assets/style-deskripsi-dark.css');
    }

    else if(mode.innerText==='Light Mode'){
        mode.innerHTML='Dark Mode';
        style.setAttribute('href','./assets/style-deskripsi.css');
    }
}