window.onscroll = function() {
    var header = document.querySelector('header');
    var SDText = document.querySelector('.scrollDown');
    if (window.pageYOffset > 0) {
        header.classList.add('full-width');
        SDText.style.opacity = "0";
    } else {
        header.classList.remove('full-width');
        SDText.style.opacity = "100";
    }
};