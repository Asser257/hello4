const navEl = document.getElementById('navbar');
window.addEventListener('scroll' , () => {

    if(scrollY > 56){
        navEl.classList.add('navbar-scrolled');
    }
    else if(scrollY < 56){
navEl.classList.remove('navbar-scrolled')
    }


})
function myFunction(){
navEl.classList.add('navbar-clicked');
}
