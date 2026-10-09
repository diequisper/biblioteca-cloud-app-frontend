export class Autor {
    private idAutor: number;
    private nombre: string;
    private apellido: string;
    private fechaNac: string | null;
    private nacionalidad: string;
    private breveBio: string;
    private fechaDeceso: string | null;
    private imagenUrl: string;

    constructor(
        idAutor: number,
        nombre: string,
        apellido: string,
        fechaNac: string | null,
        nacionalidad: string,
        breveBio: string,
        fechaDeceso: string | null,
        imagenUrl: string
    ) {
        this.idAutor = idAutor;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNac = fechaNac;
        this.nacionalidad = nacionalidad;
        this.breveBio = breveBio;
        this.fechaDeceso = fechaDeceso;
        this.imagenUrl = imagenUrl;
    }

    get getIdAutor(): number {
        return this.idAutor;
    }

    setIdAutor(idAutor: number): void {
        this.idAutor = idAutor;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getApellido(): string {
        return this.apellido;
    }

    setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    getFechaNac(): string | null {
        return this.fechaNac;
    }

    setFechaNac(fechaNac: string | null): void {
        this.fechaNac = fechaNac;
    }

    getNacionalidad(): string {
        return this.nacionalidad;
    }

    setNacionalidad(nacionalidad: string): void {
        this.nacionalidad = nacionalidad;
    }

    getBreveBio(): string {
        return this.breveBio;
    }

    setBreveBio(breveBio: string): void {
        this.breveBio = breveBio;
    }

    getFechaDeceso(): string | null {
        return this.fechaDeceso;
    }

    setFechaDeceso(fechaDeceso: string | null): void {
        this.fechaDeceso = fechaDeceso;
    }

    getImagenUrl(): string {
        return this.imagenUrl;
    }

    setImagenUrl(imagenUrl: string): void {
        this.imagenUrl = imagenUrl;
    }
}