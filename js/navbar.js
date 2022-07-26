//頁面滾動時的觸發事件
window.onscroll = function () { navbarslide() };

//定義項目清單這個區域的變數
var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;

function navbarslide() {
    if (window.pageYOffset >= sticky + 1) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}

