canva = document.querySelector('canvas');
pincel = canva.getContext('2d');
var cor = 'blue';
var contador = 0;
function pintaQuadrado() {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.fillRect(0, 0, 50, 50);
    mudaCor();
}
function mudaCor() {
    cores = ['blue', 'green', 'yellow', 'red', 'grey', 'orange', 'purple', 'black', 'pink', 'brown'];
    if (contador < 10) {
        cor = cores[contador];
        contador++;
        if (contador == 10) {
            contador = 0;
        }
    }
}

setInterval(pintaQuadrado, 1000)