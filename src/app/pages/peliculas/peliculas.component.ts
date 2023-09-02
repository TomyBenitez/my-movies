import { Component, OnInit } from '@angular/core';
import { TopRatedResult } from 'src/app/interfaces/moviesInterface/topRated.interface';
import { PeliculasService } from 'src/app/service/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  topRatedMovies?:TopRatedResult[]
  constructor(private _top_rated_movies:PeliculasService) { }

  ngOnInit(): void {
    this._top_rated_movies.obtenerTopRated().subscribe(response => {
      this.topRatedMovies = response.results
      console.log(this.topRatedMovies)
    })
  }

}
