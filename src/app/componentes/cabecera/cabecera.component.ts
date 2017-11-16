import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
band=false;
  constructor(private router:Router) { }

  logout()
  {
    localStorage.removeItem("login");
    this.router.navigate(['/Login']);
  }

  ngOnInit() {
    let local=JSON.parse(localStorage.getItem("login"));
    if(local!=null)
    {
      this.band=true;
    }
    else 
    {
      this.band=false;
    }
  }

}
