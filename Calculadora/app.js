

const botones = document.querySelectorAll("button");
const pantalla = document.querySelector("#pantalla");

//let operacion = " ";
let resetPantalla = false;

for(let boton of botones){
    boton.addEventListener("click", () =>{
        const botonText = boton.textContent;
        if(botonText === "C"){
            pantalla.value = "0";
        }else if(botonText === "="){
            pantalla.value = eval(pantalla.value); //eval() interpreta ese texto como si fuera código JavaScript.
            resetPantalla = true;
        }else if (boton.id === "borrar"){
            if (pantalla.value.length <= 1) {
                    pantalla.value = "0";
            }else {
                pantalla.value = pantalla.value.slice(0, -1);
            }
        }else if(pantalla.value === "0"){
            pantalla.value = botonText;
        }else {
            if (resetPantalla && !isNaN(botonText)) {
                // Si venimos de un "=", y ahora tocamos un número entonces reemplazara al resultado
                pantalla.value = botonText;
                resetPantalla = false;
            } else {
                if (pantalla.value === "0") {
                    pantalla.value = botonText;
                } else {
                    pantalla.value += botonText;
                }
                resetPantalla = false;
            }
        }
    });
}