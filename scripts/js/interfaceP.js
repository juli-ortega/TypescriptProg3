var programadorFromInterface = {
    nombre: "Juan",
    lenguajes: ["JavaScript", "TypeScript", "Python"],
    tomaMate: true,
    apellido: "Perez",
    homero: "dou"
};
function enviarCurriculum(programador) {
    console.log("Este curriculum es de ".concat(programador.nombre));
}
enviarCurriculum(programadorFromInterface); // Este curriculum es de Juan
