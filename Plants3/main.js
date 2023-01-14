(function(){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_navigation')
    const menuClose = document.querySelector('.krestik');
    const menuLinks = document.querySelectorAll('.header_link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_navigation_active')
    });
    menuClose.addEventListener('click' , () => {
        menu.classList.remove('header_navigation_active')
    })
    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click' , () => {
            menu.classList.remove('header_navigation_active')
        })
    }
}());    