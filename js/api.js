export class API{
     constructor(artista, cancion){
         this.artista = artista;
         this.cancion = cancion;
    }

    async consultarApi(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        const datos = await fetch(url);
        const resultados = await datos.json();
        return resultados;
    }
 }