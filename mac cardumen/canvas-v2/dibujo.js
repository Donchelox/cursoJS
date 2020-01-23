var texto = document.getElementById('text-lineas');
var boton = document.getElementById('botoncito');
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById('dibujito');
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "blue";

for(l = 0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
}

function dibujarLinea(color, xinicial, xfinal, yinicial, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    alert("Hola")
}