
    //const shop = ["espada", "escudo", "pocion", "daga", "cetro", "hacha"];
    //const precioPorItem = 500;

    class Item {
        constructor (nombre, precio, dato) { 
            this.nombre = nombre;
            this.precio = precio;
            this.tipo = dato;
        } 
    }

    const shop = [
    new Item ("espada", 600, "arma"),
    new Item ("pocion", 250, "te cura"),
    new Item ("escudo", 400, "armadura"),
    ]


    //let miInventario = [];
    //let miOro = 1500;

    const jugador = {
        inventario: [],
        oro: 1500,
        ataque: 200,
        defensa: 250,
        hp: 400,
    }


    

    miOro = localStorage.getItem("miOro", jugador.oro)
    miInventario = localStorage.getItem("miInventario", jugador.inventario)

    if(localStorage.getItem("miOro")){
        jugador.oro = parseInt(localStorage.getItem("miOro"))
    } 
    
    if(localStorage.getItem("miInventario")){
        jugador.inventario = JSON.parse(localStorage.getItem("miInventario"))
    } 
    
    

    function comprar_prompt(){
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

    function comprarItem(prompt){
        
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
    }

    // 1. Validar que el item que queremos vender esté en el invetario

    function venderItem(prompt){
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
    }

    function miInventario_prompt(){
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

