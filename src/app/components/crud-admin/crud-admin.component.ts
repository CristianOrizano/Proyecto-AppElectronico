import { Component,OnInit, ViewChild } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { error } from 'jquery';
import { Subject } from 'rxjs/internal/Subject';
import { Admin } from 'src/app/models/admin.model';
import { Ciudad } from 'src/app/models/ciudad.model';
import { AdminService } from 'src/app/services/admin.service';
import { CiudadService } from 'src/app/services/ciudad.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-crud-admin',
  templateUrl: './crud-admin.component.html',
  styleUrls: ['./crud-admin.component.css']
})
export class CrudAdminComponent implements OnInit{

  dtOptions: DataTables.Settings = {};
  /*
  dtTrigger:Subject<any>=new Subject<any>();
  dtElement: DataTableDirective | undefined; */


  public page!:number;
  //este es un arreglo de tipo Admin
  //con lo cual se llena y se lista
  admis: Admin[] = [];
    //este es un arreglo de tipo Ciudad
  //con lo cual se llena el combo
  ciudades: Ciudad[] = [];

  //este es propiedad de tipo entidad
  //en el cual estoy inicializando sus valores que no debe ingresar
   regadmin: Admin={
    codigoAd:0,
		fechanaci: "2021-08-16",
    sexo:"-1",
		ciudad: {
			codigoCiu: "-1",
		},
		estado: {
			estado: 1,	
		},
  };


  
  constructor(private admin:AdminService,private ciuda:CiudadService,private router:Router){

    this.listarAdmin();
    this.listarCiudad();
  }
  
  /*
  private pruelista(){
    this.admin.listaAdmin().subscribe(
      (data)=> this.admis= data;

    );
  } */

  //metodo para listar admin
   listarAdmin(){
    this.admin.listaAdmin().subscribe((data)=>{
      this.admis= data;
     
    });
  }

  //metodo para listar ciudad
   listarCiudad(){
    
    this.ciuda.listaciudad().subscribe(
      (data)=>this.ciudades= data
    );
  }

    

    //metodo para registrar admin
     RegistrarAdmin(){
      this.admin.Registrar(this.regadmin).subscribe(
        (x)=>{         
           Swal.fire('Registro Correcto',"Exito al registrar",'success') 
           this.LimpiarInput();
           this.router.navigate(['/listar']);
           this.listarAdmin();

        }      
      )
    }

        //metodo para buscar
        Buscar(ad :Admin){
           this.regadmin =ad;
        }

         //metodo para anular actu
         Cerrar(){
          this.listarAdmin();
          this.LimpiarInput();
         
       }

       LimpiarInput(){
        this.regadmin = { 
          codigoAd:0,

          fechanaci: "2021-08-16",
          sexo:"-1",
          ciudad: {
            codigoCiu: "-1",
          },
          estado: {
            estado: 1,	
          },
        }
      }

        //metodo para registrar admin
        ActualizarAdmin(){
          this.admin.Actualizar(this.regadmin).subscribe(
            (x)=>{         
               Swal.fire('Actualizado Correcto',"Exito al Actualizar",'success') 
               this.listarAdmin();
            }      
          )
        }

         //metodo para Eliminar admin
         Eliminar(regadmin:Admin){

          Swal.fire({
            title: '¿Desea eliminar?',
            text: "Los cambios no se van a revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, elimina.',
            cancelButtonText: 'No, cancelar'
          }).then((result) => {
              if (result.isConfirmed) {
                
                this.admin.Eliminar(regadmin.codigoAd || 0).subscribe(
                  (x)=>{         
                     Swal.fire('Eliminado Correcto',"Exito al Eliminar",'success') 
                     this.listarAdmin();
                  }      
                );
                
              }
          })
 
          
        }


   



  ngOnInit(): void {

 
 
     
  }






}
