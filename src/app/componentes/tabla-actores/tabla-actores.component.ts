import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ActoresService } from 'src/app/servicios/actores.service';
 

@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.css']
})
export class TablaActoresComponent implements OnInit {

  listadoActores: any[] = [];
  @Output() onActorElegido_peliculas:EventEmitter<any>= new EventEmitter();
  @Output() onActorElegido_detalle:EventEmitter<any>= new EventEmitter();
 
  constructor(private actoresSrv:ActoresService) { }

  ngOnInit(): void {
    this.actoresSrv.traerTodos().subscribe((actores) => {
      this.listadoActores = JSON.parse(JSON.stringify(actores));
    });
  }

  peliculas(actor:Actor){  
    this.onActorElegido_peliculas.emit(actor);
  }


  detalle(actor:Actor){  
    this.onActorElegido_detalle.emit(actor);
  }
}
