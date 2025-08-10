
const contenedor = document.querySelector("input");
const boton = document.querySelector("button");
let liHoras = document.querySelector("#horas");
let liMinutos = document.querySelector("#minutos");
let liSegundos = document.querySelector("#segundos");
let respuesta = document.querySelector("p")

boton.addEventListener("click", hacerCalculo);

function hacerCalculo(){
    const dias = parseFloat(contenedor.value.trim())
    const horas = dias *24;
    const minutos = horas * 60;
    const segundos = minutos * 60;
    
    respuesta.innerHTML = `"Se informa que ${dias} dia/s equivale a:"`

    liHoras.textContent = `Horas: ${horas}`;
    liMinutos.textContent = `Minutos: ${minutos}`;
    liSegundos.textContent = `Segundos: ${segundos}`;
    contenedor.value = ""
}




