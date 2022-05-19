import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';
import { AltaActoresComponent } from './componentes/alta-actores/alta-actores.component';
import { AltaPeliculaComponent } from './componentes/alta-pelicula/alta-pelicula.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';

const routes: Routes = [
  {path:'bienvenido',
   component:BienvenidoComponent
  },
  {
    path:'busqueda',
    component: BusquedaComponent
  },
  {
    path: 'peliculas/alta',
    component: AltaPeliculaComponent
  }, 
 {
    path: 'actor/alta',
    component: AltaActoresComponent
  },
 /* {
    path: 'actor/listado',
    component:
  },
  {
    path: 'peliculas/listado',
    component:
  },*/
  {
    path: 'actor/actorpelicula',
    component: ActorPeliculaComponent
  },
  {
    path:'',
    redirectTo: 'bienvenido',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo: 'bienvenido',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
