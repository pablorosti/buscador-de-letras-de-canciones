 import * as ui from './interfaz.js';
 import {API} from './api.js';

ui.formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    //obtener datos del formulario
    const artista = document.getElementById('artista').value;
    const cancion = document.getElementById('cancion').value;
    if(artista === '' || cancion === ''){
        ui.divMensajes.innerHTML = `Error... todos los campos son obligatorios`;
        ui.divMensajes.classList.add('error');
        setTimeout(()=>{
            ui.divMensajes.innerHTML = ``;
            ui.divMensajes.classList.remove('error');

        }, 2999);
    }else{
        const api = new API(artista, cancion);
        api.consultarApi()
            .then((data) =>{
                if(data.lyrics){
                    ui.divResultado.innerHTML = `${data.lyrics}`;
                    ui.divResultado.classList.add('resultado');
                }else{
                    ui.divMensajes.innerHTML = `La cancion no existe... prueba otra búsqueda`;
                    ui.divMensajes.classList.add('error');
                    setTimeout(()=>{
                        ui.divMensajes.innerHTML = ``;
                        ui.divMensajes.classList.remove('error');
            
                    }, 2999);
                }
            });
        



    }
})