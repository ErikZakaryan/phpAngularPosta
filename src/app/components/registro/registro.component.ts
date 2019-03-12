import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  valor : FormGroup;

  // nombre : string = 'Erik'; // VARIABLE VINCULADA CON EL INPUT nombre A TRAVEZ DEL ngModel 
  // apellido : string = 'Zakaryan';
  // correo : string = 'Lala';
  constructor() {
    this.valor = new FormGroup({
      // ESTO ES PARA CONTROLES DE FORMULARIOS
      // VALIDATORS HACE VALIDACIONES DE CONTENIDO
      // [ngModel]="aaa" ESTO CARGA EL VALOR, EL PRIMER VALOR DEL FormGroup HACE LO MISMO. O SEA CARGA EL VALOR PASADO AL INPUT CON formControlName: nombre
      // VALIDACIONES: REQUIRED, PATTERN, MINLENGHT
      'nombre': new FormControl('',Validators.required),
      'apellido': new FormControl('',Validators.minLength(2)),
      'correo': new FormControl('', [Validators.required, Validators.minLength(10)])
      // new FormControl('')
    })
  }

  ngOnInit() {

  }

  guardar(){
    console.log(this.valor); // MOSTRAMOS
  }

}
