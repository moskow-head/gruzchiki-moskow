document.addEventListener('DOMContentLoaded', function() {
    let burger = document.getElementById('burger');
    let burger_menu = document.getElementById('burger_menu');
    let close = document.getElementById('close');
    let main_burger = document.getElementById('main-burger');



    burger.onclick = function () {
        burger_menu.style.display = 'block';
        main_burger.style.animationName = 'openw'
    }
    close.onclick = function () {
        burger_menu.style.animationName = 'close'
        main_burger.style.animationName = 'close'
    }
    let onasjs = document.getElementById('onasjs')
    let ysljs = document.getElementById('ysljs')
    let skid = document.getElementById('skid')
    let whyme = document.getElementById('why')

    onasjs.onclick = function () {
        burger_menu.style.animationName = 'close'
        main_burger.style.animationName = 'close'
    }
    ysljs.onclick = function () {
        burger_menu.style.animationName = 'close'
        main_burger.style.animationName = 'close'
    }
    skid.onclick = function () {
        burger_menu.style.animationName = 'close'
        main_burger.style.animationName = 'close'
    }
    whyme.onclick = function () {
        burger_menu.style.animationName = 'close'
        main_burger.style.animationName = 'close'
    }


});