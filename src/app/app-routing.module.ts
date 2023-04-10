import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudAdminComponent } from './components/crud-admin/crud-admin.component';
import { RegistrarAdmComponent } from './components/registrar-adm/registrar-adm.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent },
  {path: 'listar', component: CrudAdminComponent },
  {path: 'registrar', component: RegistrarAdmComponent },
  {path: '', redirectTo:'inicio',pathMatch:'full' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
