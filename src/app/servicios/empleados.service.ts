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
  id_equipo?:string;
  nombre?:string;
  logo?:string;
}
