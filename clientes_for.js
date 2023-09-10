function guardar(){
    console.log("Ingresando a la funcion guardar...");
    /*
    var idCliente = document.getElementById('txtIdCliente').value;
    var apePaterno = document.getElementById('txtApePaterno').value;
    var apeMaterno = document.getElementById('txtApeMaterno').value;
    var nombres = document.getElementById('txtNombres').value;
    var correo = document.getElementById('txtCorreo').value;
    var dni = document.getElementById('txtDni').value;
    */

    // OBJETO JSON
    
    }; 

    console.log(objCliente);

    // GUARDANDO EN LOCAL STORAGE

    // 1. LLAMAR A LA TABLA DE LOCALSTORAGE Y VERIFICAR SI TIENE DATA
    var tablaCliente = localStorage.getItem("tablaClienteStorage");// CREAR VARIABLE LOCALSTORAGE
    tablaCliente = JSON.parse(tablaCliente);// PARSEA O TRANSFORMA LA VARIABLE JSON A VARIABLE JAVASCRIPT
    if(tablaCliente == null) {
        var tablaCliente = [];
    }
    // 2. AGregar en la tabla el objCliente
    tablaCliente.push(objCliente);
    localStorage.setItem("tablaClienteStorage", JSON.stringify(tablaCliente)); // GUARDAR LA TABLA EN LOCALSTORAGE
    // 3. Regresar a clientes.html
    window.location.replace("clientes_list.html");

