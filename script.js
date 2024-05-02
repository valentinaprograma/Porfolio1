let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// funcion texto inicio
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el elemento que deseas animar
    var elemento = document.querySelector('.contenido-texto');

    // Define la animación usando anime.js
    anime({
        targets: elemento,
        opacity: [0, 1], // Cambia la opacidad de 0 a 1
        translateY: [20, 0], // Mueve el elemento hacia arriba desde 20px
        duration: 1000, // Duración de la animación en milisegundos
        easing: 'easeInOutQuad', // Tipo de interpolación
        delay: 500 // Retraso antes de que comience la animación en milisegundos
    });
});




//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

