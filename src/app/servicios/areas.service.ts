import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  url= '/api/area'

  constructor( private http: HttpClient ) { }

  // GET Areas
  getAreas(){
    return this.http.get( this.url );
  }

  // GET un Área
  getUnAreas(id:string){
    
    console.log(this.http.get(this.url+'/'+id));
  }


  // POST Areas
  addAreas(area:Area)
  {
    return this.http.post(this.url, area);
  }


  // DELETE Areas
  deleteAreas(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  // PUT Areas
  editAreas(id:string, area:Area){
    return this.http.put(this.url+'/'+id, area);
  }

}

export interface Area{
  id_area?:string;
  nombre?:string;
  estado?:number;
}
