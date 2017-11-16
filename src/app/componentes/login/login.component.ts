import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  private subscription: Subscription;
  usuario = '';
  clave = '';
  progreso: number;
  progresoMensaje = "esperando...";
  logeando = true;
  ProgresoDeAncho: string;
  mensajeLogin;
  clase = "progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
    this.progreso = 0;
    this.ProgresoDeAncho = "0%";

  }

  ngOnInit() {
  }

  Entrar() {
    this.logeando = false;
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    console.log(usuario);
    setTimeout(() => {


      if (this.usuario == usuario.usuario && this.clave == usuario.pw) {
        let obj ={
          login:true,
          usuario:this.usuario
        };
        setTimeout(() => {
          localStorage.setItem("login",JSON.stringify(obj));
          this.router.navigate(['/Principal']);
        }, 2000);
      }
      else {
        this.logeando = true;
        this.mensajeLogin = "Usuario o contraseña incorrecta";
        document.getElementById('id02').style.display = 'block';

        setTimeout(() => {
          document.getElementById('id02').style.display = 'none';
        }, 2000);
      }
    }, 2000);
  }
  MoverBarraDeProgreso() {

    this.logeando = false;
    this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje = "NSA spy...";
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso = this.progreso + 1;
      this.ProgresoDeAncho = this.progreso + 20 + "%";
      switch (this.progreso) {
        case 15:
          this.clase = "progress-bar progress-bar-warning progress-bar-striped active";
          this.progresoMensaje = "Verificando ADN...";
          break;
        case 30:
          this.clase = "progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje = "Adjustando encriptación..";
          break;
        case 60:
          this.clase = "progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje = "Recompilando Info del dispositivo..";
          break;
        case 75:
          this.clase = "progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje = "Recompilando claves facebook, gmail, chats..";
          break;
        case 85:
          this.clase = "progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje = "Instalando KeyLogger..";
          break;

        case 100:
          console.log("final");
          this.progresoMensaje = "Listo";
          this.subscription.unsubscribe();
          this.Entrar();
          break;
      }
    });
    //this.logeando=true;
  }

}
