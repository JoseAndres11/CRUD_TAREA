var tablaCliente = localStorage.getItem("tablaClienteStorage");
tablaCliente = JSON.parse(tablaCliente);
if (tablaCliente == null) {
    var tablaCliente = [];
}

function buscarCliente() {
    console.log("Ingresando a buscarCliente...");
    var dataFila = '';
    if (tablaCliente.length > 0) {
        for (const i in tablaCliente) {
            var varCliente = JSON.parse(tablaCliente[i]);
            console.log(tablaCliente);
            dataFila += "<tr>";
            dataFila += "<td>" + varCliente.idCliente + "</td>";
            dataFila += "<td>" + varCliente.txtNombresYapellidos + "</td>";
            dataFila += "<td>" + varCliente.txtDocumento + "</td>";
            dataFila += "<td>" + varCliente.txtTelefono + "</td>";
            dataFila += "<td>" + varCliente.txtCorreo + "</td>";
            dataFila += "</tr>";
        }
        document.getElementById("dataClientes").innerHTML = dataFila;
    }
}

function ingresarCliente() {
    console.log("Ingresando a ingresarCliente...");
    window.location.replace("clientes_for.html");
}