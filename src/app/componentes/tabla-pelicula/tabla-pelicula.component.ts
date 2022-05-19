import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { eTipo, Peliculas } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Output() onPeliculaSeleccionada:EventEmitter<any>= new EventEmitter();
  peliculas: Peliculas[]=[
    {id: 1, Nombre: 'Shrek', tipo: eTipo.Comedia, fechaEstreno:'18/05/2001', cantidadPublico:10, fotoPelicula:'https://xl.movieposterdb.com/21_09/2001/126029/xl_126029_26c17ee4.jpg'},
    {id: 2, Nombre: 'Shrek 2 ', tipo: eTipo.Comedia, fechaEstreno:'21/05/2004', cantidadPublico:10, fotoPelicula:'https://static.posters.cz/image/750/posters/shrek-2-one-sheet-i653.jpg'},
    {id: 3, Nombre: 'Shrek Tercero', tipo: eTipo.Comedia, fechaEstreno:'18/05/2007', cantidadPublico:10, fotoPelicula:'https://es.web.img3.acsta.net/medias/nmedia/18/68/23/20/20054548.jpg'}
  ];
  constructor() { }

  ngOnInit(): void {
  }
 
  peliculaSeleccionada(pelicula:any){
    this.onPeliculaSeleccionada.emit(pelicula);
  }
}
