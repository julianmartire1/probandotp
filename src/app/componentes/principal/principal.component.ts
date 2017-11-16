
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  constructor(private router : Router) {  }

  irJuegos()
  {
    let usuario = localStorage.getItem("login");
    if( usuario == null || usuario == "")
      this.router.navigate(['/Login']);
    else 
      this.router.navigate(['/Juegos']);
  }

  ngOnInit() {
  }

 

}
