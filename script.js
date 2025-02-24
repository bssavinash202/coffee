document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');

    if (menu && navlist) {
        menu.addEventListener('click', () => {
            menu.classList.toggle('bx-x');
            navlist.classList.toggle('open'); // Toggle the open class to show/hide the menu
        });
    } else {
        console.error("Menu icon or navlist not found.");
    }
});

