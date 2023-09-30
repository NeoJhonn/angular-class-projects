import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// Aqui colocamos nossas rotas
const routes: Routes = [
  // criar uma rota - Objeto de rota
  // 1 - zerar rotas
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  // 2 - criar a rota da Home
  // defino rota e defino componente
  {path: 'home', component: HomeComponent}
];

// Principal arquivo de roteamento
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
