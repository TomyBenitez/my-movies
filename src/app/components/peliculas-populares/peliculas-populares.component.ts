import { Component, Input, OnInit } from '@angular/core';
import { PeliculasPopularesResultado } from 'src/app/interfaces/moviesInterface/peliculasPopulares.interface';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router'

@Component({
  selector: 'app-peliculas-populares',
  templateUrl: './peliculas-populares.component.html',
  styleUrls: ['./peliculas-populares.component.css']
})
export class PeliculasPopularesComponent implements OnInit {

  @Input() peliculas?:PeliculasPopularesResultado[];
  image_Base_Url:string
  constructor( private router:Router) {
    this.image_Base_Url=environment.IMAGE_BASE_URL_200;

  }

  ngOnInit(): void {
    
  }

  verDetalle(id:number | undefined){
    this.router.navigate(['ver-pelicula',id])
  }
}