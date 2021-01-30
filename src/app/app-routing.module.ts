import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  
  {  path: '', component: AppComponent  },
  { path: 'formulario',component: FormularioComponent },
  // { path: 'cadastro', component: UsuariosComponent },
  // { path: 'contas', component: ContasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
