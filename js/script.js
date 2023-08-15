document.addEventListener("DOMContentLoaded", function () {
    const toggleIcons = document.querySelectorAll(".toggle-icon");

    toggleIcons.forEach((icon) => {
        icon.addEventListener("click", function () {
            const subMenu = this.parentElement.querySelector(".submenu");
            const menuItem = this.parentElement; // Получаем родительский элемент (li.menu__list-item)
            
            subMenu.classList.toggle("active");
            menuItem.classList.toggle("active"); // Добавляем/удаляем класс active к пункту меню

            // Добавьте код для изменения стилей шапки и изображения иконки
            const header = document.querySelector(".header");
            const logoImg = document.querySelector(".logo__img");
            const menuListLinks = document.querySelectorAll(".menu__list-link");
            const submenuListLinks = document.querySelectorAll(".submenu__list-link");
            const toggleIconImg = this.querySelector("img"); // Получаем img внутри toggle-icon

            if (subMenu.classList.contains("active")) {
                header.style.backgroundColor = "#fff";
                menuListLinks.forEach(link => link.style.color = "#101112");
                submenuListLinks.forEach(link => link.style.color = "#101112");
                logoImg.style.filter = "invert(1)";
                toggleIconImg.src = "arrow_up.svg"; // Заменяем изображение
                
                // Изменяем цвет элементов в блоке .menu__options на черный
                const menuOptions = document.querySelector(".menu__options");
                menuOptions.style.filter = "invert(1)"; // Черный цвет текста
            } else {
                //header.style.backgroundColor = "#151515";
                menuListLinks.forEach(link => link.style.color = "#fff");
                submenuListLinks.forEach(link => link.style.color = "#101112");
                logoImg.style.filter = "invert(0)";
                toggleIconImg.src = "arrow_down.svg"; // Возвращаем исходное изображение
                
                // Изменяем цвет элементов в блоке .menu__options на белый
                const menuOptions = document.querySelector(".menu__options");
                menuOptions.style.filter = "invert(0)"; // Белый цвет текста
            }
        });
    });
});







