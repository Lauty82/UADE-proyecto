function nombre() {
    let saludo = document.getElementById("saludo");
    let nombre = prompt("Por favor, ingrese su nombre:");
    saludo.textContent = "Bienvenid@ " + nombre + "!";
}
function formulario() {
    let form = document.getElementById("formulario");
    let mensaje = document.getElementById("post-envio");

    //Cuando se da click en el boton enviar
    form.addEventListener("submit", (event) => {
        //Previene el envio
        event.preventDefault();       
        form.style.display = "none";
        mensaje.style.display = "block";
    }); }