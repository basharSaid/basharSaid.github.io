var menuButton = document.getElementById('menu-button');
var menuBox = document.getElementById('menu-box');
var onClick = function (event) {
    if (menuBox.style.display == 'block') {
        menuBox.style.display = 'none';
    } else {
        menuBox.style.display = 'block';
    }
};
menuButton.addEventListener('click', onClick);
