import { Component, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  
  actorElegido_DetallePelicula:any | Actor;
  actorElegido_DetalleActor:any | Actor;
  paisSeleccionado_detalle:any | Pais;
  constructor() { }

  ngOnInit(): void {
  }
  capturarActorElegido_peliculas(data:any){
    this.actorElegido_DetallePelicula=data;
  }

  capturarActorElegido_detalle(data:any){
    this.actorElegido_DetalleActor=data;
  }

  capturarPaisSeleccionado(data:any){
    this.paisSeleccionado_detalle = data;
  }
}
