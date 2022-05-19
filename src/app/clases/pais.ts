export class Pais {
    nombre : string;
    bandera : string;
    capital : string;
    poblacion : number;
  
    constructor(nombre : string, bandera: string, capital: string, poblacion: number){
      this.nombre = nombre;
      this.bandera = bandera;
      this.capital = capital;
      this.poblacion = poblacion;
    }
  }