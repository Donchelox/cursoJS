//Obteniendo elementos desde html
var texto = document.getElementById('text-lineas');
var boton = document.getElementById('botoncito');
//Escuchando evento clic de botoncito para llevarlo a dibujoPorClic
boton.addEventListener('click', dibujoPorClic)

var d =  document.getElementById('dibujito');
var ancho = d.width;
var lienzo = d.getContext('2d');


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClic()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorcito = "white";
    espacio = ancho / lineas;

    for(l = 0 ; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
        dibujarLinea(colorcito, yi, 0, 300, xf);
    }
}