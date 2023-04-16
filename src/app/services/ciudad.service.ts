import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad.model';
import { Observable } from 'rxjs';


const baseURL="https://decorous-control-production.up.railway.app/restciu";

@Injectable({
  providedIn: 'root'
})


export class CiudadService {

  constructor(private httpclient: HttpClient) {}

  listaciudad():Observable<Ciudad[]>{
    return this.httpclient.get<Ciudad[]>(baseURL);
  }
  
}
