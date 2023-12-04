//--------------------------------------------------PROBLEMA a-------------------------------------------------

// - Dejar pasar solo a los +18
// - El primero que entre despues de las 2AM, No paga

//let free= false; // VARIBLE free que va hacer falsa


//const validarclient= (time)=>{
    //let edad= prompt("¿Cual es su edad?");
    //if(edad>18){
        //if(time>=2 && time <7 && free ==false){
            //alert("Pasar gratis");
            //free=true;
        //}else{
            //alert(`son las ${time}:00Hs Podes pasar, pero debes pagar la entrada`  );
        //}

    //}else{
        //alert("eres menor de edad, no pemitido entrar");
    //}
//}

//validarclient(23);
//validarclient(24);
//validarclient(0.2);
//validarclient(0.6);
//validarclient(1);
//validarclient(2);
//validarclient(2.4);
//validarclient(3);



//-------------------------------------------------PROBLEMA B-------------------------------------------------------------------------------------------------------


// crear un sistema que permita registrar almnos  que estan presentes (P) y ausentes (A) EN CLASE.
//pasados los 30 dias mostrar la situacion final de todos los alumnos (Nro total de presentes y ausentes).
//se puede tener un maximo de 10% de ausencias por semestre, si se tienen mas aclarar que está reprobado


//let cantidad= prompt("¿Cuantos alumnos son?"); //muestra en pantalla la pregunta cuantos almnos hay
//let alumnosTotales=[];// es este array se muestran los almunos totales del grupo


//for(i = 0; i < cantidad ; i++){ //toma desde la posición cero del array y luego se incrementa //
    //alumnosTotales[i]=[prompt("Nombre del alumno"+ (i+1)),0]; // se muestra en la poscicion el nombre del alumno  
//}

//const tomarAsistencia=(nombre,p)=>{ //funcion donde toma la asistencia, cons dos parametros nombre y la p  que es la posicion en la lista//
    //let presencia=prompt(nombre); // la variable presencia va a tener el nombre del estudiante presente
    //if(presencia =="p"|| presencia =="P"){ // si la persona presente es igual p, esta presente y la presencia es igual igual a P, CONDICION
        //alumnosTotales[p][1]++; // con [i]Se selecciona un elemento del array  y [1]se coge el otro elemento del array 
    //}
//} // va a tener un array  con los nombre y aprte tambien el numero de asistencias del alumno

//for (i = 0; i < 30; i++){ //ciclo for mientras que i sea 0 y sea menor que 30, 30 veces el bucle por que se debe tomar asistencia 30 dias .//
    //for(alumno in alumnosTotales){ // el alumno pasa la posición, si es of nos pasa el numero 
    //tomarAsistencia(alumnosTotales[alumno][0],alumno);  //se accede solo al nombre por medio de la posicon
        // llamar la funcion tomarAsistencia 30 veces
    //} // in => pasar la posicion
//}

//for (alumno in alumnosTotales){ //primera posicion el nombre, 64 linea se obtine el numero de peresentes, 65 linea se obtiene el numeroi de ausentes

    //let resultado =`${alumnosTotales[alumno][0]}:<br> 
    //_____________Presentes:<b> ${alumnosTotales[alumno][1]}</b><br>
    //_____________Ausencias:<b> ${30 - alumnosTotales[alumno][1]}</b>`; // se resta por que hay 30 días y asiste 20 la persona, le quedan 10 días
    // 30 menos la cantidad de día que asistio.

    // semestre tiene 180 días, el 10% son 18, si en un semestre falta 18 días ya desaprueba
    //if(30 - alumnosTotales[alumno][1]>18){ // si las ausencias son mayores a 18 reprobado.
    //resultado+="<b style='color:red'> REPROBADO POR INASISTENCIA </b><br><br>";
    //}else{
    //resultado+="<br><br>"
    //}
    //document.write(resultado)
    
//}




//------------------------------------PROBLEMA C---------------------------------------------------------------------------------------------------------

//calculadora, simplificar trabajo


//se realizan todas las funciones de sumar, restar, multiplicar y dividir
const sumar=(num1, num2)=>{ 
    return parseInt (num1)+ parseInt(num2); // con el parseint se convierte a numero y se suma con el otro num2
}


const restar=(num1, num2)=>{
    return parseInt (num1)- parseInt(num2);
}


const dividir=(num1, num2)=>{
    return parseInt (num1)/parseInt(num2);
}


const multiplicar=(num1, num2)=>{
    return parseInt (num1)* parseInt(num2);
}


//Alert pregunta
alert("¿Qué operación desea realizar?");
operacion= prompt("1: suma, 2: resta, 3:división 4:multiplicación");



// Si la operacion seleccionada es 1, pasa a la siguiente linea y pide los dos numeros para sumar
if(operacion==1){
    let numero1=prompt("primer número para sumar");
    let numero2= prompt("segundo número para sumar");
    resultado=sumar(numero1,numero2); //se pone variable resultado en esta se llama a la funcion que hace la operación de suma y se pone el num1 y num2 que se van a sumar, guardar el resultado.
    alert(`tu resultado es ${resultado}`); //alert donde se muestra el resultado.

}


else if(operacion==2){
    let numero1=prompt("primer número para restar");
    let numero2= prompt("segundo número para restar");
    resultado=restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);

}



else if(operacion==3){
    let numero1=prompt("primer número para dividir");
    let numero2= prompt("segundo número para dividir");
    resultado=dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);

}


else if(operacion==4){
    let numero1=prompt("primer número para multiplicar");
    let numero2= prompt("segundo número para multiplicar");
    resultado=multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);

}
else{
    alert("no se ha encontrado la operación")
}




