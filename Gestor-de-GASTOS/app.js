

//let gastoFijo = ["Luz", "Gas", "Alquiler", "Tarjeta", "Colegio", "Internet"];
//let monto = [];
//let opcion
let acumulador = 0;
let ingresos;
const usuario = {
    nombre: null,
    servicios: ["uz", "Agua", "Tarjeta de Credito", "Wifi", "Impuestos"],
    montos: [],
    }

//const gastos = {
//    usuario.servicios[1]: 0,
//}




/*do{
    
    //opcion = parseInt(prompt(   "Bienvenido al Programa \n\n" +
                                "Aqui verificaremos su estado financiero\n\n" +
                                "MENU:   1 Carga de datos\n" +
                                        "2 Consulta de montos \n" +
                                        "3 Consulta de estado financiero \n" +
                                        "4 Salir"));*/

console.log ("Hola Ameo")

document.getElementById("btn_gastos").addEventListener("click", cargarGasto);
document.getElementById("btn_montos").addEventListener("click", cargarMonto);
document.getElementById("btn_consultar").addEventListener("click", consultas);
document.getElementById("btn_verificar").addEventListener("click", verificar);



function verificar(){
    const body = document.body
    acumulador = 0
    for (monto of usuario.montos){
        acumulador += monto
        }
        let respuesta
        if(acumulador>0){            
            ingresos = parseFloat(prompt("Indique sus ingresos mensuales: "))
            let porcentajeDeGastos = acumulador*100/ingresos;

            if(porcentajeDeGastos <=20){
                console.log("Sus gastos fijos mensuales son de $"+acumulador+ ", representan menos del 20% de sus ingresos.")
                respuesta = "Sus gastos fijos mensuales son de $"+acumulador+ ", representan menos del 20% de sus ingresos."
                body.style.backgroundImage = 'url("./Img4semaforo/imgSemaforoVERDE.jpg")'
            }
            
            else if(porcentajeDeGastos <=40){
                console.log("Sus gastos fijos mensuales son de $"+acumulador+ ", representan entre el 20 y el 40% de sus ingresos.")
                respuesta = "Sus gastos fijos mensuales son de $"+acumulador+ ", representan entre el 20 y el 40% de sus ingresos."
                body.style.backgroundImage = 'url("./Img4semaforo/imgSemaforoAMARILLO.jpg")'
            }
            else if(porcentajeDeGastos <=60){
                console.log("Sus gastos fijos mensuales son de $"+acumulador+ ", representan entre el 40 y el 60% de sus ingresos.")
                respuesta = "Sus gastos fijos mensuales son de $"+acumulador+ ", representan entre el 40 y el 60% de sus ingresos."
                body.style.backgroundImage = 'url("./Img4semaforo/imgSemaforoAMARILLO.jpg")'
            }
            
            else if(porcentajeDeGastos <=75){
                console.log("Sus gastos fijos mensuales son de $"+acumulador+ ", representan entre el 60 y el 75% de sus ingresos.")
                respuesta = "Sus gastos fijos mensuales son de $"+acumulador+ ", representan entre el 60 y el 75% de sus ingresos."                
                body.style.backgroundImage = 'url("./Img4semaforo/imgSemaforoROJO.jpg")'
            }
            
            else{
                console.log("ATENCION - Sus gastos representan MAS del 75% de sus ingresos.")
                respuesta = "ATENCION - Sus gastos representan MAS del 75% de sus ingresos."           
                body.style.backgroundImage = 'url("./Img4semaforo/imgSemaforoROJO.jpg")'
            }
        }else{
            console.log("No hay montos de servicios cargados. Por favor, seleccione la opción MONTOS para cargar datos.")
            respuesta = "No hay montos de servicios cargados. Por favor, seleccione la opción MONTOS para cargar datos."
            }    
    let container = document.querySelector("#respuesta")
    container.innerHTML = respuesta
    container.style.cssText = `
        background-color: #f8f9fa;
        border-left: 4px solid;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        color: #333;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5;
        margin: 1rem 0;
        padding: 1rem 1.5rem;
        transition: all 0.3s ease;
        display: inline-flex;
    `;
}

function consultas (){
    alert(">>| Verifica estos gastos y luego procede a realizar el calculo |<<")
        console.log("\n Este mes cargaste: \n \n")
        for (servicio of usuario.servicios){
        let indice = usuario.servicios.indexOf(servicio)
        console.log("este mes el gasto para "+servicio+ " es de $"+ usuario.montos[indice])
        }
}

function cargarGasto (){
    let gasto = prompt("Que gastos desea agregar?")
        if (gasto){
        usuario.servicios.push(gasto)
        console.log (usuario.servicios)
        } else{
            console.log("No realizaste una carga valida")
        }
        let container = document.querySelector("#elementosServicios")
        //console.log(container)
        container.innerHTML = usuario.servicios.join(", ")
}


function cargarMonto () {    
    alert("Asegurese de haber Cargado todos los gastos antes de asignar valores!!")
    for (servicio of usuario.servicios){
        let monto = parseFloat(prompt("Indique el monto del gasto en "+ servicio+":"))
            if(monto >= 0){
            usuario.montos.push(monto)
            console.log("le asignaste $"+monto+" al gasto de "+servicio)
            } else{
                console.log("No realizaste una carga valida para ese servicio")
                monto = parseFloat(prompt("Indique el monto del gasto en "+ servicio+":"))
                    if(monto >= 0){
                    usuario.montos.push(monto)
                    console.log("le asignaste $"+monto+" al gasto de "+servicio)
                    } else{
                        console.log("la carga fallo ...")
                        break
                    }
            }            
    }    
}



    
/*      switch (opcion){

            case 1:
                for (let i = 0; i < gastoFijo.length; i++) {
                    let valor = parseFloat(prompt(`Ingrese el monto para ${gastoFijo[i]}:`));
                    monto.push(valor);
                }
                break;

            case 2:
                if (monto.length === 0) {
                    console.log("No hay montos de servicios cargados. Por favor, seleccione la opción 1 para cargar datos.");
                } else {
                    console.log("Gastos fijos:", gastoFijo);
                    console.log("Montos ingresados:", monto);
                }
                break;
                
                
            case 3:
                acumulador = 0; 
                for (let i = 0; i < monto.length; i++) {
                    acumulador = acumulador + monto[i];    
                }
                if (acumulador > 0){
                
                    let ingresos = parseFloat(prompt("Indique sus ingresos mensuales: "))
                    let porcentajeDeGastos = acumulador*100/ingresos;
                    
                    if(porcentajeDeGastos <=20){
                        console.log("Sus gastos representan menos del 20% de sus ingresos.")
                    }
                    
                    else if(porcentajeDeGastos <=30){
                        console.log("Sus gastos representan entre el 20 y el 30% de sus ingresos.")
                    }
                    else if(porcentajeDeGastos <=40){
                        console.log("Sus gastos representan entre el 30 y el 40% de sus ingresos.")
                    }
                    
                    else if(porcentajeDeGastos <=50){
                        console.log("Sus gastos representan entre el 40 y el 50% de sus ingresos.")
                    }
                    
                    else{
                        console.log("ATENCION - Sus gastos representan MAS del 50% de sus ingresos.")
                    }
                }
                
                break;

            case 4:
                console.log("Muchas gracias por usar el programa.");
                break;

            default:
                console.log("Opcion incorrecta.")
        }    
}
while(opcion != 4);*/

//sector CHATGPT


const h1 = document.querySelector("h1");
h1.style.cssText = `
    font-family: Arial, sans-serif;
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #4CAF50;
    margin-left: 100px;
    display: inline-flex;
`;

const allH3 = document.querySelectorAll("h3");
allH3.forEach(h3 => {
    h3.style.cssText = `
        font-family: Arial, sans-serif;
        font-size: 18px;
        color: #555;
        margin: 15px 0;
        padding: 8px;
        background: transparent;
        border-left: 3px solid #4CAF50;
        display: inline-flex;
    `;
});

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.style.cssText = `
        font-family: Arial, sans-serif;
        font-size: 14px;
        color: white;
        background: #4CAF50;
        padding: 8px 16px;
        margin: 5px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    `;
    
    // Efecto hover simple
    btn.addEventListener('mouseenter', () => {
        btn.style.background = '#45a049';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.background = '#4CAF50';
    });
});