import { DataService } from './../../servicios/data.service';
import { Component, OnInit } from '@angular/core';

// HOME.COMPONENT.TS
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //nuevasCamciones: any [] = []
  libros : any [] = [];
  // mas de una fila declaramos any : [] = []
  constructor(private data : DataService) { }

  ngOnInit() {
    // function(informacion)
    // lo primero que se ejecuta post constructor
    // get,post,put,delete -> objeto observable.
    this.data.getLibros()
      .subscribe((informacion:any) => {
        //informacion tendra toda la data del get al PHP
        this.libros = informacion;
        console.log(this.libros); 
        // nombre : string
        // nombre = 1
      });
  }

}
