const dropbutton = document.querySelector('#dropmenu');
const item = document.getElementsByClassName('channel-hero-header__item_drop');

for(let i = 0; i < item.length; i++)
{
    dropbutton.addEventListener('click', function(){
        if(item[i].classList.contains('channel-hero-header__item_disable')){
            item[i].classList.remove('channel-hero-header__item_disable');
            dropbutton.classList.add('channel-hero-header__droparrow');
        }
        else{
            item[i].classList.add('channel-hero-header__item_disable');
            dropbutton.classList.remove('channel-hero-header__droparrow');
            }   
    });
}