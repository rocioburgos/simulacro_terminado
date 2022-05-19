import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ActoresService } from 'src/app/servicios/actores.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  listadoActores: any[] = [];
  @Output() onActorElegido:EventEmitter<any>= new EventEmitter();
  actorElegido:string='';
  constructor(private actoresSrv:ActoresService) { }

  ngOnInit(): void {
    this.actoresSrv.traerTodos().subscribe((actores) => {
      this.listadoActores = JSON.parse(JSON.stringify(actores));
    });
  }

  elegido(actor:Actor){ 
    this.actorElegido= actor.nombre+" "+actor.apellido;
    this.onActorElegido.emit(actor);
  }

}
