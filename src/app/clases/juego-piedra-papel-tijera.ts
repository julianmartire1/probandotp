import { Juego } from '../clases/juego'

export class JuegoPiedraPapelTijera extends Juego {
    public numeroSecreto: number = 0;
    public   numeroIngresado = 0;
    public    resultado: string;
     constructor(nombre?: string, gano?: boolean, jugador?: string) {
         super("Piedra Papel Tijera", gano, jugador);
 
         this.numeroSecreto = Math.floor((Math.random() * 3) + 1);
 
     }
     /**
      *  1 = piedra
      *  2 = papel 
      *  3 = tijeras 
      */
     jugar() {
         switch (this.numeroSecreto) {
             case 1:
                 if (this.numeroIngresado == 2) {
                     this.resultado = "GANO";
                 }
                 if (this.numeroIngresado == 3) {
                     this.resultado = "PERDIO";
                 }
                 if (this.numeroIngresado == 1) {
                     this.resultado = "EMPATO";
                 }
                 break;
             case 2:
                 if (this.numeroIngresado == 2) {
                     this.resultado = "EMPATO";
                 }
                 if (this.numeroIngresado == 3) {
                     this.resultado = "GANO";
                 }
                 if (this.numeroIngresado == 1) {
                     this.resultado = "PERDIO";
                 }
                 break;
             case 3:
                 if (this.numeroIngresado == 2) {
                     this.resultado = "PERDIO";
                 }
                 if (this.numeroIngresado == 3) {
                     this.resultado = "EMPATO";
                 }
                 if (this.numeroIngresado == 1) {
                     this.resultado = "GANO";
                 }
                 break;
             default:
             this.resultado = "error";
                 break;
         }
     }
 
     public verificar() : string {
        this.jugar();
        return this.resultado;
        
     }
}
