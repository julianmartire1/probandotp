import { Juego } from '../clases/juego'


export class JuegoAnagrama extends Juego   {

    arrayDePalabras : string[] = ["Impresora","Monitor","Celular","Gabinete","Mouse","Teclado","Pendrive","SSD"];
    palabraDesordenada : string = "";
    palabraOrdenada : string;
    resultado : string;

    constructor(nombre?: string, gano?: boolean, jugador?:string)
    {
        super("Anagrama",gano,jugador);
        
    }

    public generarPalabra() 
    {
      var numero = Math.floor((Math.random() * 6) + 1);
      console.info('Palabra desordenada: ' + this.arrayDePalabras[numero]);
      this.palabraOrdenada = this.arrayDePalabras[numero];
      this.gano = false;
      
      this.palabraDesordenada = this.palabraOrdenada.split("").sort().join("");

      return this.palabraDesordenada;
    }

    public jugar(palabraIngresada)
    {
        if(this.palabraOrdenada.toLowerCase() == palabraIngresada.toLowerCase())
        {
            this.resultado = "true";
        }
        else
        {
            this.resultado = "false";
        }
    }

    public verificar()
    {
        return this.resultado;
    }

}
