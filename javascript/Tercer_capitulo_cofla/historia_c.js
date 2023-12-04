/// ________________________________________________________PROBLEMA C______________________________


// -MOSTRARLE LAS PARTICULARIDADES DE LOS 3 CELULARES 

// - CADA UNO DEBE TENER COLOR, PESO, RESOLUCIÓN DE PANATALLA, CAMARA Y MEMORIA RAM

// -DEBEN PODER APRENDER, REINICIAR , TOMAR FOTOS Y GRABAR


class Celular{
    constructor(color, peso, tamaño, rdc, ram){
        this.color=color;
        this.peso=peso;
        this.tamaño= tamaño;
        this.resolucionCamara= rdc;
        this.memoriaRam=ram
        this.encendido=false;

    }

    //metodos

    presionarBotonEncedido(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido=true;
        }else{
            alert("celular apagado")
            this.encendido= false;
        }
    }
    reiniciar(){
        if(this.encendido==true){
            alert("reiniciando celular");
            this.encedido=true;
        }else{
            alert("El celular está apagado ")
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolución de: ${this.resolucionCamara}`)
    }
    grabarVideo(){
        alert(`grabando video en ${this.resolucionCamara}`)

    }
    mobileInfo(){ 
        //METODO PARA MOSTAR LAS CUALIDADES DE LOS CELULARES
        return `
        Color: <b> ${this.color} </b><br>
        Peso: <b> ${this.peso} </b><br>
        Tamaño: <b> ${this.tamaño} </b><br>
        Resolucion de Video: <b> ${this.resolucionCamara}</b><br>
        Memoria Ram: <b>${this.memoriaRam} </b><br>`;
    }

}

class CelularAltaGama extends Celular{ //extends Celular de está forma se hace la herencia
    constructor(color, peso, tamaño, rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucioDeCamaraExtra= rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camra lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial")
    }
    infoAltaGama(){
        return this.mobileInfo()+ `Resolución de camara Extra:${this.resolucioDeCamaraExtra}`
    }
}


//celular1 = new Celular("morado","150g","5'","full hd","1GB");
//celular2 = new Celular("plateado","155g","5.4'","full hd","2GB");
//celular3 = new Celular("dorado","146g","5.9'","full hd","2GB");

celular1= new CelularAltaGama ("rojo","130g","5.2","4k", "3GB", "full hd");
celular2= new CelularAltaGama ("negro","142g","6","4k", "3GB", "full");


document.write(`
    ${celular1.infoAltaGama()} <br></br>
    ${celular2.infoAltaGama()} <br></br>
`);



//celular1.presionarBotonEncedido();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();
//celular1.presionarBotonEncedido();


