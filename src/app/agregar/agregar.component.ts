import { Component, OnInit } from '@angular/core';
import { AreasService, Area } from '../servicios/areas.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  area: Area={
    id_area:'',
    nombre:'', 
  };

  constructor(private AreasService: AreasService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    delete this.area.id_area;
    this.AreasService.addAreas(this.area).subscribe();
    this.router.navigate(['/areas']);
  }

}
