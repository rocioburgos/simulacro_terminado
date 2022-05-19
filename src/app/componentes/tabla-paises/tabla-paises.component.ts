import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  listadoPaises: any[] = [];
  paisElegido:string='';

  @Output()eventoPaisSeleccionado:EventEmitter<any> = new EventEmitter<any>();
  constructor(private paisesSrv: PaisesService) { }

  ngOnInit(): void {
    this.paisesSrv.traerEuropa().subscribe((paises) => {
      this.listadoPaises = JSON.parse(JSON.stringify(paises));
    });

  }
  
  enviarEventoPaisSeleccionado(pais:any){
    // console.log(pais);
    this.paisElegido= pais.translations.spa.common;
    this.eventoPaisSeleccionado.emit(pais);
  }

}
