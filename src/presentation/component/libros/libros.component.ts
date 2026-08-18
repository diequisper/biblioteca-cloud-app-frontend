import { Component, inject, Input } from '@angular/core';
import { Libro } from '../../../domain/entities/libro';
import { GetAllLibroUC } from '../../../domain/use-cases/libro-usecase';
import { take } from 'rxjs';
import { ItemCardComponent } from '../itemCard.compo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css', '../../style/option_common.css']
})
export class LibrosComponent {
  @Input() secTitle !: string;

  libros : Array<Libro> = new Array<Libro>;
  private getAllLibroUC = inject(GetAllLibroUC)

  ngOnInit(): void {
    /*this.getAllLibroUC.execute().subscribe({
      next: resp => {
      this.libros = resp.map((x: any) => 
        new Libro(
          x.idLibro,
          x.titulo,
          x.idioma,
          x.idAutor,
          x.anioOrgPub,
          x.idEditorial,
          x.sinopsis,
          x.imagenUrl,
          x.anioPub,
          x.categoria
        ))},
      error: err => {
        console.error('Error:', err);
      }
    });*/
      this.libros.push(
      new Libro(1, "The Silent Garden", "english", 1, 1990, 1, "A woman discovers a secret hidden in her garden.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2003, "romance",),
      new Libro(2, "Les Ombres", "french", 2, 1995, 2, "Two strangers meet beneath the lights of Paris.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2003, "drama"),
      new Libro(3, "El Último Viaje", "spanish", 3, 2001, 3, "Un viajero busca respuestas en un pueblo olvidado.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2004, "adventure"),
      new Libro(4, "Der letzte Winter", "german", 4, 1988, 4, "Ein Mann kehrt nach Jahren in seine Heimat zurück.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2002, "drama"),
      new Libro(5, "La Stella Perduta", "italian", 5, 1998, 5, "Una joven sigue las pistas de una estrella perdida.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2005, "fantasy"),
      new Libro(6, "The Last Lighthouse", "english", 6, 2003, 6, "A lighthouse keeper receives a mysterious final message.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2006, "mystery"),
      new Libro(7, "Le Cœur Brisé", "french", 7, 1992, 7, "Un peintre tente de retrouver son amour perdido.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2001, "romance"),
      new Libro(8, "Sombras del Mar", "spanish", 8, 2007, 8, "Una familia guarda un antiguo secreto junto al mar.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2008, "mystery"),
      new Libro(9, "Das verlorene Kind", "german", 9, 1985, 9, "Ein Dorf sucht nach einem verschwundenen Kind.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2000, "mystery"),
      new Libro(10, "Il Giardino Blu", "italian", 10, 2010, 10, "Un ragazzo trova una porta in un giardino impossibile.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2011, "fantasy"),
      new Libro(11, "Beyond the Stars", "english", 11, 2015, 11, "A scientist receives a signal from an unknown world.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2016, "science fiction"),
      new Libro(12, "La Maison Rouge", "french", 12, 1987, 12, "Une famille hérite d'une maison aux secrets étranges.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2000, "horror"),
      new Libro(13, "El Reloj Roto", "spanish", 13, 1999, 13, "Un reloj detenido parece predecir el futuro.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2003, "fantasy"),
      new Libro(14, "Die letzte Reise", "german", 14, 1994, 14, "Ein Kapitän emprende su último viaje hacia el norte.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2001, "adventure"),
      new Libro(15, "L'Amore Nascosto", "italian", 15, 2006, 15, "Due amici scoprono un amore che avevano ignorato.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2007, "romance"),
      new Libro(16, "The Forgotten Room", "english", 16, 1991, 16, "A young man discovers a locked room beneath his home.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2002, "thriller"),
      new Libro(17, "Le Dernier Été", "french", 17, 2004, 17, "Trois amis passent un été qu'ils n'oublieront jamais.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2005, "drama"),
      new Libro(18, "La Ciudad Perdida", "spanish", 18, 1989, 18, "Un explorador busca una ciudad perdida entre montañas.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2001, "adventure"),
      new Libro(19, "Der dunkle Wald", "german", 19, 2012, 19, "Zwei hermanos se pierden en un bosque desconocido.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2013, "horror"),
      new Libro(20, "Il Segreto del Mare", "italian", 20, 1997, 20, "Un pescatore encuentra un objeto misterioso en el mar.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2000, "mystery"),
      new Libro(21, "A Winter Promise", "english", 21, 2008, 21, "Two old friends reunite after many years apart.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2009, "romance"),
      new Libro(22, "Le Livre Perdu", "french", 22, 1996, 22, "Un écrivain découvre un livre qui raconte sa vie.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2002, "fantasy"),
      new Libro(23, "El Jardín Secreto", "spanish", 23, 2005, 23, "Una niña descubre un jardín que nadie recuerda.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2006, "fantasy"),
      new Libro(24, "Das alte Haus", "german", 24, 1983, 24, "Eine Familie zieht in ein seltsames altes Haus.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 1999, "horror"),
      new Libro(25, "La Luna Rossa", "italian", 25, 2011, 25, "Una ragazza cerca la verità dietro la luna rossa.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2012, "fantasy"),
      new Libro(26, "The Hidden Letter", "english", 26, 1993, 26, "An old letter reveals a family's forgotten history.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2001, "drama"),
      new Libro(27, "Le Voyageur", "french", 27, 2000, 27, "Un voyageur mystérieux arrive dans une petite ville.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2004, "mystery"),
      new Libro(28, "El Camino Azul", "spanish", 28, 2014, 28, "Un joven sigue un camino que aparece cada noche.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2015, "fantasy"),
      new Libro(29, "Die verlorene Stadt", "german", 29, 1986, 29, "Ein Forscher sucht nach einer verschwundenen Stadt.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2000, "adventure"),
      new Libro(30, "L'Ultima Estate", "italian", 30, 2009, 30, "Quattro amici condividono un'estate piena di ricordi.", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", 2010, "drama")
    );
  }
}
