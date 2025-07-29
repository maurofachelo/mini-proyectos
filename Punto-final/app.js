
const el_btn = document.querySelector("#boton")
const body = document.querySelector("body")

el_btn.addEventListener("click", respuestaClick)

el_btn.addEventListener("contextmenu", function(e) {
    e.preventDefault(); // Evita que aparezca el menú contextual
    respuestaClicDerecho();
});
//el_btn.addEventListener("mousedown", respuestaDBLClick)

function respuestaClick(){
    if (el_btn.textContent === "Encender") {
        el_btn.textContent = "Apagar";
        body.style.backgroundColor = "#ffffff";
        body.style.color = "black";
    } else {
        el_btn.textContent = "Encender";
        el_btn.style.border= "2px solid white";
        body.style.backgroundColor = "#000000";
        body.style.color = "white";
        }
}

function respuestaClicDerecho(){    
        body.style.backgroundImage = "linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3, #ff0000)";
        body.style.backgroundSize = "400% 400%";
        body.style.animation = "rainbow 8s linear infinite";        
        el_btn.style.border= "none";
    }




/*function respuestaClick (){
    el_btn.innerHTML = "Encender";
    el_btn.style.backgroundColor= "white";
    el_btn.style.color= "black";
    body.style.backgroundColor= "black";
    body.style.color= "black";

}

el_btn.addEventListener("click", function() {
    if (el_btn.textContent === "Encender") {
        el_btn.textContent = "Apagar";
        body.style.backgroundColor = "#ffffff";
        body.style.color = "black";
    } else {
        el_btn.textContent = "Encender";
        body.style.backgroundColor = "#000000";
        body.style.color = "white";
    }
});*/