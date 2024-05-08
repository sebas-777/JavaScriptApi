// Method Get
async function listarVideos() {
    const conexion = await fetch('http://localhost:3000/videos');
    const conexionCovertida = await conexion.json();
    return conexionCovertida
    
} 

// Method Post
async function enviarVideo(titulo,descripcion,url,imagen) {
    const conexion = await fetch('http://localhost:3000/videos',{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            descripcion:`${descripcion} mil visualizaciones`,
            url:url,
            imagen:imagen
        })
    })
    const conexionCovertida = conexion.json();
    if(!conexion.ok){
        throw new Error('Ha ocurrido un error al enviar el video');
    }

    return conexionCovertida;
}

async function buscarVideos(palabraClave) { 
    const conexion = await fetch(`http://localhost:3000/videos?q=${palabraClave}`);
    const conexionCovertida = conexion.json();
    console.log(conexionCovertida);
    return conexionCovertida
    
}
export const conexionApi={
    listarVideos,enviarVideo,buscarVideos
}

