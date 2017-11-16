import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//para poder hacer las validaciones
import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  band : boolean=false;
  mensajeRegistro : string;

  usuario;
  clave;
  clave2;

/*
  usuario=new FormControl('');
  clave=new FormControl("");
  clave2=new FormControl("");
  formRegistro:FormGroup=this.miConstructor.group({
    usuario:this.usuario,
    clave: this.clave,
    clave2: this.clave2
  });*/

  constructor( private miConstructor:FormBuilder,private router: Router) { }

  ngOnInit() {
  }

  registrar()
  {
    let obj ={
      usuario: this.usuario,
      pw: this.clave
    }
    this.band=true;
    localStorage.setItem("usuario",JSON.stringify(obj));
    document.getElementById('id02').style.display='block';
    this.mensajeRegistro="Cuenta creada con exito, bienvenido " + obj.usuario+"!!!";

    setTimeout(() => {
      this.router.navigate(['/Juegos']);
    }, 3000);
  }

  /*
  email: string;
  clave : string;
  constructor( ) { }
  registrar()
  {
    localStorage.setItem("usuario", JSON.stringify("{ usuario: this.email , clave : this.clave}"));
    console.log(localStorage.getItem("usaurio"));
  }

  ngOnInit() {
  } 
  */

}
