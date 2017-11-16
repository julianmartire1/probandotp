export abstract class Juego {
  public nombre = 'Sin Nombre';
  public jugador: string;
  public gano = false;

  constructor(nombre?: string, gano?: boolean,jugador?:string) {
    console.log("Clase JUEGO",jugador)
    if (nombre)
      this.nombre = nombre;

    if (gano)
      this.gano = gano;
    if(jugador)
      this.jugador=jugador;
  }


  

  public abstract verificar():any; 
  
  public retornarAyuda() {
    
    return "NO hay Ayuda definida";
  }
}
