async function listarVideos() {
    const conexion = await fetch('http://localhost:3002/videos');
    const conexionCovertida = await conexion.json();
    
    //console.log(conexionCovertida);
    return conexionCovertida
    
} 

export const conexionApi={
    listarVideos
}

listarVideos();