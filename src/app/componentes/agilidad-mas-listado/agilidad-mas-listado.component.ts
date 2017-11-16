import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
@Component({
  selector: 'app-agilidad-mas-listado',
  templateUrl: './agilidad-mas-listado.component.html',
  styleUrls: ['./agilidad-mas-listado.component.css']
})
export class AgilidadMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  constructor() { this.listadoParaCompartir = new Array<any>()}

  ngOnInit() {
  }

  tomarJuegoTerminado(juego: Juego)
  {
    console.log("LISTADO",juego)
    let local=JSON.parse(localStorage.getItem("agilidad"));
    let user=JSON.parse(localStorage.getItem("login"));

    let obj ={
      gano : true,
      jugador : user.usuario,
      nombre : juego.nombre,
      n1 : juego["number1"],
      n2 : juego["number2"],
      cuenta : juego["cuenta"],
      resultado : juego["resultado"]
    }
    console.log(obj);

    this.listadoParaCompartir.push(obj);
    if(local==null)
    {
      localStorage.setItem("agilidad",JSON.stringify(this.listadoParaCompartir));
    }
    else
    {
      let array : any[]=local;
      array.push(obj);
      localStorage.setItem("agilidad",JSON.stringify(array));
    }
  }
}
