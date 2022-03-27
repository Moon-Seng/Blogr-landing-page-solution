let lists = document.querySelectorAll('.items-list');
let listButton = document.querySelectorAll('#button');
let navbar = document.getElementById('nav');
let background = document.getElementById('background');
let menu = document.getElementById('menu');
let closeMenu = document.getElementById('cross')
let hideImg = document.querySelector('.design-for-future');
let extentWidth = document.querySelector('.w-50');


for(let i = 0 ; i < lists.length ; i++){
    listButton[i].addEventListener('click' , function(){
        lists[i].classList.toggle('hidden');
    })
}


if(window.innerWidth < 992){
    navbar.classList.add('hidden');
    background.classList.remove('background-desktop');
    background.classList.add('background-mobile');
    extentWidth.classList.remove('w-50');
    extentWidth.classList.add('w-100')
}


menu.addEventListener('click' , function(){
    navbar.classList.remove('hidden');
    closeMenu.classList.remove('hidden');
    menu.classList.add('hidden')
});

closeMenu.addEventListener('click',function(){
    closeMenu.classList.add('hidden')
    menu.classList.remove('hidden');
    navbar.classList.add('hidden')
})
