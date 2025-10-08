export class Libro{

  private idLibro: number;
  private titulo : string;
  private idAutor ?: number;
  private idioma : string;
  private anioOrgPub ?: number;
  private idEditorial ?: number;
  private sinopsis ?: string;
  private imagenUrl ?: string;
  private anioPub ?: number;
  private categoria ?: string;



  constructor(idLibro : number, titulo : string, idioma : string, idAutor : number, anioOrgPub ?: number,
                idEditorial ?: number, sinopsis ?: string, imagenUrl ?: string, anioPub ?: number, categoria ?: string){
    this.idLibro = idLibro;
    this.titulo = titulo;
    this.idioma = idioma;
    this.idAutor = idAutor;
    this.anioOrgPub = anioOrgPub;
    this.idEditorial = idEditorial;
    this.sinopsis = sinopsis;
    this.imagenUrl = imagenUrl;
    this.anioPub = anioPub;
    this.categoria = categoria;

  }

  public get getIdLibro(): number {
    return this.idLibro;
  }
  public set setIdLibro(value: number) {
    this.idLibro = value;
  }

  public get getTitulo() : string{
    return this.titulo;
  }
  public set setTitulo(value : string){
    this.titulo = value;
  }

  public get getIdAutor() : number | undefined{
    return this.idAutor;
  }
  public set setIdAutor(value : number | undefined){
    this.idAutor = value;
  }

  public get getIdioma() : string{
    return this.idioma;
  }
  public set setIdioma(value : string){
    this.idioma = value;
  }

  public get getAnioOrgPub() : number | undefined{
    return this.anioOrgPub;
  }
  public set setAnioOrgPub(value : number | undefined){
    this.anioOrgPub = value;
  }

  public get getIdEditorial() : number | undefined{
    return this.idEditorial;
  }
  public set setIdEditorial(value : number | undefined){
    this.idEditorial = value;
  }

  public get getSinopsis() : string | undefined{
    return this.sinopsis;
  }
  public set setSinopsis(value : string | undefined){
    this.sinopsis = value
  }

  public get getImagenUrl() : string | undefined{
    return this.imagenUrl
  }
  public set setImagenUrl(value : string | undefined){
    this.imagenUrl = value;
  }

  public get getAnioPub() : number | undefined{
    return this.anioPub;
  }
  public set setAnioPub(value : number | undefined){
    this.anioPub = value;
  }

  public get getCategoria() : string | undefined{
    return this.categoria
  }
  public set setCategoria(value : string | undefined){
    this.categoria = value;
  }

}