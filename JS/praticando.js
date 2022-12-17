canva = document.querySelector('canvas')
pincel = canva.getContext('2d')
var cor = 'blue'
function pintaQuadrado() {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.fillRect(0, 0, 50, 50);
    mudaCor();
}
function mudaCor() {
    if (cor == 'blue') {
        cor = 'yellow';
    } else {
        cor = 'blue';
    }
    return cor;
}

setInterval(pintaQuadrado, 1000);

