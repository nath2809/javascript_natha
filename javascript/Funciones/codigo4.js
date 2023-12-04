//function saludar(){
    //respuesta= prompt("Hola ¿Qué tal?");
    //if(respuesta=="bien"){
        //alert("Me alegro")
    //}else{
        //alert("una pena")
    //}
//}

//saludar()


//CREAR funcion asignandole variables 


saludar=function(){
    respuesta=prompt("Hola ¿Qué tal?");
    if(respuesta=="bien"){
        alert("Me alegro")
    }else{
        alert("Una pena")
    }
}
saludar()

//Return

function saludar(){
    return "ok";
}

let saludo= saludar();// declara la variable saludo y esta varible va a contener todo lo que tiene la  funcion saludar
document.write(saludo) //se muestra por pantalla el dato que tiene la varible saludo


//PAREMETROSSS


function suma(num1, num2){// paremetros numero 1 y numero 2

    resultado= num1 + num2;
    document.write(resultado)

    document.write("<br>")
}

suma(12,32) // se llama a l funcion y se le asignan dos valores.

//PRIMERA FORMA PARA CREAR FUNCION
function saludar(nombre){
    let frase=`Hola ${nombre}`; // CON LET LA VARIBLE ESTA SE EJECUTA EN LA FUNCION  Y sin let es de forma global(general) 
    document.write(frase)
}

saludar("Buenasss")

//SEGUNDA FORMA PARA CREAR FUNCION

const saludar=function(nombre){
    let frase=`HOLA ${nombre}`;
    document.write(frase)
}

saludar("Maria")

//Tercera forma
const saludar=(nombre)=>{
    let frase=`HOLA ${nombre}`;
    document.write(frase)
}

saludar("Maria")



