import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
@Component({
  selector: 'app-adivina-mas-listado',
  templateUrl: './adivina-mas-listado.component.html',
  styleUrls: ['./adivina-mas-listado.component.css']
})
export class AdivinaMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  public local:any[];
  constructor() { this.listadoParaCompartir = new Array<any>()}


  ngOnInit() {
  }

  tomarJuegoTerminado(juego: Juego)
  {
    let local=JSON.parse(localStorage.getItem("adivina"));
    

    let obj ={
      gano : juego.gano,
      jugador : juego.jugador,
      nombre : juego.nombre,
      numeroIngresado : juego["numeroIngresado"],
      numeroSecreto : juego["numeroSecreto"]
    }

    this.listadoParaCompartir.push(obj);
    if(local==null)
    {
      localStorage.setItem("adivina",JSON.stringify(this.listadoParaCompartir));
    }
    else
    {
      let array : any[]=local;
      array.push(obj);
      localStorage.setItem("adivina",JSON.stringify(array));
    }
    
  }
}
