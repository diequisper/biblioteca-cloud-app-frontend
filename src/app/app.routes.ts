import { Routes } from '@angular/router';
import { LibrosComponent } from '../presentation/component/libros/libros.component';
import { AutoresComponent } from '../presentation/component/autores/autores.component';
import { EditorialesComponent } from '../presentation/component/editoriales/editoriales.component';
import { FavoritosComponent } from '../presentation/component/favoritos/favoritos.component';
import { bookmarksAccessGuard } from '../presentation/guards/bookmarks-access.guard';

export const routes: Routes = [
  {path : 'libros', component : LibrosComponent},
  {path : 'autores', component : AutoresComponent},
  {path : 'editoriales', component : EditorialesComponent},
  {path : 'favoritos', component : FavoritosComponent, canActivate : [bookmarksAccessGuard]}
];
