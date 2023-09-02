import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerPeliculaComponent } from './components/ver-pelicula/ver-pelicula.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'ver-pelicula/:id', component:VerPeliculaComponent},
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
