//Se debe mostrar a cofla un sistema que 
//INDICARLE LAS 20 LLAVES POSSIBLES CON SUS 4 IMAGENES Y COFLA DEBE SELECCIONAR CUAL LLAVE USAR
//Una vez seleccionada enviar los datos al servidor y que otro programador se encarge


const contenedor= document.querySelector(".flex-container");

const boton=document.querySelector(".send-button");
let valorAntiguo=boton.value;
boton.value= valorAntiguo.toUpperCase();





// funcion donde tiene los parametros de nombre, modelo y precio.
function crearLLave(nombre, modelo, precio){
    img="<img class='llave-img' src='llaves.png'>";
    nombre=`<h2> ${nombre}</h2>`;
    modelo=`<h3> ${modelo}</h3>`;
    precio=`<p>Precio: <b> ${precio}</b></p>`;
    return[img, nombre, modelo, precio];
}

const changeHidden=(number)=>{
    document.querySelector(".key-data").value=number
    
}

let documentFragment= document.createDocumentFragment();

for(var i=1; i<=20; i++){
    let modeloRandom=Math.round(Math.random()*10000);
    let precioRandom=Math.round(Math.random()*10+30);
    let llave=crearLLave(`llave ${i}`, `modelo ${modeloRandom}`,precioRandom);
    let div= document.createElement("DIV");
    div.classList.add(`item-${i}`,'flex-item');
    div.innerHTML = llave[0]+ llave[1] + llave[2]+llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);