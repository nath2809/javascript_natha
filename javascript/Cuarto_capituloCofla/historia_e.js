//________________________________________PROBLEMA________________________________________________________

//Funcion devuelva:

// - profesor asignado, nombre de alumnos, funcion que nos indique en cuantas clases está cofla
// - Nombre de esas clases y profesores


class Calculadora{
    constructor(){}
sumar=(num1, num2)=>{ 
    return parseInt (num1)+ parseInt(num2); // con el parseint se convierte a numero y se suma con el otro num2
}


restar=(num1, num2)=>{
    return parseInt (num1)- parseInt(num2);
}


dividir=(num1, num2)=>{
    return parseInt (num1)/parseInt(num2);
}


multiplicar=(num1, num2)=>{
    return parseInt (num1)* parseInt(num2);
}

potenciar(num,exp){
    let numero= num;
    for (var i =0; i<exp; i++){
        numero=numero*num;
    }
    return numero;

}
raizCuadrada(num){
    return Math.cbrt(num);
}

raizCubica(num){
    return Math.cbrt(num);
}


}

const calculadora= new Calculadora();

//Alert pregunta
alert("¿Qué operación desea realizar?");
operacion= prompt("1: suma, 2: resta, 3:división, 4:multiplicación , 5: potenciación , 6:raíz cuadrada , 7:raíz cubica");



// Si la operacion seleccionada es 1, pasa a la siguiente linea y pide los dos numeros para sumar
if(operacion==1){
    let numero1=prompt("primer número para sumar");
    let numero2= prompt("segundo número para sumar");
    resultado=calculadora.sumar(numero1,numero2); //se pone variable resultado en esta se llama a la funcion que hace la operación de suma y se pone el num1 y num2 que se van a sumar, guardar el resultado.
    alert(`tu resultado es ${resultado}`); //alert donde se muestra el resultado.

}


else if(operacion==2){
    let numero1=prompt("primer número para restar");
    let numero2= prompt("segundo número para restar");
    resultado=calculadora.restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);

}



else if(operacion==3){
    let numero1=prompt("primer número para dividir");
    let numero2= prompt("segundo número para dividir");
    resultado= calculadora.dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);

}


else if(operacion==4){
    let numero1=prompt("primer número para multiplicar");
    let numero2= prompt("segundo número para multiplicar");
    resultado=calculadora.multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);


}
else if(operacion==5){
    let numero1=prompt("primer número a potenciar");
    let numero2= prompt("exponente");
    resultado=calculadora.potenciar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);

}

else if(operacion==6){
    let numero1=prompt("conocer la raiz cuadrada de:");
    resultado=calculadora.raizCuadrada(numero1);
    alert(`tu resultado es ${resultado}`);

}

else if(operacion==7){
    let numero1=prompt("conocer la raiz cubica de:");
    resultado=calculadora.raizCubica(numero1);
    alert(`tu resultado es ${resultado}`);

}


else{
    alert("no se ha encontrado la operación")
}
