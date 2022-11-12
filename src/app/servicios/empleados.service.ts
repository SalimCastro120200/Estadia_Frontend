import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  url= '/api/empleados'

  constructor( private http: HttpClient ) { }

  // GET empleados
  getEmpleados(){
    return this.http.get( this.url );
  }

  //get un Empleados
  getUnEmpleados(id:string){
    return this.http.get(this.url+'/'+id);
  }


  //agregar Empleados
  addEmpleados(Empleados:Empleados)
  {
    return this.http.post(this.url, Empleados);
  }


  //eliminar
  deleteEmpleados(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar Empleados
  editEmpleados(id:string, Empleados:Empleados){
    return this.http.put(this.url+'/'+id, Empleados);
  }

}

export interface Empleados{
  id_empleados?:string;
  nombres?:string;
  a_paterno?:string;
  a_materno?:string;
  sexo?: string;
  correo?: string;
  telefono?: string;
  fecha_nacimiento?: string;
  dir_calle?: string;
  dir_numero?: string;
  dir_cp?: string;
  dir_colonia?: string;
}
