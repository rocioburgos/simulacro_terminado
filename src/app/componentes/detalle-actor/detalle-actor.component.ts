import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css']
})
export class DetalleActorComponent implements OnInit {

  @Input() actor:any |Actor; 
  @Output() onPaisSeleccionado:EventEmitter<any>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickDetallePais(paisdeorigen:Pais){
    this.onPaisSeleccionado.emit(paisdeorigen);
  }


}
