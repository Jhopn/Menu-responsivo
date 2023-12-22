function aparecerMenu() {
    let imagemMenu = document.getElementById("imagemMenu");
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        imagemMenu.src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        imagemMenu.src = "assets/img/close_white_36dp.svg";
    }
}

let botao = document.getElementById("botaoMenu");
botao.addEventListener("click", aparecerMenu);