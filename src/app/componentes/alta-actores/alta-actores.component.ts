import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { ActoresService } from 'src/app/servicios/actores.service';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {
 
  pais:string='';
  paisFlag:boolean=false;
  formulario: FormGroup;
  nuevoPais:any | Pais;
  registroOk:any | boolean;
  constructor(private fb: FormBuilder, private actorSrv:ActoresService) { 
    this.formulario = this.fb.group({
      nombre: ['', [
        Validators.required
      ]],
      apellido: ['', [
        Validators.required
      ]],
      username: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required
      ]]
    });
 }

  ngOnInit(): void {
  }

  onRegistro() { 
    const form = this.formulario.value; 
  
    let datos:Actor = {
     nombre: form.nombre,
      apellido: form.apellido ,
      email: form.email ,
      pais: this.nuevoPais
     }
 
    this.actorSrv.addItem(datos).then((res)=>{
      if(res){
        this.registroOk=true;
      }
     }); 
  }

  capturarPaisSeleccionado(data:any){
    this.nuevoPais = new Pais(
      data.translations.spa.common,
      data.flags.png,
      data.capital[0],
      data.population
    );  
  }

  
 
}
