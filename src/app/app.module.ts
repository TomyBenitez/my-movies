import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { HttpClientModule} from '@angular/common/http';
import { PeliculasPopularesComponent } from './components/peliculas-populares/peliculas-populares.component';
import { VerPeliculaComponent } from './components/ver-pelicula/ver-pelicula.component';
import { TopRatedMoviesComponent } from './components/top-rated-movies/top-rated-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PeliculasComponent,
    SeriesComponent,
    NavegacionComponent,
    PeliculasPopularesComponent,
    VerPeliculaComponent,
    TopRatedMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
