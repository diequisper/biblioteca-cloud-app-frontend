export class Editorial {
    private idEditorial: number;
    private nombre: string;
    private paisOrigen: string;
    private sitioWeb: string;
    private imagenUrl: string;

    constructor(
        idEditorial: number,
        nombre: string,
        paisOrigen: string,
        sitioWeb: string,
        imagenUrl: string
    ) {
        this.idEditorial = idEditorial;
        this.nombre = nombre;
        this.paisOrigen = paisOrigen;
        this.sitioWeb = sitioWeb;
        this.imagenUrl = imagenUrl;
    }

    get getIdEditorial(): number {
        return this.idEditorial;
    }

    set setIdEditorial(idEditorial: number) {
        this.idEditorial = idEditorial;
    }

    get getNombre(): string {
        return this.nombre;
    }

    set setNombre(nombre: string) {
        this.nombre = nombre;
    }

    get getPaisOrigen(): string {
        return this.paisOrigen;
    }

    set setPaisOrigen(paisOrigen: string) {
        this.paisOrigen = paisOrigen;
    }

    get getSitioWeb(): string {
        return this.sitioWeb;
    }

    set setSitioWeb(sitioWeb: string) {
        this.sitioWeb = sitioWeb;
    }

    get getImagenUrl(): string {
        return this.imagenUrl;
    }

    set setImagenUrl(imagenUrl: string) {
        this.imagenUrl = imagenUrl;
    }
}
