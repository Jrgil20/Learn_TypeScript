// Tipado fuerte en TypeScript

// Definición de una interfaz para un objeto de usuario
interface Usuario {
    nombre: string;
    edad: number;
    correo: string;
}

// Función que recibe un objeto de tipo Usuario
function mostrarUsuario(usuario: Usuario): void {
    console.log(`Nombre: ${usuario.nombre}`);
    console.log(`Edad: ${usuario.edad}`);
    console.log(`Correo: ${usuario.correo}`);
}

// Creación de un objeto que cumple con la interfaz Usuario
const usuarioEjemplo: Usuario = {
    nombre: "Juan Pérez",
    edad: 30,
    correo: "juan.perez@example.com"
};

// Llamada a la función con el objeto creado
mostrarUsuario(usuarioEjemplo);