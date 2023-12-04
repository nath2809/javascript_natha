//let variable="contenido" definir la variable 

// lo arrays se definen como objetos

//arrays= ["banana","manzana","pera"];

//document.write(arrays[2])


//let pc2 =["NathaPC","Intel core I3","16GB", "1TB"];

//document.write(pc1["procesador"])

// -------------------------ARRAYS---------------------------------------------------------
//let pc1={
    //nombre:"NathaPC",
    //procesador:"Intel core I7",
    //ram:"16GB",
    //espacio:"1TB"

//};
//let nombre= pc1["nombre"];
//let procesador= pc1["procesador"];
//let ram= pc1["ram"];
//let espacio= pc1["espacio"];


//frase=`el nombre de mi PC es: <b>${nombre} </b><br>
        //el procesador es: <b>${procesador}</b><br>
        //la memoria ram es: <b>${ram}</b><br>
        //El espacio en el disco es de: </b><b>${espacio}`;
    

//document.write(frase)

// --------------------------------Bucles------------------------------------------------------------------


//
//numeroParaSumar=0;

// numero
//if(numeroParaSumar<10){
    //document.write("es menor que 10");
//}


//let numero=0;//

//if(numero<10){
    //numero++; // ++ aumentarle uno 
    //numero++;
    //document.write(numero)

//}



//let numero=0;//

//if(numero<10){
    //numero++; // ++ aumentarle uno 
    //numero++;
    //document.write(numero)

//}



//SE SUMA EL NUMERO 10 VECES CON NUMERO ++


//let numero=0;

//while(numero<10){ //si el numero es menor a 10 entonces con numero ++ se le suma uno
    
    //numero++;// se le suma uno

    //document.write(numero) //se muestra en pantalla

//} // cada vez que se cumple la condicion de que cero es menor que uno se muestra en pantalla primero el 1, cuando vuelve itera 
// luego se muestra el 2 y asi hasta que llegue a cumplir la condicion. que termina en 10.


//SENTENCIA BREAK 


//let numero=0 // DEFINIR LA VARIBLE
//while(numero<100){
    //numero++;
    //document.write(numero);
    //if(numero==10){
        //break;
    //}
//}
//document.write("fin")


//SENTENCIA FOR

//for(let i =0; i <6; i++){ // mientras que cero sea menor que 6 el codigo se ejecuta y muestra el siguiente codigo
    //document.write(i+"<br>")
//}

// otra forma 

//for (let i=6; i>=6; i--){

    //document.write(i+"<br>")

//}



//for (let i =0; i<20; i++){
 //if(i==12){
    //b//reak;
 //}
 //document.write(i+ "<br>")
//} // se muestra hasta el 11



// SE MUESTRA EL 11 Y SALTA AL NUMERO 13


//for (let i =0; i<20; i++){
    //if(i==12){
       //continue;
    //}
    //document.write(i+ "<br>")
   //} // se muestra hasta el 11




//SENTENCIA FOR IN


// EN ESTE EL IN CASO DEVUELVE LA POSICION DEL GATO, PERRO Y CONEJO
//let animales=["gato","perro","conejo",]

//for(animal in animales){ //animal en cada vuelta del bucle va hacer igual a cada uno de lo elementos que contiene animales 

    //document.write(animal + "<br>");
//}


   //document.write("<br>");

//SENTENCIA OF
//for(animal of animales ){
    //document.write(animal + "<br>");
//}


//SENTENCIA LABEL

array1=["maria","josefa","roberta"];
array2=["pedro","macelo",array1,"josefina"];

//Array dentro de un bucle

for(let array in array2){ //recorrer el primer array
    if (array==2){//en caso de que este en la posicion 2, se  correr el segundo array,posicion 2 devuelve un array
        for(let array of array1)
        {
            document.write(array + "<br>");
            continue // termina
        }
    }else{
        document.write(array2[array]+ "<br>");
    }
}








































