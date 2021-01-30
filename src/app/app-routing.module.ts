import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario/formulario.component';

const routes: Routes = [{
  path: 'formulario',
  component: FormularioComponent
},
/* { path: '',
component: HomeComponent
} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
