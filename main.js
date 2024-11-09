document.addEventListener('DOMContentLoaded', function() {
    let burger = document.getElementById('burger');
    let menu_burger = document.getElementById('menu_burger');
    let close = document.getElementById('close');
    let menu_onas = document.getElementById('menu_onas');

    burger.onclick = function () {
        menu_burger.style.animationName ='ex'
        menu_burger.style.display = 'block'
        menu_burger.style.left = '0'
    }
    close.onclick = function () {
        menu_burger.style.animationName = 'close'
        menu_burger.style.left = '800px'
    }
    menu_onas.onclick = function () {
        menu_burger.style.animationName = 'close'
        menu_burger.style.left = '800px'
    }
});