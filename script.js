const sus = document.getElementById('sus');
const impostor = document.getElementById('impostor');

document.addEventListener("keydown", function(event){
    jump();
});

function jump () {
    if(sus.classList != 'jump') {
        sus.classList.add ('jump');
    }
    setTimeout( function() {
        sus.classList.remove("jump");
    }, 300);
}

let isAlive = setInterval ( function() {
    let susTop = parseInt(window.getComputedStyle(sus).getPropertyValue('top'));
    let impostorLeft = parseInt(window.getComputedStyle(impostor).getPropertyValue('left'));
    
    if(impostorLeft < 50 && impostorLeft > 0 && susTop >= 140) {
        alert('Game over!');
    }
}, 10);