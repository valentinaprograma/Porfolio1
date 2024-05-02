<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $tema = $_POST['tema'];
    $mensaje = $_POST['mensaje'];

    // Datos para enviar el correo
    $destinatario = 'aldallavalentina2@gmail.com'; // Reemplaza con tu dirección de correo
    $asunto = 'Nuevo mensaje desde el formulario';

    // Contenido del correo
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Correo: $correo\n";
    $contenido .= "Tema: $tema\n";
    $contenido .= "Mensaje: $mensaje\n";

    // Envío del correo
    mail($destinatario, $asunto, $contenido);

    // Redirigir a una página de confirmación
    header("Location: confirmacion.html");
    exit();
}
?>