import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';

@Component({
  selector: 'app-anagramalistado',
  templateUrl: './anagramalistado.component.html',
  styleUrls: ['./anagramalistado.component.css']
})
export class AnagramalistadoComponent implements OnInit {

  public listadoParaCompartir: Array<any>;
  constructor() { this.listadoParaCompartir = new Array<any>()}

  ngOnInit() {
  }

  tomarJuegoTerminado(juego: Juego)
  {
    /*
    gano
nombre
palabraDesordenada
palabraOrdenada
resultado
    */
    console.log("LISTADO",juego)
    let local=JSON.parse(localStorage.getItem("anagrama"));
    let user=JSON.parse(localStorage.getItem("login"));

    let obj ={
      gano : juego.gano,
      jugador : user.usuario,
      nombre : juego.nombre,
      palabraDesordenada : juego["palabraDesordenada"],
      palabraOrdenada : juego["palabraOrdenada"],
      cuenta : juego["cuenta"],
      resultado : juego["resultado"]
    }
    console.log(obj);

    this.listadoParaCompartir.push(obj);
    if(local==null)
    {
      localStorage.setItem("anagrama",JSON.stringify(this.listadoParaCompartir));
    }
    else
    {
      let array : any[]=local;
      array.push(obj);
      localStorage.setItem("anagrama",JSON.stringify(array));
    }
  }

}
