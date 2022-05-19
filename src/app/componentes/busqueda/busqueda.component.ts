import { Component, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  pelicula:any | Peliculas;
  constructor() { }

  ngOnInit(): void {
  }
  capturarPeliculaElegida(data:any){
    this.pelicula= data;
  }
}
