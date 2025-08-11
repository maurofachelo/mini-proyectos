const ServicioMesa = 800;
const acumulados = {}; // ejemplo: {1: 0, 2: 0, ...}

document.querySelectorAll(".mesa").forEach(mesa => {
    const numMesa = mesa.dataset.mesa;
    acumulados[numMesa] = 0;

const ServicioMesa = 800;
const monto = mesa.querySelector(".montoMesa")
const concepto = mesa.querySelector(".conceptoMesa")
const btnAgregar = mesa.querySelector(".btnAgregar")
const btnActivar = mesa.querySelector(".btnActivar")
const btnLimpiar = mesa.querySelector(".btnLimpiar");
const btnTotal = mesa.querySelector(".btnTotal")
const comensales = mesa.querySelector(".numComensales")
let acumulado = 0;

btnActivar.addEventListener("click",(e) => {
    e.preventDefault()
    const detalleMesa = mesa.querySelector(".detalleMesa");
    const newRow = document.createElement("tr");    
    if (comensales.value>0) {
        newRow.innerHTML = `
          <td>Tenedor p/ ${comensales.value}</td>
          <td>${ServicioMesa * comensales.value}</td>
        `;
        concepto.value = "";
        monto.value = "";
        detalleMesa.appendChild(newRow);
        btnAgregar.disabled = false;
        btnActivar.disabled = true;
        comensales.disabled = true;
        acumulado += ServicioMesa * comensales.value;
    } else{
        alert("Ingrese un numero de comensales valido")
    }
})

btnAgregar.addEventListener("click", (e) => {
    e.preventDefault();
    const montoValue = monto.value;
    const conceptoValue = concepto.value;

    if (montoValue && conceptoValue) {
        if (isNaN(montoValue) || montoValue <= 0) { //validacion negativa
            alert("Ingrese un monto valido");
            return;
        }
        const detalleMesa = mesa.querySelector(".detalleMesa");
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
          <td>${conceptoValue}</td>
          <td>${montoValue}</td>
        `;
        concepto.value = "";
        monto.value = "";
        detalleMesa.appendChild(newRow);
        acumulado += parseFloat(montoValue);
    }else{
        alert("Ingrese un concepto y un monto validos")
    }
});

btnTotal.addEventListener("click", (e) => {
    e.preventDefault()
    const total = acumulado;
    const detalleMesa = mesa.querySelector(".detalleMesa");
    const newRow = document.createElement("tr");          
    const separatorRow = document.createElement("tr");
        separatorRow.innerHTML = `
            <td>==========</td>
            <td>==========</td>
        `;
    detalleMesa.appendChild(separatorRow);
        newRow.innerHTML = `
          <td>TOTAL</td>
          <td>${total}</td>
        `;
    detalleMesa.appendChild(newRow);
    btnTotal.disabled = true;
    btnAgregar.disabled = true;
});

btnLimpiar.addEventListener("click", (e) => {
    e.preventDefault();
    const detalleMesa = mesa.querySelector(".detalleMesa");
    detalleMesa.innerHTML = "";
    acumulado = 0;
    btnTotal.disabled = false;
    btnAgregar.disabled = true;
    btnActivar.disabled = false;
    comensales.disabled = false;
});
});
