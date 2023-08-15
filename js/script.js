document.addEventListener("DOMContentLoaded", function () {
    const subMenuLinks = document.querySelectorAll(".submenu__list-link");
    
    subMenuLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Отменить переход по ссылке
            const subMenu = this.parentElement.querySelector(".link-sub");
            subMenu.classList.toggle("active");
        });
    });
    
    const subMenus = document.querySelectorAll(".link-sub");
    subMenus.forEach((subMenu) => {
        const maxWidth = Array.from(subMenu.children).reduce((maxWidth, child) => {
            return Math.max(maxWidth, child.offsetWidth);
        }, 0);
        subMenu.style.width = maxWidth + "px";
    });
});

