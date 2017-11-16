import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  @Output() enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAnagrama;
  palabraDesordenada : string;
  palabraIngresada : string;
  mensaje =".";
  bandJuego: boolean=false;
  bandVerificar : boolean=true;
  mostrar=false;
  constructor() 
  {
    this.nuevoJuego = new JuegoAnagrama();
  }

  generarPalabra()
  {
    this.palabraDesordenada = this.nuevoJuego.generarPalabra();
    this.bandJuego=true;
    this.bandVerificar=false;
    this.mostrar=false;
  }

  jugar()
  {
    this.nuevoJuego.jugar(this.palabraIngresada);
    this.mensaje=this.nuevoJuego.verificar();
    this.enviarJuego.emit(this.nuevoJuego);
    this.bandJuego=false;
    this.bandVerificar=true;
    this.palabraIngresada=null;
    this.mostrar=true;
  }

  ngOnInit() {
  }

}
