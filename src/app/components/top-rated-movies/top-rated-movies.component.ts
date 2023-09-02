import { Component,Input , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopRatedResult } from 'src/app/interfaces/moviesInterface/topRated.interface';
import { PeliculasService } from 'src/app/service/peliculas.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {

  @Input() top_Rated_Movies?:TopRatedResult[]
  image_Base_Url:string
  constructor(private router:Router) { 
    this.image_Base_Url=environment.IMAGE_BASE_URL_200;
  }

  ngOnInit(): void {
  }
  verDetalle(id:number | undefined){
    this.router.navigate(['ver-pelicula',id])
  }
}