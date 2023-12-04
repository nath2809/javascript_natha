//Programación Orientada Objetos

//class animal{ // clase animal
    //constructor(nombre, especie, edad, color){// constructor, contiene  parametros de nombre, especie, edad, color.
        //this.nombre = nombre; // this es el objeto que se crea, lo que quiere decir es que el objeto nombre va a tener una caracteristica, una propiedad que es igual a especie
        //this.especie = especie;// propiedad especie es igual a especie, igual al paremetro de arriba.
        //this.edad = edad; // igual la propiedad del objeto 
        //this.color = color
        //this.informacion= ` Mi nombre es ${nombre}, soy un ${especie} tengo ${edad} años y soy de color ${color}`;
    

    //}
//}

// instanciar la clase
//const gato = new animal("Copito", "gato", "7", "blanco"); // perro es igual al objeto de la clase animal y se define que cosas tiene el objeto que serian atributos 
//conts perro= new animal ("Rosita", "perro", "9", "negro");
//const pajaro= new animal("Piolin", "parajo", "12", "verde");

//
//Acceder a las propiedades con un punto
//document.write(gato.informacion + "<br>")
//document.write(perro.informacion + "<br>")
//document.write(pajaro.informacion + "<br>")


//-------------------------------------------------------METODOS----------------------------------------------------------------------




//class animal{ // clase animal
    //constructor(nombre, especie, edad, color){// constructor, contiene  parametros de nombre, especie, edad, color.
        //this.nombre = nombre; // this es el objeto que se crea, lo que quiere decir es que el objeto nombre va a tener una caracteristica, una propiedad que es igual a especie
        //this.especie = especie;// propiedad especie es igual a especie, igual al paremetro de arriba.
        //this.edad = edad; // igual la propiedad del objeto 
        //this.color = color
        //this.informacion= ` Mi nombre es ${nombre}, soy un ${especie} tengo ${edad} años y soy de color ${color}`;

    //}
    //verInformación = ()=>{
        //document.write(this.informacion + "<br>")
   // }
//}

// instanciar la clase
//const gato = new animal("Copito", "gato", "7", "blanco"); // perro es igual al objeto de la clase animal y se define que cosas tiene el objeto que serian atributos 
//const perro= new animal ("Rosita", "perro", "9", "negro");
//const pajaro= new animal("Piolin", "parajo", "12", "verde");


//gato.verInformación();
//perro.verInformación();
//parajo.verInformación();


/// -------------------------------------------------HERENCIA----------------------------------------------------------------------------


class Animal{ // clase animal
    constructor(nombre, especie, edad, color){// constructor, contiene  parametros de nombre, especie, edad, color.
        this.nombre = nombre; // this es el objeto que se crea, lo que quiere decir es que el objeto nombre va a tener una caracteristica, una propiedad que es igual a especie
        this.especie = especie;// propiedad especie es igual a especie, igual al paremetro de arriba.
        this.edad = edad; // igual la propiedad del objeto 
        this.color = color
        this.informacion= ` Mi nombre es ${nombre}, soy un ${especie} tengo ${edad} años y soy de color ${color}`;
    

    }
    verInformacion(){
        document.write(this.informacion+"<br>")
    }
}

class Gato extends Animal{
    constructor(nombre,especie, edad, color,raza ){
        super(nombre, especie,edad,color);
        this.raza=raza;
    }
    ladrar(){
        alert("MIUUUUUUU");
    }
}

// instanciar la clase
const gato = new Gato("Copito", "gato", "7", "blanco"); // perro es igual al objeto de la clase animal y se define que cosas tiene el objeto que serian atributos 
const perro= new Animal ("Rosita", "perro", "9", "negro");
const pajaro= new Animal("Piolin", "parajo", "12", "verde");



gato.ladrar();
perro.verInformacion();
pajaro.verInformacion();


