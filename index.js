//Leer el json desde javascript hay distintas maneras

//1. 

let datosJson;
let xhr = new XMLHttpRequest();
xhr.open('GET',"persona.json",true);
xhr.responseType = 'json';

xhr.onload = function(){
    if(xhr.status === 200){
        datosJson = xhr.response;
        let elementoTexto = document.getElementById("nombre");
        elementoTexto.textContent = datosJson.nombre;
    }
    else{
        //manejar error despues
    }  
}
//Al final fuera de la funcion onload, llamamos el metodo del objeto de transmision que es xhr
xhr.send();

