document.addEventListener("DOMContentLoaded", function() {
    window.onload = function() {
        document.querySelector(".menumobile").addEventListener("click", function(){
            if(document.querySelector(".menu nav ul").style.display == 'flex') {
                document.querySelector(".menu nav ul").style.display = 'none';
            } else {
                document.querySelector(".menu nav ul").style.display = 'flex';
            }
        });
    };
});
function hideButton() {
    window.scrollTo({
        top: 0
    });
}
function wpHidden() {
    if(window.scrollY === 0) {
        document.querySelector('.whatsapp-container').style.display = 'none';
    } else {
        document.querySelector('.whatsapp-container').style.display = 'block';
    }
}
function buttonHidden() {
    if(window.scrollY === 0) {
        document.querySelector('.botaorolagem').style.display = 'none';
    } else {
        document.querySelector('.botaorolagem').style.display = 'block';
    }
}


window.addEventListener('scroll', buttonHidden);
window.addEventListener('scroll', wpHidden);