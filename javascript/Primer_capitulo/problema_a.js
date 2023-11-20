 // Roberto tiene $1.5 USD
// Pedro tiene $1.5 USD
// cofla tiene $3 USD


dineroCofla= prompt("Cuanto dinero tiene cofla?");
dineroPedro= prompt("Cuanto dinero tiene pedro?");
dineroRoberto= prompt("Cuanto dinero tiene roberto?");

// CONVERTIR EL TIPO DE DATO, funcion que nos permite convertir cadena de texto a numero entero.

dineroCofla=parseInt(dineroCofla);




if(dineroCofla >=0.6 && dineroCofla <1){
    alert("cofla; comprar helado de agua");
    alert("y te sobra"+ (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert("cofla; comprar el helado de crema");
    alert("y te sobra"+ (dineroCofla - 1));

}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("cofla; comprar el heladix");
    alert("y te sobra"+ (dineroCofla - 1.6));

}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("cofla; comprar el heladovich");
    alert("y te sobra"+ (dineroCofla - 1.7));

    
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("cofla; comprar el helardo");
    alert("y te sobra"+ (dineroCofla - 1.8));

}
else if (dineroCofla >= 2.9 ){
    alert("cofla; comprar helado con confites o el pote de 1/4kg");
    alert("y te sobra"+ (dineroCofla - 2-9));
    
  

}else{
    alert(" Lo siento cofla, Dinero Insuficiente");
}


if (dineroPedro >=0.6 && dineroPedro <1){

    alert("Pedro; comprar helado de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Pedro; comprar el helado de crema");
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro; comprar el heladix");
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Pedro; comprar el heladovich");
    
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("Pedro; comprar el helardo");
}
else if (dineroPedro >= 2.9 ){
    alert("Pedro; comprar helado con confites o el pote de 1/4kg");
    
}else{
    alert("Lo siento pedro, Dinero Insuficiente");
}



if(dineroRoberto >=0.6 && dineroRoberto <1){

    alert("Roberto; comprar helado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("Roberto; comprar el helado de crema");
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("Roberto; comprar el heladix");
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("Roberto; comprar el heladovich");
    
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("Roberto; comprar el helardo");
}
else if (dineroRoberto >= 2.9 ){
    alert("Roberto; comprar helado con confites o el pote de 1/4kg");
    
}else{
    alert("Lo siento roberto; Dinero Insuficiente");
}


//MISMO PROBLEMA RESUELTO DE OTRA FORMa


// "use strict";

// const definirCompra = (n)=>{
//    let din= prompt('Dinero de ${n}');
//    if(din >= 0.6 && din <1) return ('${n}: helado de agua');
//    if(din >= 1 && din <1.6) return ('${n}: helado de crema');
//    if(din >= 1.6 && din <1.7) return ('${n}: helado de heladix');
//    if(din >= 1.7 && din <1.8) return ('${n}: helado de heladovich');
//    if(din >= 1.8 && din <2.9) return ('${n}: helado de helardo');
//    if(din >= 2.9) return ('${n}: helado de confites o pote de 1/4kg');
//    else return('${n}: Dinero insuficiente');

// console.log(definirCompra("Cofla"));
// console.log(definirCompra("Pedro"));
// console.log(definirCompra("Roberto"));



//}









