import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  miServicioJuego:JuegoServiceService
  listadoAdivina;
  listadoAnagrama;
  listadoAgilidad;
  listadoPPT;
  select;

  juegos = [
    {value: 'adivina', viewValue: 'Adivina'},
    {value: 'ppt', viewValue: 'Piedra Papel Tijera'},
    {value: 'anagrama', viewValue: 'Anagrama'},
    {value: 'agilidad', viewValue: 'Agilidad'},
  ];
  constructor(servicioJuego:JuegoServiceService) {
    this.miServicioJuego = servicioJuego;
    this.listadoAdivina=JSON.parse(localStorage.getItem("adivina"));
    this.listadoAnagrama=JSON.parse(localStorage.getItem("anagrama"));
    this.listadoAgilidad=JSON.parse(localStorage.getItem("agilidad"));
    this.listadoPPT=JSON.parse(localStorage.getItem("ppt"));
  }

  buscar()
  {
    console.log(this.select)
    switch (this.select) {
      case "adivina":
      
      break;
      case "ppt":
      
      break;
      case "agilidad":
      
      break;
      case "anagrama":
      
      break;    
      default:
        break;
    }
  }
  
  ngOnInit() {

    console.log("ADIVINA",this.listadoAdivina);
    console.log("ANAGRAMA",this.listadoAnagrama);
    console.log("AGILIDAD",this.listadoAgilidad);
    console.log("PPT",this.listadoPPT);
  }
/*
  llamaService(){
    console.log("llamaService");
    this.listadoParaCompartir= this.miServicioJuego.listar();
  }

  llamaServicePromesa(){
    console.log("llamaServicePromesa");
    this.miServicioJuego.listarPromesa().then((listado) => {
        this.listadoParaCompartir = listado;
    });
  }*/
}
