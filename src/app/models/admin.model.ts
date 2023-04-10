import { Ciudad } from "./ciudad.model";
import { Estado } from "./estado.model";

export class Admin {

    codigoAd?:number;
	
	nombre?:string;
	
	apellido?:string;

	direccion?:string;
	
	telefono?:number;
	
	sueldo?:number;

	sexo?:string;
	
	fechanaci?:string;
	
    ciudad?:Ciudad;
	
	estado?:Estado;


}
