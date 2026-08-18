export class Usuario{

    private nombre: string;
    private apellido: string;
    private edad: number;
    private username: string;
    private password: string;
    private rol: string;


    constructor(nombre : string, apellido : string, edad : number, username : string, password : string, rol : string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.username = username;
        this.password = password;
        this.rol = rol;
    }

    public get getNombre(): string {
        return this.nombre;
    }
    public set setNombre(value: string) {
        this.nombre = value;
    }

    public get getApellido(): string {
        return this.apellido;
    }
    public set setApellido(value: string) {
        this.apellido = value;
    }

    public get getEdad(): number {
        return this.edad;
    }
    public set setEdad(value: number) {
        this.edad = value;
    }

    public get getUsername(): string {
        return this.username;
    }
    public set setUsername(value: string) {
        this.username = value;
    }
    
    public get getPassword(): string {
        return this.password;
    }
    public set setPassword(value: string) {
        this.password = value;
    }
    
    public get getRol(): string {
        return this.rol;
    }
    public set setRol(value: string) {
        this.rol = value;
    }
}