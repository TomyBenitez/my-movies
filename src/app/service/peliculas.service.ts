import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PeliculasPopulares } from '../interfaces/moviesInterface/peliculasPopulares.interface';
import { Details } from '../interfaces/moviesInterface/details.interface';
import { Credits } from '../interfaces/moviesInterface/credits.interface';
import { TopRated } from '../interfaces/moviesInterface/topRated.interface';
import { VideosMovies } from '../interfaces/moviesInterface/videos.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private hhtp:HttpClient) { }

  obtenerPopulares():Observable<PeliculasPopulares>{
    return this.hhtp.get<PeliculasPopulares>(`${environment.API_BASE_URL}/movie/popular?api_key=${environment.API_KEY}`)
  }

  obtenerTopRated():Observable<TopRated>{
    return this.hhtp.get<TopRated>(`${environment.API_BASE_URL}/movie/top_rated?api_key=${environment.API_KEY}`)
  }
  
  obtenerDetallesPeliculas(id:number):Observable<Details>{
    return this.hhtp.get<Details>(`${environment.API_BASE_URL}/movie/${id}?api_key=${environment.API_KEY}`)
  }

  obtenerCreditosPeliculas(id:number):Observable<Credits>{
    return this.hhtp.get<Credits>(`${environment.API_BASE_URL}/movie/${id}/credits?api_key=${environment.API_KEY}`)
  }

  obtenerVideosPeliculas(id:number):Observable<VideosMovies>{
    return this.hhtp.get<VideosMovies>(`${environment.API_BASE_URL}/movie/${id}/videos?api_key=${environment.API_KEY}`)
  }
}
