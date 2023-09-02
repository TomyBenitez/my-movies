import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Credits } from 'src/app/interfaces/moviesInterface/credits.interface';
import { Details} from 'src/app/interfaces/moviesInterface/details.interface';
import { Result } from 'src/app/interfaces/moviesInterface/videos.interface';
import { PeliculasService } from 'src/app/service/peliculas.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ver-pelicula',
  templateUrl: './ver-pelicula.component.html',
  styleUrls: ['./ver-pelicula.component.css'],
})
export class VerPeliculaComponent implements OnInit {

  details?:Details
  credits?:Credits
  videosMovies?:Result[]
  id:number = 0;
  image_Base_Url_400:string;
  image_Base_Url_200:string;
  numberConverted?:number;
  youtube_base_url?:string;
  constructor(private activatedRoute:ActivatedRoute, private _details:PeliculasService, private _credits:PeliculasService, private _videosmovies:PeliculasService, public sanitizer : DomSanitizer) {
    this.id=+activatedRoute.snapshot.params['id']
    this.image_Base_Url_400 = environment.IMAGE_BASE_URL_400
    this.image_Base_Url_200 = environment.IMAGE_BASE_URL_200
    this.youtube_base_url = environment.YOUTUBE_BASE_URL

  }

  ngOnInit(): void {
    this._details.obtenerDetallesPeliculas(this.id).subscribe(response => {
      this.details = response;
    })
    this._credits.obtenerCreditosPeliculas(this.id).subscribe(response => {
      this.credits = response;
    })
    this._videosmovies.obtenerVideosPeliculas(this.id).subscribe(response => {
      this.videosMovies = response.results;
    })
  }
  RoundNumber(numberToRound:number){
    return numberToRound.toFixed(1);
  }
}
