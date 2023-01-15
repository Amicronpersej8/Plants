(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_navigation')
    const menuClose = document.querySelector('.krestik');
    const menuLinks = document.querySelectorAll('.header_link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_navigation_active')
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header_navigation_active')
    })
    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', () => {
            menu.classList.remove('header_navigation_active')
        })
    }
}());

(function () {
    const pushedButton = document.querySelector('.button1');
    const bluredGarden = document.querySelector('.button1');
    const serviceItem = document.querySelectorAll('.service_item');
    console.log(serviceItem)
    serviceItem.forEach(item => {
        console.log(item);
    });
    bluredGarden.addEventListener('click', () => {
        serviceItem[2].classList.toggle('blured');
        serviceItem[0].classList.toggle('blured');
        pushedButton.classList.toggle('button_pushed')
    });
}())