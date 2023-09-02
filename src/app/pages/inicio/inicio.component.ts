import { Component, OnInit } from '@angular/core';
import {PeliculasPopularesResultado} from 'src/app/interfaces/moviesInterface/peliculasPopulares.interface';
import { PeliculasService } from 'src/app/service/peliculas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  peliculasPopulares?:PeliculasPopularesResultado[]

  constructor(private _peliculas:PeliculasService) { }

  ngOnInit(): void {
    this._peliculas.obtenerPopulares().subscribe(respuesta => {
      this.peliculasPopulares = respuesta.results;
    })
  }

}
