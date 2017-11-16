import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
@Component({
  selector: 'app-pptlistado',
  templateUrl: './pptlistado.component.html',
  styleUrls: ['./pptlistado.component.css']
})
export class PptlistadoComponent implements OnInit {

  public listadoParaCompartir: Array<any>;
  constructor() { this.listadoParaCompartir = new Array<any>()}

  ngOnInit() {
  }

  tomarJuegoTerminado(juego: Juego)
  {
    console.log("listado",juego);
    let local=JSON.parse(localStorage.getItem("ppt"));
    let user=JSON.parse(localStorage.getItem("login"));

    let obj ={
      gano : true,
      jugador : user.usuario,
      nombre : juego.nombre,
      n1 : juego["numeroIngresado"],
      n2 : juego["numeroSecreto"],
      resultado : juego["resultado"],
      ganados: 0,
      perdidos:0,
      empates:0
    }
    console.log(obj);

    this.listadoParaCompartir.push(obj);
    if(local==null)
    {
      localStorage.setItem("ppt",JSON.stringify(this.listadoParaCompartir));
    }
    else
    {
      let array : any[]=local;
      array.push(obj);
      localStorage.setItem("ppt",JSON.stringify(array));
    }
  }

}
