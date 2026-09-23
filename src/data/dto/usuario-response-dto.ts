export class UsuarioResponseDto {
    nombre : string;
    username : string;

    constructor(nombre : string, username : string){
        this.nombre = nombre;
        this.username = username
    }
}