function guardar() {
    console.log("Ingresando a la funcion guardar...");
    alert("guardado :)")

    var objCliente = JSON.stringify({
        idCliente: document.getElementById('txtIdCliente').value,
        txtNombresYapellidos: document.getElementById('txtNombresYapellidos').value,
        txtDocumento: document.getElementById('txtDocumento').value,
        txtTelefono: document.getElementById('txtTelefono').value,
        txtCorreo: document.getElementById('txtCorreo').value,
    });

    console.log(objCliente);


    var tablaCliente = localStorage.getItem("tablaClienteStorage");
    tablaCliente = JSON.parse(tablaCliente);
    if (tablaCliente == null) {
        var tablaCliente = [];
    }

    tablaCliente.push(objCliente);

    localStorage.setItem("tablaClienteStorage", JSON.stringify(tablaCliente));

    window.location.replace("clientes_lista.html");

}