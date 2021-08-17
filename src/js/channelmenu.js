let chbutton = document.querySelector('#channelbutton');
let chmenu = document.querySelector('#channelmenu');
let container = document.querySelector('#videocontainer')

chbutton.addEventListener('click', function(){
    if(chmenu.classList.contains('menu_deactive')){
        chmenu.classList.remove('menu_deactive');
        container.classList.add('videoplayer-container_flex');
    }else{
        chmenu.classList.add('menu_deactive');
        container.classList.remove('videoplayer-container_flex');
    }

});