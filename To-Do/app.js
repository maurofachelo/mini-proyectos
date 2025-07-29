
const tareas = [];
let respuesta = " ";
//const tareaPendiente = [];
//const tareaFinalizada = [];


class Tarea {
    constructor (nombre, tipo, estado){
        this.nombre = nombre;
        this.tipo = tipo;
        //this.plazo = plazo;
        this.estado = estado;
    }    
}

function crear_prompt (){
    let respuestaCrear =  prompt("desea ingresar una nueva tarea? s/n")
        if(respuestaCrear == "S" || respuestaCrear == "s"){
            crearTarea()
        }
        else if (respuestaCrear == "N" || respuestaCrear == "n"){
            console.log("\nGenial, menos trabajo!\n")
            respuesta = "Genial, menos trabajo!"
        }   
        else{
            console.log("\nPulse el boton crear y luego responda con s/n\n")
            respuesta = "Pulse el boton crear y luego responda con s/n"
        }      
    let container = document.querySelector("#respuesta")
    container.innerHTML = respuesta
}

function eliminar_prompt (){
    if(tareas.length>0){  
    let tareaAEliminar = prompt("Que tarea pendiente desea eliminar? ")
        eliminarTarea(tareaAEliminar)
    } else{
    console.log("\nNo hay tareas disponibles para esta accion\n")
    respuesta = "No hay tareas disponibles para esta accion"
}
    let container = document.querySelector("#respuesta")
    container.innerHTML = respuesta
}

function crearTarea(){
    const nombre = prompt("Ingrese el nombre de una nueva tarea ")
    const tipo = prompt("Ingrese el tipo de tarea ")
    //const plazo = prompt("Ingrese una nueva tarea ")
    const estado = "pendiente"

    let nuevaTarea = false

        if (nombre && tipo){
            nuevaTarea = new Tarea (nombre, tipo, estado)
            tareas.push(nuevaTarea) 
            console.log("\nse ha cargado correctamente la tarea: " + nuevaTarea.nombre+"\n");
            respuesta = "se ha cargado correctamente la tarea: " + nuevaTarea.nombre

        }   else{
            console.log("\nno ha ingresado valores validos para nombre y tipo de tarea\n")
            respuesta = "no ha ingresado valores validos para nombre y tipo de tarea"
            crear_prompt();
        }
        //console.log("se ha cargado correctamente la tarea: " + nuevaTarea.nombre);
        //respuesta = "se ha cargado correctamente la tarea: " + nuevaTarea.nombre

    let container = document.querySelector("#respuesta")
    container.innerHTML = respuesta
}

function pendientes_prompt(){
    if(tareas.length>0){
    console.log("\nTareas pendientes: \n")
    respuesta = "Existen tareas pendientes (ver consola)"
        for (tarea of tareas){          
            if(tarea.estado == "pendiente"){
            console.log(tarea.nombre+" - "+tarea.tipo+" - "+ tarea.estado)
            }
        }
    //console.log(tareas)
    } else {
        console.log ("\nno cuentas con ninguna tarea pendiente\n")
        respuesta = "no cuentas con ninguna tarea pendiente"
    }
    let container = document.querySelector("#respuesta")
    container.innerHTML = respuesta
}


function eliminarTarea (prompt){
    let indice 
    let tareaAEliminar = false
        for (tarea of tareas){
            if (tarea.nombre == prompt){
            indice = tareas.indexOf(tarea)
            tareaAEliminar = tarea
            }
        }
        if (tareaAEliminar){
            tareas.splice(indice, 1)
            console.log ("\nla tarea "+ prompt+ " se ha eliminado correctamente\n")
            respuesta = "la tarea "+ prompt+ " se ha eliminado correctamente"
            }
        else{
            console.log("\nno existe "+prompt+"en el listado de tareas\n")
            respuesta = "no existe "+prompt+"en el listado de tareas"
        }
    let container = document.querySelector("#respuesta")
    container.innerHTML = respuesta
}


function completar_prompt(){
    let tareaACompletar = false
    let validador = false
        if(tareas.length>0){            
            console.log("\nAl momento tienes estas tareas: ")
            respuesta = "Al momento tienes tareas (ver detalle en consola)"             
            for (tarea of tareas){
                console.log(tarea.nombre+" - "+tarea.tipo+" - "+tarea.estado)            
            }
            tareaACompletar = prompt("haz completardo una tarea? indicame cual")
            for (tarea of tareas){
                if(tarea.nombre == tareaACompletar){
                //tarea.nombre = tareaACompletar
                validador = tarea.nombre
                tarea.estado = "cumplida"
                console.log("se procede a marcar como cumplida "+tareaACompletar)
                respuesta = "se procede a marcar como cumplida "+tareaACompletar
                } 
            }
            if(!validador){
                    console.log("\nNo tengo esa tarea en mis registros\n")
                    respuesta = "No tengo esa tarea en mis registros"
                }

            /*console.log("prueba de tareas post => completar")
            for (tarea of tareas){
                console.log(tarea.nombre+" - "+tarea.tipo+" - "+ tarea.estado)
            }    */      
            let contador = 0
            for(tarea of tareas){
                if(tarea.estado == "pendiente")
                    contador ++
                }   if(contador == 0){
                    alert("Felicitaciones!!!")
                    respuesta = "\nAl momento no tienes tareas pendientes\n"
                }
        } else {
            console.log ("\nno cuentas con ninguna tarea pendiente\n")
            respuesta = "no cuentas con ninguna tarea pendiente"
        }
    let container = document.querySelector("#respuesta")
    container.innerHTML = respuesta
}


function finalizadas_prompt(){
    const tareasCumplidas = []
        for(tarea of tareas){
            if(tarea.estado == "cumplida"){
            tareasCumplidas.push(tarea)
            }
        }
    if(tareasCumplidas.length>0){
            console.log("\nTareas finalizadas: \n")
            respuesta = "EXisten tareas finalizadas (ver consola)"
                for (tarea of tareasCumplidas){
                    if(tarea.estado == "cumplida"){
                    console.log(tarea.nombre+" - "+tarea.tipo+" - "+ tarea.estado)
                    }
                }
    } else {
        if(tareas.length>0){
        console.log ("\nno cuentas con ninguna tarea cumplida pedazo de ...\n")
        respuesta = "no cuentas con ninguna tarea cumplida pedazo de ..."
        } else{
            console.log("\nAl momento no haz usado este maravilloso GESTOR DE TAREAS\n")
            respuesta = "Al momento no haz usado este maravilloso GESTOR DE TAREAS"
        }
    }   
    let container = document.querySelector("#respuesta")
    container.innerHTML = respuesta
}