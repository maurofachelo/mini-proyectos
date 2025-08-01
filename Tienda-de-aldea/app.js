
    //const shop = ["espada", "escudo", "pocion", "daga", "cetro", "hacha"];
    //const precioPorItem = 500;

        //creo shop con objetos instanciados
    class Item {
        constructor (id, nombre, precio, imagen) { 
            this. id = id;
            this.nombre = nombre;
            this.precio = precio;
            this.imagen = imagen;
            //this.tipo = dato;
        } 
    }

    const shop = [
    new Item (1, "espada", 600, "espada.png"),
    new Item (2, "pocion", 250, "pocion.png"),
    new Item (3, "escudo", 400, "escudo.png"),
    ]

    //let miInventario = [];
    //let miOro = 1500;

        //creo jugador con nombre null para cargar el propio
    let jugador = {
        inventario: [],
        oro: 1500,
        nombre: null,
    }

        //chequeo en quen LS no haya info guardada
    if (localStorage.getItem("jugador")) {
	    jugador = JSON.parse(localStorage.getItem("jugador"))
    }

        //si no habia info en LS le pidonel nombre al jugador
    if(!jugador.nombre){
        jugador.nombre = prompt("Pareces nuevo aqui, como es tu nombre?")
	    //localStorage.setItem("jugador", JSON.stringify(jugador))        
        guardarPartida()
    }

        // creo una function para enviar la info al LS
    function guardarPartida(){
        localStorage.setItem("jugador", JSON.stringify(jugador))  
    }

    
    function infoJugador(){
        //el nombre del objeto jugador lo envio a los campos de HTML correspondientes
        // como son mas de uno uso un for
    let nombreJugador = document.querySelectorAll(".nombre")
    nombreJugador.forEach((elemento)=> {elemento.innerHTML = jugador.nombre})    

        //vinculo el oro del objeto jugador los campos de HTML correspondientes
    let oroJugador = document.querySelector(".oro")
    oroJugador.innerHTML = jugador.oro

    let itemsInventario = document.querySelector(".inventario")
    itemsInventario.innerHTML = " " // vacio el div
    for (let item of jugador.inventario){
        itemsInventario.innerHTML += `<img src= "imagenes/${item.imagen}"  data-id= "${item.id}" class="itemAVender" title= "${item.precio}" data-precio= "${item.precio}"/>`;
    }

    const itemInventarioVender = document.querySelectorAll(".itemAVender") 
    for (let item of itemInventarioVender){
        item.addEventListener("click", (event) => {
        // Con event.target puedo obtener información de elemento con el que estoy
        // interactuando (haciendo click en este caso)
        vender_item(event.target.getAttribute("data-id"));
        });
    };    
} // de la function gardar

        // Muestro los items disponibles a la venta en el HTML
    let itemsShop = document.querySelector(".tienda")
    itemsShop.innerHTML = " " // vacio el div
    for (let item of shop){
        // Con += concateno los elementos HTML
        itemsShop.innerHTML += `<img src= "imagenes/${item.imagen}" data-id= "${item.id}" class="itemsShop" title= "${item.precio}" data-precio= "${item.precio}" />`;
    }

    let itemsALaVentaShop = document.querySelectorAll(".itemsShop")
    for (let item of itemsALaVentaShop){
        item.addEventListener("click", (event) => {
        // Con event.target puedo obtener información de elemento con el que estoy
        // interactuando (haciendo click en este caso)
        comprar_item(event.target.getAttribute("data-id"));
        });

    }

function comprar_item(id) {
    const item_a_comprar = shop.find((item) => item.id === Number(id));
    if (item_a_comprar) {
        if (jugador.oro >= item_a_comprar.precio) {
            jugador.inventario.push(item_a_comprar);
            jugador.oro -= item_a_comprar.precio;
            infoJugador();
            guardarPartida();
        } else {
                alert(`No tenés el oro suficiente para comprar ${item_a_comprar.nombre}.`);
        }
    }
}

function vender_item(id) {
    const item_a_vender = jugador.inventario.find((item) => item.id === Number(id));
    if (item_a_vender) {
        const indice = jugador.inventario.findIndex((item) => item.id === Number(id));
        jugador.inventario.splice(indice, 1);
        jugador.oro += item_a_vender.precio;
        infoJugador();
        guardarPartida();
    }
}
    // Inicializar la interfaz
infoJugador();
    



    



    /*miOro = localStorage.getItem("miOro", jugador.oro)
    miInventario = localStorage.getItem("miInventario", jugador.inventario)

    if(localStorage.getItem("miOro")){
        jugador.oro = parseInt(localStorage.getItem("miOro"))
    } 
    
    if(localStorage.getItem("miInventario")){
        jugador.inventario = JSON.parse(localStorage.getItem("miInventario"))
    } */
    
    

    /*function comprar_prompt(){
        const itemAComprar = prompt("Que item desea comprar: ")
        comprarItem(itemAComprar)
    }

    function vender_prompt(){
        const itemAVender = prompt("Que item desea vender: ")
        venderItem(itemAVender)
    }

    // 1. Validar que el item que ingresó en el prompt, esté a la venta
    // 2. Validar que tenga suficiente oro para comprar el item
    // 3. Si pasa las validaciones, resta el oro y agrega el item al inventario

    /*function comprarItem(prompt){
        
        let itemAComprar = false;

        for (item of shop){
            if (item.nombre == prompt){
            itemAComprar = item
            }
        }

        if (itemAComprar){
            if(jugador.oro >= itemAComprar.precio){
                jugador.inventario.push(itemAComprar)
                jugador.oro -= itemAComprar.precio
                console.log("haz comprado " +itemAComprar.nombre)
                localStorage.setItem("miOro", jugador.oro)
                localStorage.setItem("miInventario", JSON.stringify(jugador.inventario))


            } else{ 
                console.log("no posees oro sificiente")
                console.log(itemAComprar.nombre+ " cuesta: " +itemAComprar.precio+ " monedas de oro, tu apenas posees " + jugador.oro)      
            }
        } else{
            console.log("no poseo ese item") 
            console.log("aca encontraras " + shop.join(" - "))

        }

        /*if (shop.includes(item)){
            if (jugador.oro >= precioPorItem){
                miOro = miOro - precioPorItem
                const indice = shop.indexOf(item)
                miInventario.push(shop[indice])
                console.log("Haz comprado " + item)
            }    else {
                    console.log("no posees oro sificiente")
                    console.log(item + " cuesta: " +precioPorItem + " tu oro " + miOro)
            }    
        }   else {
                console.log("no poseo ese item")
                console.log("aca encontraras " + shop.join(" - "))
            }*/
    //}

    // 1. Validar que el item que queremos vender esté en el invetario

    /*function venderItem(prompt){
        itemAVender = false;
        for(item of jugador.inventario){
            if(item.nombre == prompt){
                itemAVender = item
            }
        }
        if(itemAVender){
            const indice = jugador.inventario.indexOf(itemAVender)
            jugador.inventario.splice(indice,1)
            jugador.oro = jugador.oro + itemAVender.precio            
                localStorage.setItem("miOro", jugador.oro)
                localStorage.setItem("miInventario", JSON.stringify(jugador.inventario))
            console.log("se ha vendido "+itemAVender.nombre+ " por " +itemAVender.precio +" monedas")
        }   else {
            console.log(prompt + " no se encuentra en el inventario")
            }

        /*if(miInventario.includes(item)){
            const indice = miInventario.indexOf(item)
            miInventario.splice(indice,1)
            miOro += precioPorItem
            console.log("haz vendido " + item)
        }   else {
            console.log(item + " no se encuentra en el inventario")
            }*/
    //}

    /*function miInventario_prompt(){
        if(jugador.inventario.length>0){
            for(item of jugador.inventario){
                console.log("-- " + item.nombre)
            }
            console.log("-- "+ jugador.oro + " monedas de oro")
        }   else {
            console.log ("no cuentas con ningun item \nposees " + jugador.oro + " monedas de oro")
    }


    }

        /*
        if(miInventario.length>0){
        console.log("tu inventario:")
        //console.log (miInventario.join("  \n")+ "\n" + miOro + " monedas de oro")
        miInventario.forEach(function(item) {
            console.log("se encuentra en el interior " + item)
        })   
        console.log("una bolsa con "+ miOro + " monedas de oro")
    }   else {
        console.log ("no cuentas con ningun item \nposees " + miOro + " monedas de oro")
    }
    }*/

