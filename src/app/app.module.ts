import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { AltaActoresComponent } from './componentes/alta-actores/alta-actores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { AltaPeliculaComponent } from './componentes/alta-pelicula/alta-pelicula.component';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';
import { TablaActoresComponent } from './componentes/tabla-actores/tabla-actores.component';
import { ListadoPeliculasComponent } from './componentes/listado-peliculas/listado-peliculas.component';
import { DetalleActorComponent } from './componentes/detalle-actor/detalle-actor.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
@NgModule({
  declarations: [
    AppComponent,
    TablaPeliculaComponent,
    BusquedaComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent,
    AltaActoresComponent,
    AltaPeliculaComponent,
    TablaActorComponent,
    ActorPeliculaComponent,
    TablaActoresComponent,
    ListadoPeliculasComponent,
    DetalleActorComponent,
    DetallePaisComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
     //FIREBASE
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFireAuthModule,
     AngularFirestoreModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
