import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrudAdminComponent } from './components/crud-admin/crud-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RegistrarAdmComponent } from './components/registrar-adm/registrar-adm.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { DataTablesModule } from "angular-datatables";
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [
    AppComponent,
    CrudAdminComponent,
    RegistrarAdmComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DataTablesModule,
    NgxPaginationModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
