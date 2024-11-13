interface ProgramadorInterface {
    nombre: string,
    lenguajes: string[],
    tomaMate: boolean | null,
}


let programadorFromInterface = {
    nombre: "Juan",
    lenguajes: ["JavaScript", "TypeScript", "Python"],
    tomaMate : true,
    apellido: "Perez",
    homero : "dou"
};

function enviarCurriculum(programador: ProgramadorInterface) {
    console.log(`Este curriculum es de ${programador.nombre}`);
}

enviarCurriculum(programadorFromInterface); // Este curriculum es de Juan
