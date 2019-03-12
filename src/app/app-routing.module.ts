import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [

  {path: 'home', component:HomeComponent},
  {path:'registro',component:RegistroComponent},
  // cuando no coincida ninguna ruta carga el home!
  {path: '**', pathMatch:'full', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
