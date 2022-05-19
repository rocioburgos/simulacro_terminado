import { Component, Input, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() pelicula:any | Peliculas;
  constructor() { }

  ngOnInit(): void {
  }

}
