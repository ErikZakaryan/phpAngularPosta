import { Injectable } from '@angular/core';
// data.service.ts (crear una conexion entre el archivo PHP)
// y angular
// GET,POST,PUT,DELETE
// SIEMPRE QUE NOS CONECTAMOS A UNA URL
import {HttpClient,HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
// Autodeclarar en providers que data era un servicio que ibamos a consumir.
export class DataService {
  url : string = "http://localhost/backend/backend.php";
  constructor(private _http : HttpClient) { }

  getLibros() {
    return this._http.get(this.url);
  }
  // cuando llamemos a la funcion getLibros en nuestro cmponente nos va a devolver la informacion del get.A

}
