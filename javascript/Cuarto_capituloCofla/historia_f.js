const obtenerInformacion=(materia)=>{
    materias={
        fisica:["Perez","pedro","pepito","cofla", "maria"],
        programacion:["Dalto","pedro","juan", "pepito"],
        logica:["Hernandez","pedro","juan","pepito", "cofla","maria"],
        quimica:["Rodriguez","pedro","juan","pepito","cofla", "maria"]

    }
    if(materias[materia] !==undefined){
        return [materias[materia],materia, materias];
    }else{
        return materias;
    }
}

const mostrarInformacion=(materia)=>{
    let informacion = obtenerInformacion(materia);

    if (informacion !==false){
        let profesor= informacion[0][0];
        alumnos= informacion[0];
        alumnos.shift();
    
        document.write(`El profesor de <b> ${informacion[1]}</b> es: <b stlye='color: red'> ${profesor} </b><br>
        los alumnos son: <b sytle="color:blue">${alumnos}</b><br><br>
        ` );
    
    }
}

const cantidadDeClase=(alumno)=>{
    let informacion= obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal= 0;
    for (info in informacion){
        if(informacion[info].inludes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(""+ info);
        }
    }
    return `<b stlye='color:blue'> ${alumno}</b> está en ${cantidadTotal} clases: </b> <br>
    Está cursando las clases: <b>${clasesPresentes}</b><br><br>
    `;
}




mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");


document.write(cantidadDeClase("cofla"))
document.write(cantidadDeClase("pedro"))

