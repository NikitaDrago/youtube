let button = document.querySelector('#menuButton');
let menu = document.querySelector('#menu');

button.addEventListener('click', function(){
    if(menu.classList.contains('menu_deactive'))
        menu.classList.remove('menu_deactive');
    else
        menu.classList.add('menu_deactive');
});