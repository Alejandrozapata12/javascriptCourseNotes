const btn = document.getElementById("btn");
const tableShow = document.getElementById("bodyTable");

function Data(id, producto, cantidad, status){
    this.id = id;
    this.producto = producto;
    this.cantidad = cantidad;
    this.status = status;
}

btn.addEventListener("click", ()=>{

     tableShow.innerHTML = " ";

    const datos = [
        new Data(1,"Cargador",150,true),
        new Data(2,"Laptop",580,true),
        new Data(3,"Mouse",450,false)
    ];

    datos.forEach(dato => mostrarData(dato));

});

function mostrarData(item){

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${item.id}</td>
        <td>${item.producto}</td>
        <td>${item.cantidad}</td>
        <td>${item.status ? "✔️" : "❌"}</td>
    `;

    tableShow.appendChild(fila);

}