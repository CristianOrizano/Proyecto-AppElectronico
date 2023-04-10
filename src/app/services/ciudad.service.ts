import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad.model';
import { Observable } from 'rxjs';


const baseURL="http://localhost:8091/rest/Ciudad";

@Injectable({
  providedIn: 'root'
})


export class CiudadService {

  constructor(private httpclient: HttpClient) {}

  listaciudad():Observable<Ciudad[]>{
    return this.httpclient.get<Ciudad[]>(baseURL);
  }
  
}
