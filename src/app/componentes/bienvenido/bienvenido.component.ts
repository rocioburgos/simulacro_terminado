import { Component, OnInit } from '@angular/core';
import { GitService } from 'src/app/servicios/git.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  datosGit: any;
  constructor(private gitSrv: GitService) { }

  ngOnInit(): void {

    this.gitSrv.traerTodo().then((data) => {
      this.datosGit = data;
      console.info("Datos de github: "+this.datosGit);
    });
  }

}
