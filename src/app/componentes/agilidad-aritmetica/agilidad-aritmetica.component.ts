import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
   @Output() enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;  
  ocultarVerificar: boolean;
  ingresado : any;
  Tiempo: number;
  repetidor:any;
  Mensajes : any;
  band: any = ".";
  private subscription: Subscription;
  ngOnInit() {
  }
   constructor() {
     let local=JSON.parse(localStorage.getItem("login"));
     this.ocultarVerificar=true;
     this.Tiempo=5; 
    this.nuevoJuego = new JuegoAgilidad("Agilidad",local.usuario);
    this.nuevoJuego.number1 = null;
    this.nuevoJuego.number2 = null;
    this.nuevoJuego.operator = null;
    this.nuevoJuego.cuenta = null;
    
    console.log(this.nuevoJuego.jugador)
    console.info("Inicio agilidad");  
  }
  NuevoJuego() {
    this.band=".";
    this.ocultarVerificar=false;   
    this.nuevoJuego = new JuegoAgilidad();
    this.ingresado = null; 
   this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {       
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=5;
        this.nuevoJuego.number1 = null;
        this.nuevoJuego.number2 = null;
        this.nuevoJuego.operator = null;
        this.nuevoJuego.cuenta = null;
        this.ingresado=null;
      }
      }, 900);
  }
  verificar()
  {
    
    this.nuevoJuego.numberoIngresao = this.ingresado;
    this.ocultarVerificar=false;    
    clearInterval(this.repetidor);
    
    this.band=this.nuevoJuego.verificar();
    console.log(this.band);
    if(this.band)
    {
      this.enviarJuego.emit(this.nuevoJuego);
    }
    this.Tiempo = 5;
    this.ocultarVerificar=true;   
    this.nuevoJuego.number1 = null;
    this.nuevoJuego.number2 = null;
    this.nuevoJuego.operator = null;
    this.nuevoJuego.cuenta = null;
    this.ingresado=null;
  }
 
}
