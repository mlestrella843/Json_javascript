
let datosJson;

    fetch('persona.json')
    .then(res => res.json())
    .then((salida) => {
        datosJson = salida;

        let elementoTexto = document.getElementById('nombre');
        elementoTexto.textContent = datosJson.nombre;
    })
    .catch(function(error) {alert (error)})