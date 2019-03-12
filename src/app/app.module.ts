import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // LA DECLARACION DE MODULOS DENTRO DEL module.ts HACE QUE SEAN GLOBALES Y LO PUEDAN USAR CUALQUIER COMPONENTES

import { DataService } from './servicios/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService,HttpClient,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
