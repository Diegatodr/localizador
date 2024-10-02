document.addEventListener("DOMContentLoaded", function () {
    // Función para mostrar el login al cargar la página
    function mostrarLogin() {
        const usuario = prompt("Ingrese su usuario:");
        const contraseña = prompt("Ingrese su contraseña:");
        if (usuario && contraseña) {
            alert("Login exitoso");
        } else {
            alert("Por favor, ingrese los datos correctamente");
        }
    }
        
    mostrarLogin();
});