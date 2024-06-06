/* ---------------------------
   Se "capturan" los elementos
   del DOM a seleccionar
   --------------------------- */

// navegación
const nav = document.querySelector("header nav");
// botón que llama al menu
const menuBtn = document.querySelector(".menu-btn");
// vÃ­nculos de los items
const menuLink = document.querySelectorAll("nav ul li a");

/* ------------------------------------
   Se determinan quÃ© eventos
   desencadenarÃ¡n las acciones del menÃº
   ------------------------------------ */

// al cliquear en el boton
menuBtn.addEventListener("click", toggleMenu);

// para cada vÃ­nculo del menÃº
menuLink.forEach( el => {
    // cuando se cliquea en un vÃ­nculo
    el.addEventListener('click', toggleMenu);
    // se ejecuta la funciÃ³n "toggleMenu"
});

/* --------------------------
   En una funciÃ³n, se definen
   las acciones para el menÃº
   -------------------------- */

function toggleMenu(e) {
    // previene efectos predeterminados de las etiquetas <a>
    e.preventDefault();

    // Si el ancho de la ventana del navegador
    // mide menos de 600px (el botón "hamburguesa" será visible)
    if (window.innerWidth < 600) {
        // agrega la clase "menuVisible" a nav, si no la tiene
        // y se la saca, si la tiene
        nav.classList.toggle("menuVisible");
    }

    // si el cliqueado es un vÃ­nculo
    if (this.hasAttribute("href")) {
        // guarda la ruta del vÃ­nculo
        let adondeVoy = this.getAttribute("href");
        // redirecciona a destino del vÃ­nculo
        window.location = adondeVoy;  
    } // fin de si es cliqueado un vinculo
} // fin de las acciones para el menu