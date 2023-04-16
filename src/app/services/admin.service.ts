import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.model';


const baseURL="https://decorous-control-production.up.railway.app/rest";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  //metodo del la api para poder listar
listaAdmin():Observable<Admin[]>{
  return this.http.get<Admin[]>(baseURL);
}

 //metodo del la api para poder Registrar
 Registrar(data:Admin):Observable<any>{
  return this.http.post<any>(baseURL,data);
   }

   //metodo del la api para poder Registrar
 Actualizar(data:Admin):Observable<any>{
  return this.http.put<any>(baseURL,data);
   }

      //metodo del la api para poder Registrar
 Eliminar(idAdmi:number):Observable<any>{
  return this.http.delete<any>(baseURL+"/"+idAdmi);
   }

}
