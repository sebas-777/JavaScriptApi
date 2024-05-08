import { conexionApi } from "./conexionApi.js";

const lista = document.querySelector('[data-lista]');

export default function crearCard(titulo,descripcion,url,imagen) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML=` <iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descripcion-video">
        <img src="${imagen}">
        <h3>${descripcion}</h3>
        <p>1,1 mil visualizaciones</p>
    </div>`;
    
    return video;
} 

async function listarVideos() {
    
    try {
    const listAPI =  await conexionApi.listarVideos();

    listAPI.forEach(video => lista.appendChild(crearCard(
        video.titulo,
        video.descripcion,
        video.url,
        video.imagen
    )));
    } catch {
        lista.innerHTML = `<h2 class = "mensaje_titulo">Ha ocurrido un problema con la conexion :( </h2>`;
    }
    
} 

listarVideos();
